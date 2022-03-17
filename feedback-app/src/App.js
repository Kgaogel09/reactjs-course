import { useState } from "react"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import Header from "./components/Header"
import FeedBackData from "./data/FeedbackData"
import { v4 as uuidv4 } from "uuid"

function App() {
  const [feedback, setFeedBack] = useState(FeedBackData)

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedBack(feedback.filter((item) => item.id !== id))
    }
  }
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedBack([newFeedback, ...feedback])
  }
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
