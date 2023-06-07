import {fireRequest} from "$lib/fireRequest.js";

export async function load({params, url}) {
    let req = await fireRequest(`/matches/${params.uuid}`, {'tokens': url.searchParams.get('tokens') ? url.searchParams.get('tokens') : '1000'})
    return {
        match: req.ok && (await req.json())
    }
}