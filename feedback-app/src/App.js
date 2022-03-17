import { useState } from "react"
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import FeedBackData from "./data/FeedbackData"

function App() {
  const [feedback, setFeedBack] = useState(FeedBackData)
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}

export default App
