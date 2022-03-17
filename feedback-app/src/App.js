import { useState } from "react"
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import FeedBackData from "./data/FeedbackData"

function App() {
  const [feedback, setFeedBack] = useState(FeedBackData)

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedBack(feedback.filter((item) => item.id !== id))
    }
  }
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
