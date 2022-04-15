export const getLyrics = async ({ form, setLoader, setData }) => {
  const API_LYRICS = 'https://api.lyrics.ovh/v1'
  const artist = form.artist.value
  const title = form.title.value

  try {
    setLoader(true)
    const res = await fetch(`${API_LYRICS}/${artist}/${title}`)
    /* 
        response {lyrics} 
        error {error}
    */

    if (!res.ok) throw Error(res.json())

    let data = await res.json()

    let result = {
      ...data,
      artist,
      title,
    }

    setData(result)
  } catch (error) {
    let errorMsg = {
      ...error,
      artist,
      title,
      status: 404,
    }

    setData(errorMsg)
  } finally {
    setLoader(false)
  }
}
