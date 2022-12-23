<script>
	import MatchCard from './MatchCard.svelte';
	import { fireRequest } from '$lib/fireRequest';
	import { onMount } from 'svelte';
	import { user_tokens, user_search, user_sort, user_show_not_no_risk_recommended, user_sport, user_show_cutoff_passed, user_datetime } from "../stores.js";

	// utilities
	let loading = true;
	let data = {};
	let sports = [];

	async function fetchData() {
		loading = true;

		let req = await fireRequest('/matches/', {
			tokens: $user_tokens,
			search: $user_search,
			sort: $user_sort,
			sport: $user_sport,
			datetime: $user_datetime,
			no_risk_recommended: !$user_show_not_no_risk_recommended,
			cutoff_passed: $user_show_cutoff_passed
		});

		let req_data = await req.json();

		let sports_req = await fireRequest('/unique_sports/');
		let sports_req_data = await sports_req.json();

		data = req_data;
		sports = sports_req_data;
		loading = false;
	}

	onMount(async () => {
		fetchData();
	});
</script>

<div class="drawer drawer-mobile h-auto">
	<input id="settings-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col pb-8">
		<div class="px-2 lg:px-4">
			<div class="flex justify-between pt-2 pb-4">
				<h1 class="font-bold text-2xl my-auto">Gambit Plays</h1>
				<div class="flex space-x-2">
					<label
						for="settings-drawer"
						class="btn btn-primary btn-square drawer-button lg:hidden"
						aria-label="Show filters"><i class="fa-solid fa-sliders" /></label
					>
					<button
						class="btn btn-primary btn-square"
						aria-label="Refresh data"
						class:loading
						on:click={fetchData}
					>
						{#if !loading}
							<i class="fa-solid fa-refresh" />
						{/if}
					</button>
				</div>
			</div>
			<div class="grid grid-cols-1 gap-4">
				{#if loading}
					<progress class="progress col-span-3 progress-primary" />
				{:else}
					{#each data.results as item}
						<MatchCard match={item} tokens={$user_tokens} />
					{:else}
						<div class="alert alert-warning col-span-4">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="stroke-current flex-shrink-0 h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
									/></svg
								>
								<span
									>Oops, looks like there are no plays at this time for the filters you selected.
									Try looking at our historical data or adjusting your filters.</span
								>
							</div>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
	<div class="drawer-side shadow-lg">
		<label for="settings-drawer" class="drawer-overlay" />
		<div class="menu px-2 py-2 w-80 bg-base-300 flex flex-col space-y-4">
			<label
				for="settings-drawer"
				class="btn btn-primary drawer-button lg:hidden"
				aria-label="Close"><i class="fa-solid fa-xmark" /></label
			>
			<div class="card shadow-lg">
				<div class="card-body p-4">
					<h2 class="card-title">Token amount</h2>
					<p class="font-light italic text-sm">The number of tokens you wish to bet.</p>
					<div class="card-actions justify-end">
						<input
							type="number"
							placeholder="1000"
							class="input input-bordered w-full"
							min="50"
							bind:value={$user_tokens}
						/>
						<div class="btn-group w-full">
							<!-- <input
								type="radio"
								name="tokens"
								value={1000}
								data-title="1k"
								class="btn"
								bind:group={tokens}
							/> -->
							<input
								type="radio"
								name="tokens"
								value={2500}
								data-title="2.5k"
								class="btn"
								bind:group={$user_tokens}
							/>
							<input
								type="radio"
								name="tokens"
								value={5000}
								data-title="5k"
								class="btn"
								bind:group={$user_tokens}
							/>
							<input
								type="radio"
								name="tokens"
								value={10000}
								data-title="10k"
								class="btn"
								bind:group={$user_tokens}
							/>
							<input
								type="radio"
								name="tokens"
								value={20000}
								data-title="20k"
								class="btn"
								bind:group={$user_tokens}
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="card shadow-lg">
				<div class="card-body p-4">
					<h2 class="card-title">Sort by</h2>
					<div class="card-actions justify-end">
						<div class="form-control w-full max-w-xs">
							<select class="select select-bordered font-normal" bind:value={$user_sort} aria-label="Sort by">
								<option value="-max_no_risk_profit_sb_percentage">No Risk Profit - Desc</option>
								<option value="max_no_risk_profit_sb_percentage">No Risk Profit - Asc</option>
								<option value="-cutoff_datetime">Cutoff Time - Desc</option>
								<option value="cutoff_datetime">Cutoff Time - Asc</option>
								<option value="-datetime">Date - Desc</option>
								<option value="datetime">Date - Asc</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="card shadow-lg">
				<div class="card-body p-4">
					<h2 class="card-title">Filter</h2>
					<div class="card-actions justify-end">
						<div class="form-control w-full">
							<label class="label cursor-pointer">
								<span class="label-text ">Show unprofitable?</span>
								<input type="checkbox" class="toggle" bind:checked={$user_show_not_no_risk_recommended} />
							</label>
						</div>
						<div class="form-control w-full max-w-xs">
							<label class="label">
								<span class="label-text ">Search by name, URL, etc.</span>
							</label>
							<input
								type="text"
								placeholder="Search"
								class="input input-bordered w-full max-w-xs "
								bind:value={$user_search}
							/>
						</div>
						<div class="form-control w-full max-w-xs">
							<label class="label">
								<span class="label-text ">Filter by sport</span>
							</label>
							<select class="select select-bordered font-normal" bind:value={$user_sport}>
								<option disabled selected>Pick one</option>
								{#each sports as sport}
									<option>{sport}</option>
								{/each}
							</select>
						</div>
					</div>
				</div>
			</div>

			<div class="card shadow-lg">
				<div class="card-body p-4">
					<h2 class="card-title">Historical data</h2>
					<p class="font-light italic text-sm">View plays you can no longer bet on.</p>
					<div class="card-actions justify-end">
						<div class="form-control w-full">
							<label class="label cursor-pointer">
								<span class="label-text ">Show historical plays?</span>
								<input type="checkbox" class="toggle" bind:checked={$user_show_cutoff_passed} />
							</label>
						</div>

						<!-- <div class="form-control w-full max-w-xs">
							<label class="label">
								<span class="label-text ">Find plays on date (local time)</span>
							</label>
							<input
								type="date"
								placeholder="2022-01-01"
								min="2022-08-01"
								class="input input-bordered w-full max-w-xs"
								bind:value={datetime}
								disabled={!show_cutoff_passed}
							/>
						</div> -->
					</div>
				</div>
			</div>

			<button class="btn btn-secondary btn-block" class:loading on:click={fetchData}
				>Apply settings</button
			>
		</div>
	</div>
</div>
