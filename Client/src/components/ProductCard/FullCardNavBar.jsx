import { useNavigate } from "react-router-dom"

const FullCardNavBar = () => {
    const navigate = useNavigate()
    function handleBack (){
        navigate("/product")
    }
  return (
    <div>
        <button className=" bg-zinc-900 text-white px-5 py-3 rounded-xl m-5 " onClick={()=> handleBack()} >Go back</button>
    </div>
  )
}

export default FullCardNavBar