import React from 'react'
import axios from 'axios'

export default function Home() {
  const [data , setData] = React.useState('')

  React.useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);
  return (
    <>
      <h2>Home page</h2>
      {data}
    </>
  )
}
