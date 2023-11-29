import { useState } from "react"

const PrePaidCountInput = (props) => {
  const [formData, setFormData] = useState(props.profile.sales[0])
  const [input, setInput] = useState('')

  console.log(props.profile.sales[0].prePaidPhones)

  const handleChange = (e) => {
    const inputValue = (parseInt(e.target.value, 10 )|| 0)
    setInput(inputValue)   
    let sum = 0
    if (formData.prePaidPhones === 0) {
      sum = inputValue
    }else {
      sum = formData.prePaidPhones + inputValue
    }
    console.log(sum)
    setFormData({
      ...formData,
      prePaidPhones: sum
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setInput('')
    try{
      props.handleUpdateCount(formData)
    }catch (err) {
      console.log(err)
    }
  }

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