import got from 'got'

export const getCatFact = async () => {
  const json = await got('https://the-cat-fact.herokuapp.com/api/randomfact').json()
  const [factData] = json.data
  const factText = factData.fact

  if (!factText) {
    throw new Error('Fact text not found.')
  }

  return factText
}
