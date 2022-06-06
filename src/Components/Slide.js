import React, { useEffect, useState } from 'react'
import slide from './../Assets/images/slide.png';
import slide1 from './../Assets/images/slide1.png';
import slide2 from './../Assets/images/slide2.png';
export default function Slide() {
       const [Slides,setSlides]=useState([
     
         {img:`${slide}`,status: false,active:'main__slide-item--active'},
         {img:`${slide1}`,status: false,active:''},
         {img:`${slide2}`,status: false,active:''}
         
        ] );
        
        const [vtSlide,setvtSlide]=useState(0);


          
          useEffect(()=>{
         
           
        const  handleSlide= setInterval(()=>{
          setvtSlide(vtSlide+1);
          if(vtSlide>=Slides.length-1){
            setvtSlide(0);
          }
       
            Slides.map((Slide)=>{
              if(Slide.active=='main__slide-item--active'){
                setSlides([...Slides,Slide.active=''])
              }
            })
             
           
            setSlides([...Slides,Slides[vtSlide].active='main__slide-item--active']);
           
        },2000);

         return ()=>{
           clearInterval(handleSlide);
         }
              
          },[vtSlide]);
      
        

   const showSlide=()=>{
      if(Slides.length==4){
        Slides.splice(Slides.length-1,1);
      }

     return Slides.map((Slide,index)=>{
        return  <li className={`main__slide-item ${Slide.active}`} key={index}>
        <img src={Slide.img} alt="" className="main__slide-item-img" />
      </li> 
      })
     }

     const  handleLeft=()=>{
       if(vtSlide-1<0){
        setvtSlide(Slides.length-1);
       }else
       setvtSlide(vtSlide-1);
      
      
      Slides.map((Slide)=>{
        if(Slide.active=='main__slide-item--active'){
          setSlides([...Slides,Slide.active=''])
        }
      })
     
      setSlides([...Slides,Slides[vtSlide].active='main__slide-item--active']);
      
   }
   const  handleRight=()=>{
    if(vtSlide+1>=Slides.length){
     setvtSlide(0);
    }else
    setvtSlide(vtSlide+1);
  
 
   Slides.map((Slide)=>{
     if(Slide.active=='main__slide-item--active'){
       setSlides([...Slides,Slide.active=''])
     }
   })
  
   setSlides([...Slides,Slides[vtSlide].active='main__slide-item--active']);
   
}

  return (
    <div className="main__slide">
    <div className="ul main__slide-list">
       {showSlide()}
        
    </div>
    <div className="main__slide-icon">
      <i className="fa fa-angle-left main__slide-icon-left "  onClick={()=>handleLeft()}/>
      <i className="fa fa-angle-right main__slide-icon-right" onClick={()=>handleRight()}/>
    </div>
  </div>
  )
}
