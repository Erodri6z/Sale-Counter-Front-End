import { useEffect, useState } from "react"
import '../PriceCount/Price.css'

const GeneralPriceInput = (props) => {
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
    const currentCount = parseInt(formData.generalElectronicsCount, 10) || 0
    const currentPriceCount = parseInt(formData.generalElectronicsDollarAmount, 10) || 0
    const inputValue = parseInt(input, 10) || 0
    const sum = currentPriceCount + inputValue
    const count = currentCount + 1

    setFormData((prevFormData) => ({
      ...prevFormData,
      generalElectronicsCount: count,
      generalElectronicsDollarAmount: sum
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
        step="0.01"
        min="0"
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

export default GeneralPriceInput