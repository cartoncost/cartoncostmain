
export const BoxQuality=(array,ply)=>{
    
    let Arrayel=[]
    
    array.map(el=>{
    if(ply==="3" )
    {

      if(el==9||el==10||el==11)
      {

        Arrayel.push({ key: el, text: el+`BS`, value: el})

      }

    }

    if(ply==="5" )
    {
      if(el==8||el==9||el==10||el==11||el==12)
      {
        
        Arrayel.push({ key: el, text: el+`BS`, value: el})

      }
      
    }
    if(ply==="7" )
    {
      if(el==12||el==14||el==15||el==17)
      {
        Arrayel.push({ key: el, text: el+`BS`, value: el})

      }
      
    }
    if(ply==="9" )
    {
      if(el==14||el==15||el==18||el==20)
      {
        
        Arrayel.push({ key: el, text: el+`BS`, value: el})

      
    }
  }



})
return Arrayel

}