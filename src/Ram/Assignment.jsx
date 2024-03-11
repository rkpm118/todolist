


import { useEffect, useState } from "react"

function Assignment()
{
   let [data,setData]= useState([])
  useEffect(()=>{
    const url = 'https://moviesdatabase.p.rapidapi.com/titles';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '9660b413dfmshb8cd5891a92620fp167591jsnc31c7cde8f5a',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};
fetch(url,options).then((item)=>{
   // console.log(item)
    return item.json()
    
}).then((data)=>{
    console.log(data.results)
    setData(data.results)
}) 
console.log(data)
  },[])
    return (
        <div style={{display:"flex",flexWrap:"wrap",margin:"10px"}}>
        {data.length===0 && <h1>loding......</h1>}
        {data.length>0 && (
            <>
            {data.map((item)=>{
                let {primaryImage,titleText:{text="demo"}}=item
                return (
                
                    <>
                    
                    <div style={{border:"1px solid lightgrey",margin:"10px"}} >
                    <h4>{text}</h4>
                    <div >
                    <img src={primaryImage?.url}  alt={primaryImage?.url} style={{height:"350px", width:"250px"}}/>
                    </div>
                    <br/>
                    </div>
                   
                    </>
                )
            })}
            </>
        )}
        </div>
    )
}
export default Assignment;