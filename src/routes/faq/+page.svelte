<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import PageHeader from '../../components/PageHeader.svelte';
	export let faqs;

	import {title} from '../../stores';
	
	$title = 'FAQ'
</script>

<PageHeader
	title="Frequently Asked Questions"
	subtitle="Commonly asked questions about GambitProfit"
/>

<div class="flex flex-col space-y-4 max-w-screen-sm mx-auto py-8 px-4">
	{#each faqs as faq}
		<div
			class="collapse collapse-plus border bg-base-100 rounded-box"
		>
			<input type="checkbox" />
			<div class="collapse-title text-xl font-medium">{faq.q}</div>
			<div class="collapse-content">
				<p>{@html faq.a}</p>
			</div>
		</div>
	{/each}
</div>
