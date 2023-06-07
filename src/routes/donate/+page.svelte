<script>
	import PageHeader from '@components/PageHeader.svelte';
	import { title } from '../../stores';

	$title = 'Donate';
</script>

<PageHeader title="Donate" subtitle="Help keep GambitProfit running" />

<div class="content-wrapper">
	<h2>
		<i class="fab fa-paypal" /> PayPal
	</h2>
	<p>
		<span class="font-bold">Payment methods:</span> Visa, Discover, American Express, Mastercard, PayPal
		Cash
	</p>
	<!--            PayPal donation button -->
	<form action="https://www.paypal.com/donate" method="post" target="_blank">
		<input type="hidden" name="hosted_button_id" value="5D7DTP89LVQSN" />
		<input
			type="image"
			src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
			border="0"
			name="submit"
			title="PayPal - The safer, easier way to pay online!"
			alt="Donate with PayPal button"
		/>
		<img
			alt=""
			border="0"
			src="https://www.paypal.com/en_NL/i/scr/pixel.gif"
			width="1"
			height="1"
		/>
	</form>

    <h2>
        <i class="fas fa-video"></i> SwagIt
    </h2>
    <p>
        <span class="font-bold">Payment methods:</span> SB
    </p>
    <a href="https://swagit.page.link/jNmY" rel="noreferrer" target="_blank">
        <div class="btn btn-primary btn-sm">Donate through SwagIt video</div>
    </a>

	<h2>
		<i class="fab fa-bitcoin" /> Coinbase Commerce
	</h2>
	<p>
		<span class="font-bold">Currencies:</span> Bitcoin (BTC), Bitcoin Cash (BCH), Dai (DAI), Dogecoin
		(DOGE), Ethereum (ETH), Litecoin (LTC), USD Coin (USDC), USD Tether (USDT), Polygon Matic (MATIC),
		Polygon Wrapped Ether (WETH)
	</p>
	<!--            CB Commerce donation button -->
	<a
		href="https://commerce.coinbase.com/checkout/1abeb001-7638-4185-8091-1e86152cde1b"
		rel="noreferrer"
		target="_blank"
	>
		<div class="btn btn-primary btn-sm">Donate with Coinbase Commerce</div>
	</a>

	<h2>
		<i class="fas fa-money-bill" /> Venmo
	</h2>
	<p>
		<span class="font-bold">Payment methods:</span> Bank account, Visa, Discover, American Express, MasterCard,
		Venmo balance
	</p>
	<a href="https://venmo.com/code?user_id=2816232529068032206" rel="noreferrer" target="_blank">
		<div class="btn btn-primary btn-sm">Donate with Venmo</div>
	</a>

	<h2>
		<i class="fas fa-dollar-sign" /> CashApp
	</h2>
	<p>
		<span class="font-bold">Payment methods:</span> Bank account, Visa, Discover, American Express, MasterCard,
		CashApp balance, Stock, Bitcoin
	</p>
	<a href="https://cash.app/$axwang64" rel="noreferrer" target="_blank">
		<div class="btn btn-primary btn-sm">Donate with CashApp</div>
	</a>
</div>
