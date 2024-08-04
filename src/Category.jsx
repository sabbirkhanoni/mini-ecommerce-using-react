 import React from 'react'
 
 export default function Category({categoryState,setCatNameState}) {

    let category = categoryState.map((value,index)=>{
        return(
            <li onClick={()=>setCatNameState(value.name)} key = {index} className='bg-[#333333] rounded-full pl-5 text-white p-[7px] cursor-pointer font-serif my-3'>
            {value.name}
           </li>
        )
    })


   return (
     <div className='text-[20px] font-serif p-[10px]'>Category
 
        <ul>
            {category}
        </ul>

     </div>
   )
 }
 