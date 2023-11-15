import React from "react"

const Buttons = (props) => {
  // const [value, setvalue] = useState('value')

  const handleClick = (v) => {
    props.onUpdateForm(v)
  }

  return (
    <div>
      <button onClick={() => handleClick('insurance')}>Insurance</button>
      <button onClick={() => handleClick('apple')}>Apple Care</button>
      <button onClick={() => handleClick('prepaid')}>Prepaid Phones</button>
      <button onClick={() => handleClick('access')}>Accesories</button>
      <button onClick={() => handleClick('gen-elec')}>General Electronics</button>
    </div>
  )
}

export default Buttons