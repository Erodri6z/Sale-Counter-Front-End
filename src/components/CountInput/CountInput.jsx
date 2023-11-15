const CountInput = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <form >
        <label>How many did you get?</label>
        <input 
        type="number"
        name="#"
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CountInput