<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import PageHeader from '$lib/PageHeader.svelte';
	import { page } from '$app/stores';
	import dayjs from 'dayjs/esm';
	import relativeTime from 'dayjs/esm/plugin/relativeTime';
	import { title } from '../../../stores';

	export let match;

	dayjs.extend(relativeTime);

	let token_amount = $page.url.searchParams.get('tokens');

	export function setTokens() {
		// this replaces the "tokens" query parameter in the URL
		let searchParams = new URLSearchParams({ tokens: token_amount });
		window.location.search = searchParams.toString();
	}

	$title = match.name;
</script>

<PageHeader
	title="Match: {match.name}"
	subtitle={dayjs(match.datetime).format('ddd, MMM D, YYYY h:mm A')}
/>

<div class="content-wrapper">
	<div class="flex flex-col space-y-4">
		<!-- nav buttons -->
		<div class="flex justify-between">
			<a class="btn" href="/"> <i class="fa-solid fa-home mr-2" /> Back Home </a>
			<a class="btn" href={match.url} target="_blank" rel="noreferer">
				<i class="fa-solid fa-arrow-up-right-from-square mr-2" />
				Open on Gambit
			</a>
		</div>

		<!-- A little input for token amount -->
		<div class="form-control w-full">
			<label class="input-group">
				<span>Tokens</span>
				<input
					type="number"
					min="50"
					placeholder="1000"
					class="input input-bordered w-full"
					bind:value={token_amount}
				/>
				<div class="btn" on:click={setTokens}>Apply</div>
			</label>
		</div>

		<div class="divider" />

		<!-- show alert if match is completed/cutoff passed -->
		{#if match.completed || match.cutoff_passed}
			<div class="alert alert-warning">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-8"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						/></svg
					>
					<span>
						{#if match.cutoff_passed}
							Oops! It's not possible to bet on this match anymore.
						{/if}
						<br />
						{#if match.completed}
							This game has already been played.
						{/if}
					</span>
				</div>
			</div>
		{/if}

		<!-- display some simple stats about the play -->
		<div class="stats stats-vertical md:stats-horizontal bg-base-200">
			<div class="stat">
				<div class="stat-figure text-secondary">
					<i class="fa-solid fa-money-bill-1-wave fa-2x" />
				</div>
				<div class="stat-title">Max No-Risk Profit</div>
				<div class="stat-value text-3xl lg:text-4xl">{match.max_no_risk_profit_sb_percentage}%</div>
			</div>

			<div class="stat">
				<div class="stat-figure text-secondary">
					<i class="fa-solid fa-clock fa-2x" />
				</div>
				<div class="stat-title">Cutoff</div>
				<div class="stat-value text-3xl lg:text-4xl">{dayjs(match.cutoff_datetime).fromNow()}</div>
				<div class="stat-desc">{dayjs(match.cutoff_datetime).format('MMM D, YYYY h:mm A')}</div>
			</div>

			<div class="stat">
				<div class="stat-figure text-secondary">
					<i class="fa-solid fa-shuffle fa-2x" />
				</div>
				<div class="stat-title">Sport</div>
				<div class="stat-value text-3xl lg:text-4xl">{match.sport}</div>
			</div>
		</div>

		<!-- iterate over each bet type -->
		{#each match.bettypes as bettype}
			<div class="p-6 rounded-xl bg-base-200">
				<p class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{bettype.name}</p>

				<!-- show lines -->
				<div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
					{#each bettype.lines as { name, odds, reward }}
					<!-- dynamically adjust the size of the cards depending on how many lines there are... -->
					<!-- note that we don't want the cards to be too big below md -->
						<div class="card border" class:md:col-span-2={bettype.lines.length == 2} class:md:col-span-4={bettype.lines.length == 1}>
							<div class="card-body p-4">
								<p class="card-title">{name}</p>
								<div>
									<p class="text-sm opacity-60 font-light">
										<i class="fa-solid fa-clock" /> reward
									</p>
									<p>{reward}</p>
								</div>
								<div>
									<p class="text-sm opacity-60 font-light"><i class="fa-solid fa-clock" /> odds</p>
									<p>{odds}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<div class="divider" />
				<!-- show info on betting -->
				<div class="grid grid-flow-row gap-8 my-4">
					{#each [bettype.no_risk, bettype.med_risk, bettype.high_risk] as riskiness_kind}
						<!-- only display anything if the riskiness kind is possible -->
						{#if riskiness_kind.possible === true}
							<div class="grid md:grid-cols-2 grid-cols-1 gap-8">
								<div class="stat p-0 m-auto place-items-center">
									<div class="stat-title opacity-90 mb-2">
										<!-- use a different badge color depending on risk kind -->
										{#if riskiness_kind.name === 'No Risk'}
											<div class="badge badge-lg badge-success">No Risk</div>
										{:else if riskiness_kind.name === 'Med Risk'}
											<div class="badge badge-lg badge-warning">Med Risk</div>
										{:else if riskiness_kind.name === 'High Risk'}
											<div class="badge badge-lg badge-error">High Risk</div>
										{:else}
											<div class="badge badge-lg badge-secondary">???</div>
										{/if}
										Expected Profit
									</div>

									<!-- Show expected profit only if it's possible to make this kind of bet -->
									{#if riskiness_kind.possible === true}
										<div class="stat-value text-2xl lg:text-3xl">
											{riskiness_kind.profit_sb_percentage}%
										</div>
										<div class="divider my-2">or</div>
										<div class="stat-value text-2xl lg:text-3xl">{riskiness_kind.profit_sb} SB</div>
									{:else}
										<div class="stat-value text-2xl lg:text-3xl">n/a</div>
									{/if}

									<!-- indicate if this type is recommended -->
									{#if riskiness_kind.recommended}
										<div class="badge badge-info mt-4 badge-lg">
											Recommended <i class="fa-solid fa-check ml-2" />
										</div>
									{:else}
										<div class="badge badge-error mt-4 badge-lg">
											Not recommended <i class="fa-solid fa-xmark ml-2" />
										</div>
									{/if}
								</div>

								<!-- list all bets -->
								<div class="flex-col">
									{#each riskiness_kind.bet as { team, amount }, i}
										<div>
											<p class="opacity-90">{team}</p>
											<p class="text-2xl font-bold">
												Bet <span class="font-bold">{amount}</span> tokens
											</p>
										</div>
										<!-- don't display this one if it's the last bet (i.e. check if index is equal to length -1) -->
										{#if i !== riskiness_kind.bet.length - 1}
											<div class="divider">and</div>
										{/if}
									{/each}
								</div>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
