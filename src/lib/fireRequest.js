export async function fireRequest(path, method, queryparams, body) {
    return fetch(
        import.meta.env.VITE_API_ENDPOINT +
        path +
        new URLSearchParams(queryparams),

        {
            method: (method ? method : "GET"),
            body: body,
            headers: {
                'Accept': 'application/json'
            }
        }
    )
}