import React from "react"
import { Link } from "react-router-dom"
import { PieChart, Pie } from "recharts"

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
  const pieData = [
    { name: 'AllState', sales: data.insuranceCount, fill: "blue"},
    { name: 'AppleCare', sales: data.appleCareCount, fill: "white" },
    { name: 'Accessories', sales: data.accesoriesCount, fill: "silver" },
    { name: 'General Electromics', sales: data.generalElectronicsCount, fill:"cyan" }
  ]
  console.log(pieData)
  return (
    <>
    <div>
      <h1>Results</h1>
      <div>
        <PieChart width={300} height={300} >
          <Pie dataKey="sales" data={pieData} outerRadius={100} />
        </PieChart>
      </div>
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