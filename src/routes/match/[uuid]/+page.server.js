import { fireRequest } from "../../../lib/fireRequest";

export async function load({ params, url }) {
    let req =  await fireRequest(`/matches/${params.uuid}`, {'tokens': url.searchParams.get('tokens') ? url.searchParams.get('tokens') : '1000'})
    throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292699)");
    return {
        status: req.status,
        body: {
            match: req.ok && (await req.json())
        }
    }
}