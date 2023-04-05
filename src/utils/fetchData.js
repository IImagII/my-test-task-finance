export const exerciseOptions = {
  method: 'GET',
  params: { id: 'markets' },
  headers: {
    'X-RapidAPI-Key': '18f2caa321mshe738f29f7fb2901p1f3027jsnaaf0dacadbbb',
    'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
  }
}

export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  const data = await response.json()
  return data
}
