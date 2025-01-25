import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './Card'
import Navbar from "./NavBar";

const AllPerfumes = () => {

    const [perfumes, setPerfumes] = useState([])
    const [st,setSt] = useState(100)
    const getPerfumes = async ()=>{
        const response = await axios.get("http://localhost:3000/products/getPerfumes")
        setSt(response.status)
        setPerfumes(response.data)
    }
    useEffect(()=>{
        getPerfumes()
    },[])
    
  return (
    <>
    <Navbar/>
        <div className="flex flex-wrap gap-6 p-5" >
        {
           st == 100 ? <h1>loading....</h1> : st != 200 ? <h1>Something went wrong</h1>:

            perfumes.map((item,idx)=>{
                return <Card  key={idx} perfume={item} />
            })

        }
        
    </div>
    </>
  )
}

export default AllPerfumes