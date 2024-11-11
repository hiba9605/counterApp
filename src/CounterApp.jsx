import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount,reset } from './redux/counterSlice'

const CounterApp = () => {

  const [amount,setAmount]=useState(0)


    const {count} =useSelector(state=>state.counterReducer)
    const dispatch=useDispatch()

    const handleIncrementAmount=()=>{
      if(amount){

        dispatch(incrementByAmount(+amount))

      }else{
        alert("please enter valid amount!!!")
      }
    }
  return (
  <div style={{background:'black'}}  className=' vh-100 text-white align-items-center justify-content-center d-flex '>
    <div className='p-5 border border-white rounded text-center' style={{background:'black',width:'900px'}}>
        <h1>Counter App</h1>

<h1 style={{fontSize:'60px'}} className='my-4 '>{count}</h1>
<div  className='d-flex justify-content-around mb-3 buttons'>
    <button onClick={()=>dispatch(decrement())}  className='btn btn-warning' style={{fontSize:'1.5rem',padding :'15px 30px ',color:'white'}}>DECREMENT</button>
    <button onClick={()=>dispatch(reset())} className='btn btn-danger' style={{fontSize:'1.5rem',padding :'15px 30px'}}>RESET</button>
    <button onClick={()=>dispatch(increment())} className='btn btn-success' style={{fontSize:'1.5rem',padding :'15px 30px'}}>INCREMENT</button>
</div>
<div style={{padding:'20px',marginTop:'80px', }} className='d-flex' >
<input onChange={e=>setAmount(e.target.value)} style={{height:'50px',width:'180%',marginTop:'20px',fontSize:'1.7rem'}}  className='form-control text-center mb-3 ' type="number" placeholder='Enter the Amount to be incremented' />
<button onClick={handleIncrementAmount} style={{width:'350px' ,marginLeft:'80px',fontSize:'1.1rem'}} className='btn btn-primary'>INCREMENT BY <br />AMOUNT</button>
</div>


    </div>
  </div>
  )
}

export default CounterApp