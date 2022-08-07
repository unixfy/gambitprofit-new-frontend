<script>
	import PageHeader from '@components/PageHeader.svelte';
</script>

<PageHeader title="Match: Unixfy v. Team" subtitle="Tomorrow at 3:00pm" />

<div class="content-wrapper">
	<div class="flex flex-col space-y-4">
		<div class="flex justify-between">
			<a class="btn btn-primary" href="/"> Return Home </a>
			<a
				class="btn btn-primary"
				href="https://app.gambitrewards.com/match/afdasfsadf"
				target="_blank"
				rel="noreferer"
			>
				View on GambitRewards
			</a>
		</div>

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
					Oops! It's not possible to bet on this match anymore.
					<br />
					This game has already been played.
				</span>
			</div>
		</div>

		<div
			class="stats stats-vertical md:stats-horizontal bg-gray-100 dark:bg-slate-900 dark:text-white"
		>
			<div class="stat">
				<div class="stat-figure text-secondary">
					<i class="fa-solid fa-money-bill-1-wave fa-2x" />
				</div>
				<div class="stat-title">No-Risk Profit</div>
				<div class="stat-value text-3xl lg:text-4xl">5%</div>
			</div>

			<div class="stat">
				<div class="stat-figure text-secondary">
					<i class="fa-solid fa-clock fa-2x" />
				</div>
				<div class="stat-title">Cutoff At</div>
				<div class="stat-value text-3xl lg:text-4xl">Today at 8:00pm</div>
			</div>

			<div class="stat">
				<div class="stat-figure text-secondary">
					<i class="fa-solid fa-shuffle fa-2x" />
				</div>
				<div class="stat-title">Sport</div>
				<div class="stat-value text-3xl lg:text-4xl">BTD6</div>
			</div>
		</div>

		<!-- display all the teams -->
		<div class="bg-gray-100 dark:bg-slate-900 rounded-xl p-6">
			<p class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Teams</p>
			<div class="grid sm:grid-flow-col gap-4">
				<div class="card border border-gray-300 dark:border-slate-700">
					<div class="card-body">
						<p class="card-title">Monkey Team</p>
						<div>
							<p class="text-sm opacity-60 font-light"><i class="fa-solid fa-clock" /> reward</p>
							<p>1.23</p>
						</div>
						<div>
							<p class="text-sm opacity-60 font-light"><i class="fa-solid fa-clock" /> odds</p>
							<p>1.53</p>
						</div>
					</div>
				</div>
				<div class="card border border-gray-300 dark:border-slate-700">
					<div class="card-body">
						<p class="card-title">Monkey Team</p>
						<div>
							<p class="text-sm opacity-60 font-light"><i class="fa-solid fa-clock" /> reward</p>
							<p>1.23</p>
						</div>
						<div>
							<p class="text-sm opacity-60 font-light"><i class="fa-solid fa-clock" /> odds</p>
							<p>1.53</p>
						</div>
					</div>
				</div>
				<div class="card border border-gray-300 dark:border-slate-700">
					<div class="card-body">
						<p class="card-title">Monkey Team</p>
						<div>
							<p class="text-sm opacity-60 font-light"><i class="fa-solid fa-clock" /> reward</p>
							<p>1.23</p>
						</div>
						<div>
							<p class="text-sm opacity-60 font-light"><i class="fa-solid fa-clock" /> odds</p>
							<p>1.53</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- iterate over each bet type -->
		<div class="bg-gray-100 dark:bg-slate-900 dark:text-white p-6 rounded-xl">
			<p class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Pick the Odds</p>
			<div class="grid grid-flow-row gap-12">
				<div class="grid md:grid-cols-2 grid-cols-1 gap-8">
					<div class="stat p-0 m-auto place-items-center">
						<div class="stat-title opacity-90 mb-2">
							<div class="badge badge-lg badge-error">High Risk</div>
							Expected Profit
						</div>
						<div class="stat-value text-2xl lg:text-3xl">5%</div>
                        <div class="divider my-2">or</div>
                        <div class="stat-value text-2xl lg:text-3xl">1052 Tokens</div>
                        <div class="divider my-2">or</div>
                        <div class="stat-value text-2xl lg:text-3xl">10052 SB</div>
                        <div class="badge badge-info mt-4 badge-lg">Recommended <i class="fa-solid fa-check ml-2"></i></div>
					</div>

                    <div class="flex-col">
                        <div>
                            <p class="opacity-90">Monkey Team</p>
                            <p class="text-2xl font-bold">Bet <span class="font-extrabold">102</span> tokens</p>
                        </div>
                        <div class="divider">and</div>
                        <div>
                            <p class="opacity-90">Monkey Team</p>
                            <p class="text-2xl font-bold">Bet <span class="font-extrabold">102</span> tokens</p>
                        </div>
                        <div class="divider">and</div>
                        <div>
                            <p class="opacity-90">Monkey Team</p>
                            <p class="text-2xl font-bold">Bet <span class="font-extrabold">102</span> tokens</p>
                        </div>
                    </div>
				</div>
				<div class="grid md:grid-cols-2 grid-cols-1 gap-8">
					<div class="stat p-0 m-auto place-items-center">
						<div class="stat-title opacity-90 mb-2">
							<div class="badge badge-lg badge-success">No Risk</div>
							Expected Profit
						</div>
						<div class="stat-value text-2xl lg:text-3xl">5%</div>
                        <div class="divider my-2">or</div>
                        <div class="stat-value text-2xl lg:text-3xl">1052 Tokens</div>
                        <div class="divider my-2">or</div>
                        <div class="stat-value text-2xl lg:text-3xl">10052 SB</div>
                        <div class="badge badge-info mt-4 badge-lg">Recommended <i class="fa-solid fa-check ml-2"></i></div>
					</div>

                    <div class="flex-col">
                        <div>
                            <p class="opacity-90">Monkey Team</p>
                            <p class="text-2xl font-bold">Bet <span class="font-extrabold">102</span> tokens</p>
                        </div>
                        <div class="divider">and</div>
                        <div>
                            <p class="opacity-90">Monkey Team</p>
                            <p class="text-2xl font-bold">Bet <span class="font-extrabold">102</span> tokens</p>
                        </div>
                        <div class="divider">and</div>
                        <div>
                            <p class="opacity-90">Monkey Team</p>
                            <p class="text-2xl font-bold">Bet <span class="font-extrabold">102</span> tokens</p>
                        </div>
                    </div>
				</div>
			</div>
		</div>

		<div class="bg-gray-100 dark:bg-slate-900 dark:text-white p-6 rounded-xl">
			<p class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Spread</p>
		</div>
	</div>
</div>
