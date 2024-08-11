import { proxy } from './proxy'

let FAQ = [
  {
    question: '你們的營業時間是什麼時候？',
    answer: '我們每日營業時間為上午11:00至晚上10:00。',
  },
  {
    question: '有沒有外賣或送餐服務？',
    answer: '是的，我們提供外賣和送餐服務。可以在線下單或直接致電我們。',
  },
  {
    question: '可以預訂座位嗎？',
    answer:
      '當然可以！您可以通過我們的網站或致電餐廳進行預訂。本餐廳可提前14日預約。',
  },
  {
    question: '有什麼推薦的菜式？',
    answer: '我們的主廚推薦龍卷和香辣吞拿魚卷。',
  },
  {
    question: '是否提供素食選擇？',
    answer: '是的，我們有多款素食壽司卷和菜式。',
  },
  {
    question: '你們的壽司使用什麼魚？是否新鮮？',
    answer: '我們使用每日送達的新鮮魚類，確保品質和味道。',
  },
  {
    question: '是否接受信用卡付款？',
    answer: '是的，我們接受所有主要信用卡及流動支付。',
  },
  {
    question: '有會員計劃或折扣優惠嗎？',
    answer: '我們有會員計劃，可以累積消費積分。',
  },
  {
    question: '有提供泊車服務嗎？',
    answer: '是的，我們為顧客提供免費泊車服務。',
  },
  {
    question: '餐廳內有無提供無線網絡？',
    answer: '有的，所有客人均可使用免費 Wi-Fi。',
  },
]

for (let i = 0; i < FAQ.length; i++) {
  proxy.FAQ[i + 1] = {
    question: FAQ[i].question,
    answer: FAQ[i].answer,
  }
}
