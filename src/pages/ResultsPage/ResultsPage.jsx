import React from "react"
import { Link } from "react-router-dom"

const ResultsPage = ({ profile }) => {

  if (!profile) return (<h1>Loading...</h1>)
  const data = profile.sales[0]

  const copyText = () => {
    navigator.clipboard.writeText(
      `All-State Protection Sold: ${data.insuranceCount},
Apple-Care Sold: ${data.appleCareCount},
Accessories: $${data.accesoriesDollarAmount}.
General Electronics: $${data.generalElectronicsDollarAmount}`
    )
  }
  
  return (
    <>
    <div>
      <h1>This is where the results will be</h1>
      <Link to="/">
        <button>Back to Counter?</button>
      </Link>
      <div>
        <p>Insurance Sold: {data.insuranceCount}</p>
        <p>AppleCare Sold: {data.appleCareCount}</p>
        <p>Accessories: ${data.accesoriesDollarAmount}</p>
        <p>General Electronics: ${data.generalElectronicsDollarAmount}</p>
        <button onClick={copyText}>Copy</button>
      </div>
    </div>
    </>
  )
}

export default ResultsPage