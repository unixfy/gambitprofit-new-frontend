---
title: GambitProfit API
description: Utilize our robust API to build your own solutions on top of our data.
---

# About
We provide a robust, RESTful API upon which anyone may build their own solution, powered by our data. We handle the data storage, integrity, calculations, and auto-update from GambitRewards. You can focus on building your app.

**In fact, this website and the GambitProfit Discord server notifier are built on top of our API.**

# Pitfalls

Some pitfalls do exist within our API, which you should be aware of:

- Requests are limited to 10 requests per IP per route per minute. You will receive a 500 error if you exceed the rate limit.
- It is NOT possible to sort by any of the calculated (...Calc...) values. This is sadly a limitation of Strapi, so sorting must be handled by your application.
- Building a replica of any services already provided by us is not acceptable. The code of this website is open-source for a reason.
- We reserve the right to limit any user's access to our API at any time. Yes, abuse is one reason why this action may be taken.
<br>

# Usage

To learn about the API's schema and how to use it, you should consult our API documentation by clicking the button below. Furthermore, as our API is powered by Strapi, their documentation regarding additional, Strapi-enabled features is also applicable. (For instance, the Strapi _sort parameter is usable on our API.)

<v-btn color="primary" href="https://api.gambitprofit.com/docs" target="_blank" large>API Documentation</v-btn>
<v-btn color="primary" href="https://strapi.io/documentation/developer-docs/latest/content-api/parameters.html" target="_blank" large>Strapi Documentation</v-btn>
<br><br>

# Additional Help

Unixfy (the developer of this site) can provide one-on-one help on a case by case basis. Please visit the Help page on this site for more info.
