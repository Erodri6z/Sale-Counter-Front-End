import { useState } from "react"

const InsuranceCountInput = (props) => {
  const [formData, setFormData] = useState(props.profile.sales[0])

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

  return (
    <div>
      <p>{props.title}</p>
      <form onSubmit={handleSubmit} >
        <label>How many did you get?</label>
        <input 
        type="number"
        name="insuranceCount"
        value={formData.insuranceCount}
        onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default InsuranceCountInput