import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    const api = axios.get("https://fakestoreapi.com/products").then((res) =>{
      console.log(res.data)
      setProducts(res.data)
    })
  },[])
  return (
    <div>
      <h1>API Store</h1>
      <div style={{display:"flex",flexWrap:"wrap",marginLeft:"6rem"}}>
      {products.map((product,index)=>{
        return(
          <div key={index} style={{border:"1px solid skyblue",padding:"1rem",margin:"1rem",width:"15rem"}}>
            <img src={product.image} style={{width:"10rem",marginLeft:"2rem"}}/>
            <h5>{product.title}</h5>
            <p>${product.price}</p>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default App
