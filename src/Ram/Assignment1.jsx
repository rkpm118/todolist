import React, { useEffect, useState } from 'react'

function Assignment1() {
    const [item,setItem]=useState([]);

    const url='https://moviesdatabase.p.rapidapi.com/titles';
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '9660b413dfmshb8cd5891a92620fp167591jsnc31c7cde8f5a',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    useEffect(()=>{
        const FetchData=async()=>{
            const res=await fetch(url,options);
            const  result=await  res.json();
            console.log(result.results);
            setItem(result.results)
        }
        FetchData();
    },[])
  return (
    <div>FetchData
    {
       item.length==0 ? <h1>loading............</h1> :

        item?.map((e)=>{
            return (
                <div>
                    <img src={e.primaryImage?.url} alt="" />
                </div>
            )
        })
    }
    </div>
  )
}

export default Assignment1; 