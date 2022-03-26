import { useContext } from "react"
import feedbackContext from "../context/FeedbackContext"

function FeedbackStats() {
  const { feedback } = useContext(feedbackContext)
  // Calculate rating average
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, "")

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Feedback: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
