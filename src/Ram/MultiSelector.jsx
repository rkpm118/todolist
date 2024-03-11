import { useEffect, useState } from "react"

 export default function Multiselector(){
  const [data,setData]=useState(["ram","shyam"]);
  const [item,setItem]=useState("");

  useEffect(()=>{
    setData(data)
  },[])
const filterData=data.filter((e)=>e.toLowerCase().includes(item.toLowerCase()))
  return(
    <div>
    <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}/>

    {
      filterData.map((e)=>{
        return(
          <div>
          <p>{e}</p>
          </div>
        )
      })
    }
    </div>
  )
 }