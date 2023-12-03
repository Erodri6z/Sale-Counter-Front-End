import { useState } from "react"

const AccessoriesPriceInput = (props) => {
  const [formData, setFormData] = useState(props.profile.sales[0])
  const [input, setInput] = useState('')

  console.log(formData)

  const handleChange = (e) => {
    const inputValue = (parseInt(e.target.value, 10 ) || 0)
    setInput(inputValue)
    let sum = 0
    if (formData.accesoriesDollarAmount === 0) {
      sum = inputValue
    }else {
      sum = formData.accesoriesDollarAmount + inputValue
    }
    setFormData({
      ...formData,
      accesoriesDollarAmount: sum
    })
  }


  const handleSubmit = async e => {
    e.preventDefault()
    setInput('')

      let sum = 1
      if (formData.accesoriesCount === 0 ) {
        sum = sum + 1
      }else {
        sum = formData.accesoriesCount + 1 
      }
      setFormData((prevFormData) => ({
        ...prevFormData,
        accesoriesCount: sum
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

export default AccessoriesPriceInput