import './design.css'
import React,{useState, useContext, useRef} from 'react'
import { Personcontext,Setpersoncontext } from './Crud';
import Data from './Data'
import Edit from './Edit';
import { useEffect } from 'react';

export default function FieldData() {

    const [editflag , setEditFlag] = useState(false);
    const editperson=useRef({});
    const edit=useRef(null);
    const editTemp=useRef(false);
    const temp=useContext(Personcontext);
    const setTemp=useContext(Setpersoncontext);

    //alert("hi")

    const setFlag =(flag,item) => {
        editperson.current=item;
        console.log(item);
        edit.current=<Edit editPerson={item} disableFlag={() => {edit.current=null;setEditFlag(!flag);}}></Edit>
        setEditFlag(flag);
    }

    const deleteFieldInput = (index) =>{
       setTemp(temp.filter(item => item.id !== index));
       editTemp.current=true;   
    }

    useEffect(() =>{
        console.log(temp);
        if(editTemp.current === true){
        setTemp(temp.map((item,index) => {
            editTemp.current=false;
            return {...item,id:index+1,};
        }))}
    },[editTemp.current]);

  return (
    <div id='fielddata'>
        <div style={{backgroundColor:'#76d4bd',}} className='fielddata_item' >
            <label htmlFor="">Id</label>
            <label htmlFor="">Name</label>
            <label htmlFor="">Salary</label>
            <label htmlFor="" className='operations'>Operations</label>
        </div>

        {temp.map((item,index) => {
            return <Data key={index} item={item} deleteFieldInput={deleteFieldInput} setFlag={setFlag}></Data>
        })}

        {edit.current}
    </div>
  )
}
