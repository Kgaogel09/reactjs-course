import { useState } from "react"
import Button from "./shared/Button"
import Card from "./shared/Card"
function FeedbackForm() {
  const [text, setText] = useState("")
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    if (text === "") {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== "" && text.trim().length <= 20) {
      setBtnDisabled(true)
      setMessage("Text must be at least 20 characters")
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className='input-group'>
          <input
            onChange={handleChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button isDisabled={btnDisabled} />
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
