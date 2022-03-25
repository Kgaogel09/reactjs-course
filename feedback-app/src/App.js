import { useState } from "react"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import Header from "./components/Header"
import FeedBackData from "./data/FeedbackData"
import { v4 as uuidv4 } from "uuid"
import AboutPage from "./pages/AboutPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AboutLink from "./components/AboutLink"
import { FeedbackProvider } from "./context/FeedbackContext"

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
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList handleDelete={deleteFeedback} />
                  <AboutLink />
                </>
              }
            />

            <Route exact path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
