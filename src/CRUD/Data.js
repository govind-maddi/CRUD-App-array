import './design.css'
import React,{ useState } from 'react'
export default function Data({item,deleteFieldInput,setFlag}) {

  //console.log(item);

  return(
    <div className='fielddata_item'>
        <label htmlFor="">{item.id}</label>
        <label htmlFor="">{item.name}</label>
        <label htmlFor="">{item.salary}</label>
        <label htmlFor="" className='operations'>
            <button style={{backgroundColor:'#6c757d',}}>Details</button>
            <button style={{backgroundColor:'#fd974f',}} onClick={() => {setFlag(true,item)}}>Edit</button>
            <button style={{backgroundColor:'#dc3545',}} onClick={() => {deleteFieldInput(item.id)}}>Delete</button>
        </label>
    </div>
  )
}
