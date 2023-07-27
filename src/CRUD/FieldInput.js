import './design.css'
import React,{useState,useContext, useRef} from 'react'
import { Personcontext, Setpersoncontext } from './Crud';
export default function FieldInput() {

    const [person,setPerson] = useState({});
    const temp=useContext(Personcontext);
    const setTemp=useContext(Setpersoncontext);
    const count=useRef(undefined);

    function addFieldInput(e){
        e.preventDefault();
        e.target.reset();
        count.current=temp.length+1;
        setTemp([...temp,{id:(count.current),...person}]);
        //count.current=count.current+1;
        //console.log(temp.length)
        //() =>{count.current=temp.length+1;}
        //console.log(temp);
    }

    

  return (
    <div id='fieldform_align'>
        <form id='fieldform' onSubmit={(e) => addFieldInput(e)}>
            <input type="text" placeholder='Enter Name' onChange={(e) => {setPerson({name:e.target.value});}}/>
            <input type="text" placeholder='Enter Surname' onChange={(e) => {setPerson({...person,surname:e.target.value});}}/>
            <input type="text" placeholder='Enter Age' onChange={(e) => {setPerson({...person,age:e.target.value});}}/>
            <input type="text" placeholder='Enter Address' onChange={(e) => {setPerson({...person,address:e.target.value});}}/>
            <input type="text" placeholder='Enter Salary' onChange={(e) => {setPerson({...person,salary:e.target.value});}}/>
        </form>
        <button form='fieldform'>Add</button>
    </div>
  )
}
