import React from "react"

const ResultsPage = ({ profile }) => {
  // const data = profile
  // const { profile } = location.state || 0
  if (!profile) return (<h1>Loading...</h1>)
  const data = profile.sales[0]
  return (
    <>
    <div>
      <h1>This is where the results will be</h1>
      <div>
        <p>Insurance Sold: {data.insuranceCount}</p>
        <p>AppleCare Sold: {data.appleCareCount}</p>
        <p>Accessories: ${data.accesoriesDollarAmount}</p>
        <p>General Electronics: ${data.generalElectronicsDollarAmount}</p>
      </div>
    </div>
    </>
  )
}

export default ResultsPage