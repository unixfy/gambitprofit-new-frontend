<script>
    import '@fontsource/inter/300.css';
    import '@fontsource/inter/400.css';
    import '@fontsource/inter/500.css';
    import '@fontsource/inter/700.css';
    import '@fontsource/inter/800.css';

    import '../app.css';
    import {darkmode} from '../stores';
    import {onMount} from 'svelte';
    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';
    import {browser} from '$app/environment';
    import {navigating, page} from "$app/stores";
    import {fade} from "svelte/transition";

    onMount(async () => {
        if (browser) {
            // Enable darkmode automatically if it's saved in localstorage
            if ($darkmode) {
                document.documentElement.dataset.theme = 'dark';
            } else {
                document.documentElement.dataset.theme = 'light';
            }
        }
    });
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{(($page.error) ? "Error" : $page.data.title || "Welcome")} | GambitProfit</title>
    <meta name="title" content="{(($page.error) ? 'Error' : $page.data.title || 'Welcome')} | GambitProfit"/>
    <meta
            name="description"
            content="The data portal for Gambit Rewards plays. Easily browse, sort, search through, and share plays!"
    />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://gambitprofit.com"/>
    <meta property="og:title" content="GambitProfit"/>
    <meta
            property="og:description"
            content="The data portal for Gambit Rewards plays. Easily browse, sort, search through, and share plays!"
    />
    <meta
            property="og:image"
            content="/advert_screenshot.png"
    />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image"/>
    <meta property="twitter:url" content="https://gambitprofit.com"/>
    <meta property="twitter:title" content="GambitProfit"/>
    <meta
            property="twitter:description"
            content="The data portal for Gambit Rewards plays. Easily browse, sort, search through, and share plays!"
    />
    <meta
            property="twitter:image"
            content="/advert_screenshot.png"
    />
</svelte:head>

<!--Loading bar when navigating-->
{#if $navigating}
    <span class="loading loading-spinner loading-lg text-secondary fixed top-0 right-0 m-3 z-10" transition:fade></span>
{/if}

<Navbar/>

<div class="min-h-screen">
    <slot/>
</div>

<Footer/>
