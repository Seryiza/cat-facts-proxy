import express from 'express'
import {getCatFact} from './facts.js'

const port = process.env.PORT
if (!port) {
  throw new Error('Env var PORT is empty.')
}

const app = express()

app.get('/random-fact', async (_, res) => {
  const fact = await getCatFact()
  res.append('Access-Control-Allow-Origin', '*')
  res.json({ fact })
})

app.listen(port, () => {
  console.log('App started.')
})
