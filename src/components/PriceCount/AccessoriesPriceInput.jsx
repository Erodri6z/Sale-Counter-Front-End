import { useState } from "react"

const AccessoriesPriceInput = (props) => {
  const [formData, setFormData] = useState({
    ...props.data,
    accesoriesCount: props.dataCount
  })

  // const val = props.data
  const price = props.variable

  console.log(formData)

  const handleChange = (e) => {
    setFormData({...formData,
      [e.target.name] : e.target.value,
    })
  }


  const handleSubmit = async e => {
    e.preventDefault()
    try{
      setFormData((prevFormData) => ({
        ...prevFormData,
        accesoriesCount: parseInt(prevFormData.accesoriesCount) + 1
    }))
      props.handleUpdateCount(formData)
    }catch (err) {
      console.log(err)
    }
  }
  // console.log(formData)

  return (
    <div>
      <p>{props.title}</p>
      <form onSubmit={handleSubmit}>
        <label>How Much?</label>
        <input 
        type="number"
        name={price}
        value={formData.price}
        onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AccessoriesPriceInput