import React, { useContext } from 'react'
import {store} from './API/ApiFile'

const Laptop = () => {
  const [context]=useContext(store)
  return (
    <>
    <h1>surya</h1>
        {
      context.filter((artical)=>artical.catagory==='laptop').map((item,ind)=>{
        const addCard=()=>{
          console.log(ind)
        }
        return(
          <>
          {/* <div className='mobile-container' key={ind}>
            <div className='mobile' >
              <h4>{item.id}</h4>
              <h3>{item.catogary}</h3>
              <h2>{item.name}</h2>
              <img src={item.image} alt='' height={'100px'} width={'100px'}></img>

            </div>
          </div> */}
          {/* <div className='first' key={ind} style={{height:'300px',width:'200px',border:'2px solid black',margin:'10px',display:'flex',flexDirection:'row'}} > */}
          <div >
          <div class="ecmain">
            {/* <div class="myname"> */}
                <div class="esub">
                    <h1>{item.id}</h1>
                    <h2>{item.name}</h2>
                    <h3><img src={item.image} height={'50px'} width={'50px'}></img></h3>
                    <button style={{marginLeft:'70px'}} onClick={addCard}>Add Card</button>

                </div>
            {/* </div> */}
            </div>
                  {/* <div className='my' style={{display:'flex',flexDirection:'row',}}>
                  <div className='home-container'>
                  <h4>{item.id}</h4>
                  <h4 className='category' style={{marginLeft:'50px'}}>{item.catagory}</h4>
                  <h3 style={{textAlign:'center',marginLeft:'50px'}}>{item.name}</h3>
                
                  <img src={item.image} alt='' height={'80px'} width={'80px'} style={{textAlign:'center',marginLeft:"60px",marginTop:"-10px"}}></img>
                
                  {/* <img className='rating' src={item.rating} alt='' height={'20px'} width={'100px'}></img> */}
                  {/* <h5 style={{textAlign:'center',marginLeft:"50px"}}>Price:{item.price}</h5>
            
                  <h5 style={{textAlign:'center',textDecoration:'line-through',color:"gray",marginLeft:'50px'}}>Original Price:{item.oPrice}</h5>
                  <button style={{marginLeft:'70px'}} onClick={addCard}>Add Card</button>
                  </div>
                  </div> */} 
                  
                 
                            
                    
                </div> 
          </>
        )
      })
    }
    </>
  )
}

export default Laptop