import {sveltekit} from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    legacy: {buildSsrCjsExternalHeuristics: true},
    resolve: {},
    ssr: {
        // We have to add this workaround because of #4504 https://github.com/sveltejs/kit/issues/4504
        // In the future DayJS 2.0 will not require this workaround
        noExternal: ['dayjs']
    }
};

export default config;
