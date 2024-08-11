import { proxySchema } from 'better-sqlite3-proxy'
import { db } from './db'

export type FAQ = {
  id?: null | number
  question: string
  answer: string
}

export type DBProxy = {
  FAQ: FAQ[]
}

export let proxy = proxySchema<DBProxy>({
  db,
  tableFields: {
    FAQ: [],
  },
})
