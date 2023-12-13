import React, { useState, useEffect } from "react"

const InsuranceCountInput = (props) => {
  const [formData, setFormData] = useState(props.profile.sales[0])
  const [input, setInput] = useState('')
  
  useEffect(() => {
    props.handleUpdateCount(formData);
  }, [formData]);

  console.log(parseInt(props.profile.sales[0].insuranceCount) || 0)

  const handleChange = (e) => {
    const inputValue = (parseInt(e.target.value, 10  )|| 0)
    setInput(inputValue)   
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    const currentCount = parseInt(formData.insuranceCount, 10) || 0
    const inputValue = parseInt(input, 10) || 0
    const sum = currentCount + inputValue
  
    setFormData((prevState) => ({
      ...prevState,
      insuranceCount: sum,
    }))
  
    setInput('')
  };

  return (
    <div>
      <p>{props.title}</p>
      <form onSubmit={handleSubmit} >
        <label>How many did you get?</label>
        <input 
        type="number"
        name="input"
        value={input}
        onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default InsuranceCountInput