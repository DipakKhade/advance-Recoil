  import { useRecoilValue } from "recoil"
  import { dataAtom } from "./store/atoms/atoms"
import React from "react"

  export default function App(){


    return(
      <>
      hii
      <GetData/>
     
      </>
    )
  }


   function GetData(){
    const data= useRecoilValue(dataAtom)
    const maindata= data.data
    console.log(maindata)

    return(
      <>
{JSON.stringify(maindata)}
      {
        maindata.map(function(index,data){
        <div key={index} className="border rounded p-4 mb-4">
        <h2 className="text-lg font-bold">{data.title}</h2>
        <p className="mt-2">{data.completed ? 'Completed' : 'Not Completed'}</p>
      </div>
        })
      }
      </>
    )
  }