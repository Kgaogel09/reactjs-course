import { createContext, useState } from "react"
import FeedBackData from "../data/FeedbackData"
import { v4 as uuidv4 } from "uuid"

const feedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedBackData)
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false })

  // delete feedback item
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  // edit feedback item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }
  // add feedback item
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  // update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    )
  }

  return (
    <feedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </feedbackContext.Provider>
  )
}

export default feedbackContext
