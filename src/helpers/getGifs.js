export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Grpg2OE0ADU7V4Oqwb6mZ8qBq3ZfEWxV&q=${category}&limit=2`
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map(({ id, images, title }) => ({
        id: id,
        url: images.original.url,
        title: title
    }))
    return gifs
}