import { fireRequest } from "../../lib/fireRequest";

export async function GET({ params, url }) {
    let req =  await fireRequest(`/matches/${params.uuid}`, {'tokens': url.searchParams.get('tokens') ? url.searchParams.get('tokens') : '1000'})
    return {
        status: req.status,
        body: {
            match: req.ok && (await req.json())
        }
    }
}