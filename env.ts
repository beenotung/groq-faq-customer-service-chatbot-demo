import { config } from 'dotenv'
import populateEnv from 'populate-env'

config()

export let env = {
  GROQ_API_KEY: '',
  ADMIN_PASSWORD: '',
}

populateEnv(env, { mode: 'halt' })
