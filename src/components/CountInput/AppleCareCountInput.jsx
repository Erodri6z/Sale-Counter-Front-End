import { useState, useEffect } from "react"
import '../CountInput/Count.css'

const AppleCareCountInput = (props) => {
  const [formData, setFormData] = useState(props.profile.sales[0])
  const [input, setInput] = useState('')

  useEffect(() => {
    props.handleUpdateCount(formData)
  }, [formData])


  const handleChange = (e) => {
    const inputValue = (parseInt(e.target.value, 10  )|| 0)
    setInput(inputValue)   
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    const currentCount = parseInt(formData.appleCareCount, 10) || 0
    const inputValue = parseInt(input, 10) || 0
    const sum = currentCount + inputValue
  
    setFormData((prevState) => ({
      ...prevState,
      appleCareCount: sum,
    }))
  
    setInput('')
  };
  return (
    <div  className="form-container">
      <p>{props.title}</p>
      <form onSubmit={handleSubmit} >
        <label>How many did you get?</label>
        <input 
        type="number"
        name="input"
        className="counter"
        value={input}
        onChange={handleChange}
        />
        <button className="submit">Submit</button>
      </form>
    </div>
  )
}

export default AppleCareCountInput