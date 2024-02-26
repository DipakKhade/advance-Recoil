import axios from "axios";
import { atom, selector } from "recoil";

export const dataAtom=atom({
    key:'dataAtom',
    default:selector({
        key:'dataAtomSelector',
        get:async()=>{
           const responce= await axios.get('https://jsonplaceholder.typicode.com/todos')
           return responce
        }
    })
})

