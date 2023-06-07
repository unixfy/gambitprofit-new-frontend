import {fireRequest} from "$lib/fireRequest.js";
import {error} from "@sveltejs/kit";

export async function load({params, url}) {
    const req = await fireRequest(`/matches/${params.uuid}`, {'tokens': url.searchParams.get('tokens') ? url.searchParams.get('tokens') : '1000'})

    const match = (await req.json())
    // Handle 404s from the API endpoint
    if (req.status === 404) {
        throw error(404, 'Match not found')
    }

    return {
        match: match,
        title: match.name
    }
}