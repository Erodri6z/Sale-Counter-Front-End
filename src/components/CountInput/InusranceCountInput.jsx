import React, { useState } from "react"

const InsuranceCountInput = (props) => {
  const [formData, setFormData] = useState(props.profile.sales[0])
  const [input, setInput] = useState('')

  console.log(props.profile.sales[0].insuranceCount)



  const handleChange = (e) => {
    const inputValue = (parseInt(e.target.value, 10 )|| 0)
    setInput(inputValue)   
    const sum = formData.insuranceCount + inputValue
    console.log(sum)
    setFormData({
      ...formData,
      insuranceCount: sum
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    console.log(formData)
    setInput('')
    try{
      props.handleUpdateCount(formData)
    }catch (err) {
      console.log(err)
    }
  }

  // console.log(input)
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