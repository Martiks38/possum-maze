export const getShows = async ({ form, setLoader, setData }) => {
  const API_SHOW = 'https://api.tvmaze.com/search/shows?q='
  const showName = form.show.value

  try {
    setLoader(true)

    const res = await fetch(`${API_SHOW}${showName}`)

    if (!res.ok)
      throw Error({ status: 404, statusText: res.statusText, showName })

    let data = await res.json()

    data = {
      ...data,
      showName,
    }

    setData(data)
  } catch (error) {
    setData(error)
  } finally {
    setLoader(false)
  }
}
