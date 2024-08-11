import Groq from 'groq-sdk'
import { env } from './env'
import { proxy } from './proxy'

const groq = new Groq({
  apiKey: env.GROQ_API_KEY,
})

export async function main() {
  const stream = await getGroqChatStream({
    question: '可唔可上wifi?',
  })
  console.log('[begin]')
  for await (const chunk of stream) {
    // Print the completion returned by the LLM.
    process.stdout.write(chunk.choices[0]?.delta?.content || '')
  }
  process.stdout.write('\n')
  console.log('[end]')
}

main()

export async function getGroqChatStream(options: { question: string }) {
  let prompt = `
Based on the Q&A

${proxy.FAQ.map(
  row => `
    ${row.question}
        ${row.answer}
`,
).join('')}

Answer in zh-hk

${options.question}
`
  console.log('-'.repeat(32))
  console.log('Prompt:')
  console.log(prompt)
  console.log('-'.repeat(32))
  return groq.chat.completions.create({
    //
    // Required parameters
    //
    messages: [
      // Set an optional system message. This sets the behavior of the
      // assistant and can be used to provide specific instructions for
      // how it should behave throughout the conversation.
      {
        role: 'system',
        content: 'you are a helpful assistant.',
      },
      // Set a user message for the assistant to respond to.
      {
        role: 'user',
        content: prompt,
      },
    ],

    // The language model which will generate the completion.
    model: 'llama3-8b-8192',
    // model: 'llama3-70b-8192',

    //
    // Optional parameters
    //

    // Controls randomness: lowering results in less random completions.
    // As the temperature approaches zero, the model will become deterministic
    // and repetitive.
    temperature: 0.5,

    // The maximum number of tokens to generate. Requests can use up to
    // 2048 tokens shared between prompt and completion.
    max_tokens: 1024,

    // Controls diversity via nucleus sampling: 0.5 means half of all
    // likelihood-weighted options are considered.
    top_p: 1,

    // A stop sequence is a predefined or user-specified text string that
    // signals an AI to stop generating content, ensuring its responses
    // remain focused and concise. Examples include punctuation marks and
    // markers like "[end]".
    stop: null,

    // If set, partial message deltas will be sent.
    stream: true,
  })
}
