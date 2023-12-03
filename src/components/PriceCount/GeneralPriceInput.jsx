import { useState } from "react"

const GeneralPriceInput = (props) => {
  const [formData, setFormData] = useState(props.profile.sales[0])
  const [input, setInput] = useState('')

  console.log(formData)

  const handleChange = (e) => {
    const inputValue = (parseInt(e.target.value, 10 ) || 0)
    setInput(inputValue)
    let sum = 0
    if (formData.generalElectronicsCount === 0) {
      sum = inputValue
    }else {
      sum = formData.generalElectronicsCount + inputValue
    }
    setFormData({
      ...formData,
      generalElectronicsCount: sum
    })
  }


  const handleSubmit = async e => {
    e.preventDefault()
    setInput('')

      let sum = 1
      if (formData.generalElectronicsDollarAmount === 0 ) {
        sum = sum + 1
      }else {
        sum = formData.generalElectronicsDollarAmount + 1 
      }
      setFormData((prevFormData) => ({
        ...prevFormData,
        generalElectronicsDollarAmount: sum
      }))


    try{
      props.handleUpdateCount(formData)
    }catch (err) {
      console.log(err)
    }
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