import React, { useContext } from 'react'
import {store} from './API/ApiFile'
import '../Components/mobile.css'

const Mobile = () => {
  const [context]=useContext(store)
  // console.log(context)
  
    // return(
    //   <>
    //   <h1>Surya</h1>
    //   {

    //   }
    //   </>
    // )
    // <>
    return(
      <>
    {
      context.filter((artical)=>artical.catagory==='Mobile').map((item,ind)=>{
        const addCard=()=>{
          console.log(ind)
        }
        return(
          <>
          {/* <div className='mobile-container' >
            <div className='mobile' key={ind} >
              <h4>{item.id}</h4>
              <h3>{item.catogary}</h3>
              <h4>{item.name}</h4>
              <img src={item.image} alt='' height={'100px'} width={'100px'}></img>
              <h4 >{item.price}</h4>
              <h4 style={{textDecoration:"line-through",color
            :"gray"}}>{item.oPrice}</h4>

            </div>
          </div> */}
          <div className='first' key={ind} style={{height:'300px',width:'200px',border:'2px solid black',margin:'10px',display:'flex',flexDirection:'row'}} >
                  <div className='my' style={{display:'flex',flexDirection:'row',}}>
                  <div className='home-container'>
                  <h4>{item.id}</h4>
                  <h4 className='category' style={{marginLeft:'50px'}}>{item.catagory}</h4>
                  <h3 style={{textAlign:'center',marginLeft:'50px'}}>{item.name}</h3>
                
                  <img src={item.image} alt='' height={'80px'} width={'80px'} style={{textAlign:'center',marginLeft:"60px",marginTop:"-10px"}}></img>
                
                  {/* <img className='rating' src={item.rating} alt='' height={'20px'} width={'100px'}></img> */}
                  <h5 style={{textAlign:'center',marginLeft:"50px"}}>Price:{item.price}</h5>
            
                  <h5 style={{textAlign:'center',textDecoration:'line-through',color:"gray",marginLeft:'50px'}}>Original Price:{item.oPrice}</h5>
                  <button style={{marginLeft:'70px'}} onClick={addCard}>Add Card</button>
                  </div>
                  </div>
                  
                 
                            
                    
                </div> 
          </>
        )
      })
    }
    </>
    )
  // </>

}

export default Mobile