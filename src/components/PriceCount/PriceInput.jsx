const PriceInput = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <form >
        <label>How Much?</label>
        <input 
        type="number"
        name="#"
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default PriceInput