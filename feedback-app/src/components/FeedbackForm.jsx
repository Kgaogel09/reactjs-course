import { useState } from "react"
import Button from "./shared/Button"
import Card from "./shared/Card"
function FeedbackForm() {
  const [text, setText] = useState("")

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <Card>
      <h2>How would you rate your service with us?</h2>
      <div className='input-group'>
        <input
          onChange={handleChange}
          type='text'
          placeholder='Write a review'
          value={text}
        />
        {/* <button type='submit'>Submit</button> */}
        <Button />
      </div>
    </Card>
  )
}

export default FeedbackForm