import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [products, setProducts] = useState({})
  useEffect(()=>{
    const api = axios.get("https://fakestoreapi.com/products").then((res) =>{
      console.log(res.data)
    })
  },[])
  return (
    <div>
      <h1>Store api</h1>
    </div>
  )
}

export default App
