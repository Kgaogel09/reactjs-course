import { createContext, useState } from "react"
import FeedBackData from "../data/FeedbackData"
import { v4 as uuidv4 } from "uuid"

const feedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedBackData)
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false })

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <feedbackContext.Provider
      value={{ feedback, deleteFeedback, addFeedback, editFeedback }}
    >
      {children}
    </feedbackContext.Provider>
  )
}

export default feedbackContext
