import {gsm,bf,flute} from './ObjectValues'



export const calcualtePaperWeight=(ply,BoxQuality,fluteEl1,fluteEl2,fluteEl3,fluteEl4)=>{
    
    let paperWeight=0
    let element=[]
    let key=[]
    let paperCost=0
    switch (ply) {
      case "3":
        if(BoxQuality==="10"){
          element=gsm[3][10]
          paperWeight=element[0]+element[1]+(flute[fluteEl1]*element[2]) // aggrgt
          key=bf[3][10]
          paperCost=
          key[0]/1000*element[0]+
          key[1]/1000*element[1]+
          key[2]/1000*(flute[fluteEl1]*element[2])
          console.log("element",element,key)
          return [element,paperWeight,key,paperCost]
        }
        else if(BoxQuality==="9"){
          element=gsm[3][9]
          paperWeight=element[0]+element[1]+(flute[fluteEl1]*element[2])
          key=bf[3][9]
          paperCost=
          key[0]/1000*element[0]+
          key[1]/1000*element[1]+
          key[2]/1000*(flute[fluteEl1]*element[2])
          return [element,paperWeight,key,paperCost]
        }
        else if(BoxQuality==="11"){
          element=gsm[3][11]
          paperWeight=element[0]+element[1]+(flute[fluteEl1]*element[2])
          key=bf[3][11]
          paperCost=
          key[0]/1000*element[0]+
          key[1]/1000*element[1]+
          key[2]/1000*(flute[fluteEl1]*element[2])
          return [element,paperWeight,key,paperCost]
        }
  
        else{
          paperWeight=0
          key=[]
          element=[]
          paperCost=0
          return [element,paperWeight,key,paperCost]
        }
      break
      
      case '5':
        if(BoxQuality==="8"){
          element=gsm[5][8]
          paperWeight=element[0]+element[1]+element[2]+(flute[fluteEl1]*element[3])+(flute[fluteEl2]*element[4])
          key=bf[5][8]
          paperCost=
          key[0]/1000*element[0]+
          key[1]/1000*element[1]+
          key[2]/1000*element[2]+
          key[3]/1000*(flute[fluteEl1]*element[3])+
          key[4]/1000*(flute[fluteEl2]*element[4])
          return [element,paperWeight,key,paperCost]
        }
        else if(BoxQuality==="9"){
          element=gsm[5][9]
          paperWeight=element[0]+element[1]+element[2]+(flute[fluteEl1]*element[3])+(flute[fluteEl2]*element[4])
          key=bf[5][9]
          paperCost=
          key[0]/1000*element[0]+
          key[1]/1000*element[1]+
          key[2]/1000*element[2]+
          key[3]/1000*(flute[fluteEl1]*element[3])+
          key[4]/1000*(flute[fluteEl2]*element[4])
          return [element,paperWeight,key,paperCost]
        }
        else if(BoxQuality==="10"){
          element=gsm[5][10]
          paperWeight=element[0]+element[1]+element[2]+(flute[fluteEl1]*element[3])+(flute[fluteEl2]*element[4])
          key=bf[5][10]
          paperCost=
          key[0]/1000*element[0]+
          key[1]/1000*element[1]+
          key[2]/1000*element[2]+
          key[3]/1000*(flute[fluteEl1]*element[3])+
          key[4]/1000*(flute[fluteEl2]*element[4])
          return [element,paperWeight,key,paperCost]
        }
        else if(BoxQuality==="11"){
          element=gsm[5][11]
          paperWeight=element[0]+element[1]+element[2]+(flute[fluteEl1]*element[3])+(flute[fluteEl2]*element[4])
          key=bf[5][11]
          paperCost=
          key[0]/1000*element[0]+
          key[1]/1000*element[1]+
          key[2]/1000*element[2]+
          key[3]/1000*(flute[fluteEl1]*element[3])+
          key[4]/1000*(flute[fluteEl2]*element[4])
          return [element,paperWeight,key,paperCost]
        }
        else if(BoxQuality==="12"){
          element=gsm[5][12]
          paperWeight=element[0]+element[1]+element[2]+(flute[fluteEl1]*element[3])+(flute[fluteEl2]*element[4])
          key=bf[5][12]
          paperCost=
          key[0]/1000*element[0]+
          key[1]/1000*element[1]+
          key[2]/1000*element[2]+
          key[3]/1000*(flute[fluteEl1]*element[3])+
          key[4]/1000*(flute[fluteEl2]*element[4])
          return [element,paperWeight,key,paperCost]
        }
  
        else{
            paperWeight=0
            key=[]
            element=[]
            paperCost=0
            return [element,paperWeight,key,paperCost]
          }
      break
  
  
      case '7':
        if(BoxQuality==="12"){
          element=gsm[7][12]
          paperWeight=element[0]+element[1]+element[2]+element[3]+(flute[fluteEl1]*element[4])+(flute[fluteEl2]*element[5])+(flute[fluteEl3]*element[6])
          key=bf[7][12]
          paperCost=
          key[0]/1000*element[0]+
          key[1]/1000*element[1]+
          key[2]/1000*element[2]+
          key[3]/1000*element[3]+
          key[4]/1000*(flute[fluteEl1]*element[4])+
          key[5]/1000*(flute[fluteEl2]*element[5])+
          key[6]/1000*(flute[fluteEl3]*element[6])
          return [element,paperWeight,key,paperCost]
        }
        else if(BoxQuality==="14"){
          element=gsm[7][14]
          paperWeight=element[0]+element[1]+element[2]+element[3]+(flute[fluteEl1]*element[4])+(flute[fluteEl2]*element[5])+(flute[fluteEl3]*element[6])
          key=bf[7][14]
          paperCost=
          key[0]/1000*element[0]+
          key[1]/1000*element[1]+
          key[2]/1000*element[2]+
          key[3]/1000*element[3]+
          key[4]/1000*(flute[fluteEl1]*element[4])+
          key[5]/1000*(flute[fluteEl2]*element[5])+
          key[6]/1000*(flute[fluteEl3]*element[6])
          return [element,paperWeight,key,paperCost]
        }
        else if(BoxQuality==="15"){
          element=gsm[7][15]
          paperWeight=element[0]+element[1]+element[2]+element[3]+(flute[fluteEl1]*element[4])+(flute[fluteEl2]*element[5])+(flute[fluteEl3]*element[6])
  
          key=bf[7][15]
          paperCost=
          key[0]/1000*element[0]+
          key[1]/1000*element[1]+
          key[2]/1000*element[2]+
          key[3]/1000*element[3]+
          key[4]/1000*(flute[fluteEl1]*element[4])+
          key[5]/1000*(flute[fluteEl2]*element[5])+
          key[6]/1000*(flute[fluteEl3]*element[6])
          return [element,paperWeight,key,paperCost]
        }
        else if(BoxQuality==="17"){
          element=gsm[7][17]
          paperWeight=element[0]+element[1]+element[2]+element[3]+(flute[fluteEl1]*element[4])+(flute[fluteEl2]*element[5])+(flute[fluteEl3]*element[6])
          key=bf[7][17]
          paperCost=
          key[0]/1000*element[0]+
          key[1]/1000*element[1]+
          key[2]/1000*element[2]+
          key[3]/1000*element[3]+
          key[4]/1000*(flute[fluteEl1]*element[4])+
          key[5]/1000*(flute[fluteEl2]*element[5])+
          key[6]/1000*(flute[fluteEl3]*element[6])
          return [element,paperWeight,key,paperCost]
        }
        
        else{
            paperWeight=0
            key=[]
            element=[]
            paperCost=0
            return [element,paperWeight,key,paperCost]
          }
      break
      case '9':
        if(BoxQuality==="14"){
          element=gsm[9][14]
          paperWeight=element[0]+element[1]+element[2]+element[3]+element[4]+(flute[fluteEl1]*element[5])+(flute[fluteEl2]*element[6])+(flute[fluteEl3]*element[7])+(flute[fluteEl4]*element[8])
          key=bf[9][14]
          paperCost=
          key[0]/1000*element[0]+
          key[1]/1000*element[1]+
          key[2]/1000*element[2]+
          key[3]/1000*element[3]+
          key[4]/1000*element[4]+
          key[5]/1000*(flute[fluteEl1]*element[5])+
          key[6]/1000*(flute[fluteEl2]*element[6])+
          key[7]/1000*(flute[fluteEl3]*element[7])+
          key[8]/1000*(flute[fluteEl4]*element[8])
          return [element,paperWeight,key,paperCost]
        }
        else if(BoxQuality==="15"){
          element=gsm[9][15]
          paperWeight=element[0]+element[1]+element[2]+element[3]+element[4]+(flute[fluteEl1]*element[5])+(flute[fluteEl2]*element[6])+(flute[fluteEl3]*element[7])+(flute[fluteEl4]*element[8])
          key=bf[9][15]
          paperCost=
          key[0]/1000*element[0]+
          key[1]/1000*element[1]+
          key[2]/1000*element[2]+
          key[3]/1000*element[3]+
          key[4]/1000*element[4]+
          key[5]/1000*(flute[fluteEl1]*element[5])+
          key[6]/1000*(flute[fluteEl2]*element[6])+
          key[7]/1000*(flute[fluteEl3]*element[7])+
          key[8]/1000*(flute[fluteEl4]*element[8])
          return [element,paperWeight,key,paperCost]
        }
        else if(BoxQuality==="18"){
          element=gsm[9][18]
          paperWeight=element[0]+element[1]+element[2]+element[3]+element[4]+(flute[fluteEl1]*element[5])+(flute[fluteEl2]*element[6])+(flute[fluteEl3]*element[7])+(flute[fluteEl4]*element[8])
          key=bf[9][18]
          paperCost=
          key[0]/1000*element[0]+
          key[1]/1000*element[1]+
          key[2]/1000*element[2]+
          key[3]/1000*element[3]+
          key[4]/1000*element[4]+
          key[5]/1000*(flute[fluteEl1]*element[5])+
          key[6]/1000*(flute[fluteEl2]*element[6])+
          key[7]/1000*(flute[fluteEl3]*element[7])+
          key[8]/1000*(flute[fluteEl4]*element[8])
          return [element,paperWeight,key,paperCost]
        }
        else if(BoxQuality==="20"){
          element=gsm[9][20]
          paperWeight=element[0]+element[1]+element[2]+element[3]+element[4]+(flute[fluteEl1]*element[5])+(flute[fluteEl2]*element[6])+(flute[fluteEl3]*element[7])+(flute[fluteEl4]*element[8])
          key=bf[9][20]
          paperCost=
          key[0]/1000*element[0]+
          key[1]/1000*element[1]+
          key[2]/1000*element[2]+
          key[3]/1000*element[3]+
          key[4]/1000*element[4]+
          key[5]/1000*(flute[fluteEl1]*element[5])+
          key[6]/1000*(flute[fluteEl2]*element[6])+
          key[7]/1000*(flute[fluteEl3]*element[7])+
          key[8]/1000*(flute[fluteEl4]*element[8])
          return [element,paperWeight,key,paperCost]
        }
        
        else{
            paperWeight=0
            key=[]
            element=[]
            paperCost=0
            return [element,paperWeight,key,paperCost]
          }
      break
  
      default:
        paperWeight=0
        key=[]
        element=[]
        paperCost=0
        return [element,paperWeight,key,paperCost]
      
      
    }
    // this.setState({paperWeight:paperWeight})
    // this.setState({paperCost:paperCost})
    // const cartonCost=Number(paperCost)*Number(this.state.total)
    // this.setState({cartonCost:cartonCost})
  
  }