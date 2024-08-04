import { useEffect, useState } from 'react';
import Category from './Category';
import axios from 'axios';

function App() {
  let [categoryState,setCategoryState] = useState([])
  let [productsState,setProductsState] = useState([])
  let [catNameState,setCatNameState] = useState('')


  let getCategory=()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>res.data)
    .then((finalRes)=>{
      setCategoryState(finalRes)
    })
  }

  let getProducts =()=>{
    axios.get('https://dummyjson.com/products')
    .then((proRes)=>proRes.data)
    .then((finalRes)=>{
      setProductsState(finalRes.products)
    })
  }
    useEffect(()=>{
      getCategory();
      getProducts();
    },[])

    useEffect(()=>{
      if(catNameState!==""){

        axios.get(`https://dummyjson.com/products/category/${catNameState}`)
        .then((proRes)=>proRes.data)
        .then((finalRes)=>{
          setProductsState(finalRes.products)
        })

      }
    },[catNameState])


    let products = productsState.map((value,index)=>{
      return(
        <ProductComp productsState = {productsState} key= {index} indexNum= {index}/>
      )
    })

  return (
    <>
    <div className='py-[40px]'>
      <div className='max-w-[1320px]  mx-auto p-5 bg-[#ffffff]'>
        <h1 className='text-center text-[30px] font-bold ml-[400px]'>Our Products</h1>
        <div className='grid grid-cols-[30%_auto] gap-[20px]'>
          <div className='bg-[#f3f3f3]'>
            <Category categoryState = {categoryState} setCatNameState = {setCatNameState} /> 
          </div>
          <div>
          <div className='grid grid-cols-3 gap-6'>
            
            {
            
            productsState.length>=1
            ?
            products
            :
            <img className ='flex justify-center m-auto w-[100px] ml-[380px] mt-[20px]' src='https://global.discourse-cdn.com/sitepoint/original/3X/e/3/e352b26bbfa8b233050087d6cb32667da3ff809c.gif' alt='No Data Found...'/> 
            }

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App; 

function ProductComp({productsState,indexNum}){
  return(
        <div className='shadow-2xl rounded-lg text-center'>
          <img src={productsState[indexNum].thumbnail} className='w-[100%] h-[220px]' alt='No'/>
          <h1>{productsState[indexNum].title}</h1>
          <b>{productsState[indexNum].price}</b>
        </div>
  )
} 