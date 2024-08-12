# Demo FAQ customer support chatbot with Groq

FAQ 客戶服務聊天機器人教學

Live Coding: https://youtu.be/77J2H9qVNPI

<img src="./screenshot.jpg" width="250">

## Features

- Using free GPT API from Groq
  | 使用 Groq 的免費 GPT API | [source](./demo.ts)

- With a basic admin portal to view and edit FAQ
  | 管理後台，查看和編輯 FAQ | [source](./public/admin.html)

- The prompt is based on FAQ stored in database
  | GPT Prompt 是根據資料庫中的 FAQ 進行生成 | [source](./demo.ts)

## Tech Stack

- Frontend: HTML/JS (with Ionic)
- Backend: Typescript (with express)
- Database: Sqlite (with quick-erd)

## Remark

呢個係 CRUD 應用嘅 demo，唔係正式的 RAG

詳細看：https://www.facebook.com/groups/hkfullstackdev/posts/2145260999191941?comment_id=2145273109190730&reply_comment_id=2145477555836952

## License

This project is licensed with [BSD-2-Clause](./LICENSE)

This is free, libre, and open-source software. It comes down to four essential freedoms [[ref]](https://seirdy.one/2021/01/27/whatsapp-and-the-domestication-of-users.html#fnref:2):

- The freedom to run the program as you wish, for any purpose
- The freedom to study how the program works, and change it so it does your computing as you wish
- The freedom to redistribute copies so you can help others
- The freedom to distribute copies of your modified versions to others
