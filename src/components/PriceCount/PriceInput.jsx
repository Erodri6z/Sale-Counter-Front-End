import { useState } from "react"

const PriceInput = (props) => {
  const [formData, setFormData] = useState(props.data)
  // const val = props.data
  const count = props.variable

  console.log(props)

  const handleChange = (e) => {
    setFormData({...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try{
      props.handleUpdateCount(formData)
    }catch (err) {
      console.log(err)
    }
  }
  console.log(formData)

  return (
    <div>
      <p>{props.title}</p>
      <form onSubmit={handleSubmit}>
        <label>How Much?</label>
        <input 
        type="number"
        name={count}
        value={formData.count}
        onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default PriceInput