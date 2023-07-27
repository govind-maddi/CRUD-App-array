import './design.css'
import React,{useState,useContext,useRef} from 'react'
import { Personcontext, Setpersoncontext } from './Crud';

export default function Edit({editPerson,disableFlag}) {

    const [person,setPerson] = useState({});
    //const count=useRef(1);
    const temp=useContext(Personcontext);
    const setTemp=useContext(Setpersoncontext);

    //alert("call");

    /* const item = useRef({});
    item.current=temp[itemindex];
    console.log(item.current); */

    function editFieldInput(e){
        
        e.preventDefault();
        e.target.reset();
        setTemp(temp.map((i) =>{
            console.log(i === editPerson);
            if(i === editPerson)
            {
                return {id:editPerson.id,name:person.name,surname:person.surname,age:person.age,address:person.address,salary:person.salary,}
            }
            else
                return i;
        }));
        disableFlag();
        //console.log(editperson);
        //count.current=count.current+1;
    }


  return (
        <div id='editfieldform_align'>
        <form id='editfieldform' onSubmit={(e) => editFieldInput(e)}>
            <input type="text" placeholder='Enter Name' onChange={(e) => {setPerson({name:e.target.value});}}/>
            <input type="text" placeholder='Enter Surname' onChange={(e) => {setPerson({...person,surname:e.target.value});}}/>
            <input type="text" placeholder='Enter Age' onChange={(e) => {setPerson({...person,age:e.target.value});}}/>
            <input type="text" placeholder='Enter Address' onChange={(e) => {setPerson({...person,address:e.target.value});}}/>
            <input type="text" placeholder='Enter Salary' onChange={(e) => {setPerson({...person,salary:e.target.value});}}/>
        </form>
        <button form='editfieldform'>Update</button>
        </div>
  )
}

/* 
value={item.current.name}
value={item.current.surname
value={item.current.age} 
value={item.current.address
value={item.current.salary
*/
