export async function fireRequest(path, queryparams, method, body) {
    const requestUrl = import.meta.env.VITE_API_ENDPOINT + path + '?' + new URLSearchParams(queryparams)
    return fetch(
        requestUrl,

        {
            method: (method ? method : "GET"),
            body: body,
            headers: {
                'Accept': 'application/json'
            }
        }
    )
}
