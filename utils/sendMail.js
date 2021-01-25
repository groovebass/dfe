const baseUrl = process.env.CLIENT_URL

export const postMessage = async ( post) => {
    const res = await fetch (`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    const data = await res.json()
    return data
}