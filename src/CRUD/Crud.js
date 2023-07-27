import './design.css'
import React, { useState } from 'react'
import Navbar from './Navbar'
import FieldInput from './FieldInput'
import FieldData from './FieldData'

export const Personcontext=React.createContext();
export const Setpersoncontext=React.createContext();


export default function Crud() {

    const [personlist,setPersonList] = useState([]);

  return (
    <div id='maindiv'>
        <Personcontext.Provider value={personlist}>
            <Setpersoncontext.Provider value={setPersonList}>
                <Navbar></Navbar>
                <FieldInput></FieldInput>
                <FieldData></FieldData>
            </Setpersoncontext.Provider>
        </Personcontext.Provider>
    </div>
  )
}
