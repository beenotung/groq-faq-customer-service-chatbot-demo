import express from 'express'
import { print } from 'listening-on'
import { proxy } from './proxy'
import { array, id, object, string } from 'cast.ts'
import { env } from './env'

let app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/faq', (req, res) => {
  res.json({
    items: proxy.FAQ.map(row => ({
      id: row.id,
      question: row.question,
      answer: row.answer,
    })),
  })
})

app.post('/faq', (req, res) => {
  try {
    let parser = object({
      password: string({ nonEmpty: true }),
      items: array(
        object({
          id: id(),
          question: string(),
          answer: string(),
        }),
      ),
    })
    let input = parser.parse(req.body)
    if (input.password != env.ADMIN_PASSWORD) {
      return { error: 'wrong password' }
    }
    for (let row of input.items) {
      proxy.FAQ[row.id] = {
        question: row.question,
        answer: row.answer,
      }
    }
    res.json({})
  } catch (error) {
    res.json({ error: String(error) })
  }
})

let port = 8100
app.listen(port, () => {
  print(port)
})
