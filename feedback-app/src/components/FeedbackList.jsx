import FeedbackItem from "./FeedbackItem"
import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"
import feedbackContext from "../context/FeedbackContext"
function FeedbackList({ handleDelete }) {
  const { feedback } = useContext(feedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet</p>
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                item={item}
                key={item.id}
                handleDelete={handleDelete}
              />
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
    //   return (
    //     <div className='feedback-list'>
    //       {feedback.map((item) => {
    //         return (
    //           <FeedbackItem item={item} key={item.id} handleDelete={handleDelete} />
    //         )
    //       })}
    //     </div>
  )
}

export default FeedbackList
