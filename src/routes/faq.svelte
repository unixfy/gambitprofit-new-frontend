<script>
	import PageHeader from '../components/PageHeader.svelte';
	export let faqs;
</script>

<PageHeader
	title="Frequently Asked Questions"
	subtitle="Commonly asked questions about GambitProfit"
/>

<div class="flex flex-col space-y-4 max-w-screen-sm mx-auto py-8 px-4">
	{#each faqs as faq}
		<div
			class="collapse collapse-plus border border-gray-300 dark:border-slate-500 bg-gray-100 dark:bg-slate-800 rounded-box"
		>
			<input type="checkbox" />
			<div class="collapse-title text-xl font-medium">{faq.q}</div>
			<div class="collapse-content">
				<p>{@html faq.a}</p>
			</div>
		</div>
	{/each}
</div>
