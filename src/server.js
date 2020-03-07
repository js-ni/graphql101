import 'core-js/stable'
import 'regenerator-runtime/runtime'
import express from 'express'
import 'dotenv/config'

const { PORT } = process.env;

(async () => {
  try {
    const app = express()

    app.listen(PORT, () => {
      console.log(`App listening in http://localhost:${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
})()
