import { useEffect, useState } from "react"

const GeneralPriceInput = (props) => {
  const [formData, setFormData] = useState(props.profile.sales[0])
  const [input, setInput] = useState('')

  console.log(formData)

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
    <div>
      <p>{props.title}</p>
      <form onSubmit={handleSubmit}>
        <label>How Much?</label>
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

export default GeneralPriceInput