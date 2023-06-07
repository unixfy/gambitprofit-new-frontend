import {error} from "@sveltejs/kit";

export async function load({fetch, params, url}) {
    const req = await fetch(
       import.meta.env.VITE_API_ENDPOINT + `/matches/${params.uuid}?` + new URLSearchParams({
            'tokens': url.searchParams.get('tokens') ? url.searchParams.get('tokens') : '1000'
        }) ,
        {
            method: "GET",
            headers: {
                'Accept': 'application/json'
            }
        }
    )

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