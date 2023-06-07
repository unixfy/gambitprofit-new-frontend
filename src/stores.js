import { writable } from "svelte/store";
import { browser } from "$app/env";
import { writable as persistentWritable } from "svelte-local-storage-store";

// not really easy to migrate this to svelte-local-storage-store as we need to preserve asking the browser about its preferences
const darkmodecalculator = function () {
    const store = writable(false)
    // Return false if we aren't running in a browser
    if (!(browser)) return store;

    // Set the starting value of darkmode
    let storedvalue

    if (!(browser)) {
        // If we are in SSR, just set to false
        storedvalue = false
    } else if
    ((!('darkmode' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        // If the system color scheme is set to dark, then enable darkmode
        storedvalue = true
    } else {
        // If this isn't the case, then try to get the value of darkmode from localstorage and parse it as JSON
        // Any error occurs, disable darkmode
        try {
            storedvalue = JSON.parse(localStorage.getItem("darkmode"))
        } catch {
            storedvalue = false
        }
    }

    // Now set the store value based on the above
    if ([true, false].includes(storedvalue)) store.set(storedvalue)

    // Save the darkmode value to localstorage if possible
    store.subscribe(function (value) {
        if (browser) {
            localStorage.setItem("darkmode", value.toString())

            if (value === true) {
                document.documentElement.dataset.theme = 'dark';
            } else if (value === false) {
                document.documentElement.dataset.theme = 'light';
            }
        }
    })

    return store
}

export const darkmode = darkmodecalculator();

// store our user-defined settings
// i would make this an object but we can't actually bind to object values lol
export const user_tokens = persistentWritable('user_tokens', 10000)
export const user_search = persistentWritable('user_search', '')
export const user_sort = persistentWritable('user_sort', '-max_no_risk_profit_sb_percentage')
export const user_show_not_no_risk_recommended = persistentWritable('user_show_not_no_risk_recommended', false)
export const user_sport = persistentWritable('user_sport', '')
export const user_show_cutoff_passed = persistentWritable('user_show_cutoff_passed', false)
export const user_datetime = persistentWritable('user_datetime', '')