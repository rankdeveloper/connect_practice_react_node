import React from 'react'
import axios from 'axios'

export default function About() {
  const [data, setData] = React.useState('')

  const getData = async () => {
    const res = await axios.get('http://localhost:5000/about')
    setData(res.data.message)
  }

  React.useEffect(() => {
    getData()
  }, [])
  return (
    <div> <h2>About page</h2><br />
      {data}</div>
  )
}
