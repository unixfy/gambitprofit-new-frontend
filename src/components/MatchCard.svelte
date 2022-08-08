<script>
	import dayjs from "dayjs/esm";
	import relativeTime from "dayjs/esm/plugin/relativeTime";
	export let match;

	dayjs.extend(relativeTime)

	let active_bettype_index = 0;

	function setActiveBettypeIndex(i) {
		active_bettype_index = i;
	}
</script>

<div class="card bg-base-100 shadow-lg border">
	<div class="card-body px-4 py-2">
		<div class="flex">
			<p class="card-title my-auto text-ellipsis">{match.name}</p>
			<div class="tooltip tooltip-left" data-tip="Open on GambitRewards">
				<a
					href={match.url}
					rel="noreferer"
					target="_blank"
					class="ml-auto btn btn-circle  btn-ghost"
					><i class="fa-solid fa-arrow-up-right-from-square" />
				</a>
			</div>
			<div class="tooltip tooltip-left" data-tip="More info about this match">
				<a href="/match/{match.id}" class="ml-2 btn btn-circle btn-ghost">
					<i class="fa-solid fa-file-lines" />
				</a>
			</div>
		</div>

		<div class="flex flex-col space-y-2">
			<div class="tabs tabs-boxed bg-base-100 p-0 mb-2">
				{#each match.bettypes as bettype, i}
					<!-- a really janky way to implement tabs for bet types -->
					<a
						class="tab"
						class:tab-active={active_bettype_index == i}
						on:click={() => setActiveBettypeIndex(i)}>{bettype.name}</a
					>
				{/each}
			</div>

			<div class="stats stats-horizontal p-1">
				<div class="stat p-0 place-items-center">
					<div class="stat-title text-sm">No-Risk Profit</div>
					<div class="stat-value text-lg">
						{match.bettypes[active_bettype_index].no_risk.profit_sb_percentage}%
					</div>
				</div>
				<div class="stat p-0 place-items-center">
					<div class="stat-title text-sm">Bet Types</div>
					<div class="stat-value text-lg">
						{#if match.bettypes[active_bettype_index].no_risk.possible}
							<span class="badge badge-outline badge-success">No Risk</span>
						{/if}
						{#if match.bettypes[active_bettype_index].med_risk.possible}
							<span class="badge badge-outline badge-warning">Med Risk</span>
						{/if}
						{#if match.bettypes[active_bettype_index].high_risk.possible}
							<span class="badge badge-outline badge-error">High Risk</span>
						{/if}
					</div>
				</div>
			</div>

			<div>
				<p class="text-sm opacity-60 font-light">
					<i class="fa-solid fa-info-circle" /> no-risk bets
				</p>
				{#each match.bettypes[active_bettype_index].no_risk.bet as {team, amount}}
				<p><b>{team}:</b> Bet <span class="badge">{amount}</span> tokens</p>
				{/each}
			</div>

			<div>
				<p class="text-sm opacity-60 font-light"><i class="fa-solid fa-clock" /> cutoff</p>
				<p>{dayjs(match.cutoff_datetime).fromNow()}</p>
			</div>

			<div>
				<p class="text-sm opacity-60 font-light"><i class="fa-solid fa-shuffle" /> sport</p>
				<p>{match.sport}</p>
			</div>
		</div>
		<div class="card-actions justify-end">
			<p class="opacity-60 italic text-xs">Last updated {dayjs(match.last_updated).fromNow()}</p>
		</div>
	</div>
</div>
