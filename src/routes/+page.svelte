<script>
    import MatchDisplay from '$lib/MatchDisplay.svelte';
</script>

<div class="hero homepage-bg">
    <div class="hero-overlay bg-opacity-40"/>
    <div class="hero-content py-12 px-8 min-h-[33vh] text-center text-neutral-content">
        <div class="text-white">
            <h1 class="mb-5 text-3xl sm:text-4xl font-bold">Welcome to 💰 GambitProfit</h1>
            <p class="mb-5 text-lg sm:text-xl">The data portal for Gambit Rewards plays.</p>
        </div>
    </div>
</div>

<div class="ct max-w-screen-xl px-2 py-6 sm:py-8 flex flex-col space-y-2 sm:space-y-4">
    <a href="/donate">
        <div class="alert alert-success text-white">
            <p><b>Help keep GambitProfit running and support development.</b> Click me to donate.</p>
        </div>
    </a>
    <div class="alert alert-info text-white">
        <p>
            <b>New!</b> Your settings (token amount, sort, search, etc.) will now persist in your browser.
        </p>
    </div>
</div>

<div class="max-w-[1920px] mx-auto">
    <MatchDisplay/>
</div>