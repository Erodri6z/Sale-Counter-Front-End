import { useState, useEffect } from "react"

const PrePaidCountInput = (props) => {
  const [formData, setFormData] = useState(props.profile.sales[0])
  const [input, setInput] = useState('')
  
  useEffect(() => {
    props.handleUpdateCount(formData)
  }, [formData])

  console.log(parseInt(props.profile.sales[0].prePaidPhones) || 0)

  const handleChange = (e) => {
    const inputValue = (parseInt(e.target.value, 10  )|| 0)
    setInput(inputValue)   
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    const currentCount = parseInt(formData.prePaidPhones, 10) || 0
    const inputValue = parseInt(input, 10) || 0
    const sum = currentCount + inputValue
  
    setFormData((prevState) => ({
      ...prevState,
      prePaidPhones: sum,
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


export default PrePaidCountInput