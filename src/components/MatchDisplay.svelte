<script>
	import MatchCard from './MatchCard.svelte';
	import { fireRequest } from '$lib/fireRequest';
	import { onMount } from 'svelte';

	let loading = true;
	let data = {};
	let token_amount = 1000;
	let search_term = '';
	let sort_by = 'datetime';
	// whether to show non no-risk recommended - inverted
	let show_all = false;
	let sport = '';
	// whether to show plays that passed the cutoff - inverted
	let historical = false;
	let historical_date = '';

	async function fetchData() {
		loading = true;

		let req = await fireRequest('/matches/', {
			no_risk_recommended: true,
			cutoff_passed: true
		});

		let req_data = await req.json();

		data = req_data;
		loading = false;
	}

	onMount(async () => {
		fetchData();
	});
</script>

<div class="drawer drawer-mobile h-auto pb-8">
	<input id="settings-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<div class="px-2 lg:px-4">
			<div class="flex justify-between pt-2 pb-4">
				<h1 class="font-bold text-2xl my-auto">Gambit Plays</h1>
				<div class="flex space-x-2">
					<label
						for="settings-drawer"
						class="btn btn-primary btn-square drawer-button lg:hidden"
						aria-label="Show filters"><i class="fa-solid fa-sliders" /></label
					>
					<button class="btn btn-primary btn-square" aria-label="Refresh data" class:loading on:click="{fetchData}">
						{#if !loading}
							<i class="fa-solid fa-refresh" />
						{/if}
					</button>
				</div>
			</div>
			<div class="grid md:grid-cols-2 grid-cols-1 gap-4">
				{#if loading}
					<progress class="progress col-span-3 progress-primary" />
				{:else}
					{#each data.results as item}
						<MatchCard match={item} />
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
									>Oops, looks like there are no plays at this time. Try looking at our historical
									data.</span
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
							bind:value={token_amount}
						/>
						<div class="btn-group w-full">
							<input
								type="radio"
								name="token_amount"
								value={1000}
								data-title="1k"
								class="btn"
								bind:group={token_amount}
							/>
							<input
								type="radio"
								name="token_amount"
								value={2500}
								data-title="2.5k"
								class="btn"
								bind:group={token_amount}
							/>
							<input
								type="radio"
								name="token_amount"
								value={5000}
								data-title="5k"
								class="btn"
								bind:group={token_amount}
							/>
							<input
								type="radio"
								name="token_amount"
								value={10000}
								data-title="10k"
								class="btn"
								bind:group={token_amount}
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="card shadow-lg">
				<div class="card-body p-4">
					<h2 class="card-title">Sort by</h2>
					<div class="card-actions justify-end">
						<div class="btn-group w-full">
							<input
								type="radio"
								name="sort_by"
								value="datetime"
								data-title="Date"
								class="btn"
								bind:group={sort_by}
							/>
							<input
								type="radio"
								name="sort_by"
								value="profit"
								data-title="No Risk Profit"
								class="btn"
								bind:group={sort_by}
							/>
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
								<input type="checkbox" class="toggle" bind:checked={show_all} />
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
								bind:value={search_term}
							/>
						</div>
						<div class="form-control w-full max-w-xs">
							<label class="label">
								<span class="label-text ">Filter by sport</span>
							</label>
							<select class="select select-bordered " bind:value={sport}>
								<option disabled selected>Pick one</option>
								<option>Star Wars</option>
								<option>Harry Potter</option>
								<option>Lord of the Rings</option>
								<option>Planet of the Apes</option>
								<option>Star Trek</option>
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
								<input type="checkbox" class="toggle" bind:checked={historical} />
							</label>
						</div>

						<div class="form-control w-full max-w-xs">
							<label class="label">
								<span class="label-text ">Find plays on date (local time)</span>
							</label>
							<!-- we have to set color-scheme dark to make the calendar icon thing white in darkmode -->
							<input
								type="date"
								placeholder="2022-01-01"
								min="2022-08-01"
								class="input input-bordered w-full max-w-xs"
								bind:value={historical_date}
								disabled={!historical}
							/>
						</div>
					</div>
				</div>
			</div>

			<button class="btn btn-secondary btn-block" class:loading>Apply settings</button>
		</div>
	</div>
</div>
