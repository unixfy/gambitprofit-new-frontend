<script context="module">
    export async function load() {
        return {
            status: 302,
            redirect: 'https://unixfy.net/donate'
        }
    }
</script>
<script>
	import PageHeader from '@components/PageHeader.svelte';
    import {title} from '../stores';
	
	$title = 'Donate'
</script>

<PageHeader
	title="Donate"
	subtitle="Thank you for your generosity."
/>

<div class="content-wrapper">

</div>