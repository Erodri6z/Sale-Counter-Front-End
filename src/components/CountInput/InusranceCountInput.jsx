import React, { useState } from "react"

const InsuranceCountInput = (props) => {
  const [formData, setFormData] = useState(props.profile.sales[0])
  const [input, setInput] = useState('')

  console.log(parseInt(props.profile.sales[0].insuranceCount) || 0)



  const handleChange = (e) => {
    const inputValue = (parseInt(e.target.value, 10  )|| 0)
    setInput(inputValue)   
  }

  const handleSubmit = async e => {
    e.preventDefault()

    console.log(formData)
    let sum = 0
    if (formData.insuranceCount === 0) {
      sum = input
    }else {
      sum = parseInt(formData.insuranceCount, 10) + input
    }
    console.log("THE SUM is ", sum)
    setFormData(prevState => ({
      ...prevState,
      insuranceCount: sum.toString(),
    }))
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