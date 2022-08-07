<script>
	export let title;
	export let subtitle;
</script>

<div class="bg-base-200 p-12 sm:p-16 flex flex-col space-y-6 text-center">
	<h1 class="font-bold capitalize text-3xl sm:text-4xl">{title}</h1>
	{#if subtitle}
		<h2 class="font-thin text-xl sm:text-2xl">{subtitle}</h2>
	{/if}
</div>
