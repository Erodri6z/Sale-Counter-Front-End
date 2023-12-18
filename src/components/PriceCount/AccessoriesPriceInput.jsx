import { useState, useEffect } from "react"

const AccessoriesPriceInput = (props) => {
  const [formData, setFormData] = useState(props.profile.sales[0])
  const [input, setInput] = useState('')

  useEffect(()=> {
    props.handleUpdateCount(formData)
  }, [formData])

  const handleChange = (e) => {
    const inputValue = (parseInt(e.target.value, 10 ) || 0)
    setInput(inputValue)

  }


  const handleSubmit = async e => {
    e.preventDefault()
    const currentCount = parseInt(formData.accesoriesCount, 10) || 0
    const currentPriceCount = parseInt(formData.accesoriesDollarAmount, 10) || 0
    const inputValue = parseInt(input, 10) || 0
    const sum = currentPriceCount + inputValue
    const count = currentCount + 1

    setFormData((prevFormData) => ({
      ...prevFormData,
      accesoriesCount: count,
      accesoriesDollarAmount: sum
    }))
    
    setInput('')
  }

  return (
    <div className="form-container">
      <p>{props.title}</p>
      <p>{props.subtitle}</p>
      <form onSubmit={handleSubmit}>
        <label className="dollar-sign">$</label>
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

export default AccessoriesPriceInput