import { useRecoilValue } from "recoil"
import { dataAtom } from "./store/atoms/atoms"


export default function App(){
  const data=useRecoilValue(dataAtom)
  console.log(data)
  return(
    <>
      
    </>
  )
}