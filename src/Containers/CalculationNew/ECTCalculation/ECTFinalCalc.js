import React from 'react'
import {flute} from '../InnerValues/ObjectValues'

export const eCTFinalCalc = (ply,srct,flute1,flute2,flute3,flute4) => {
    const rct=Number(srct)
    const fluteval1=Number(flute[flute1])
    const fluteval2=Number(flute[flute2])
    const fluteval3=Number(flute[flute3])
    const fluteval4=Number(flute[flute4])
    let ect=0
    
    if(ply==='3')
    {
        if(isNaN(flute1))
        {
         ect=rct*2+(rct*fluteval1)
         return ect
        }
        else{
            alert('enter correct flute value')
        }
    }
    if(ply==='5')
    {
        if(isNaN(flute1) && isNaN(flute2))
        {
        ect=rct*3+(rct*fluteval1)+(rct*fluteval2)
        return ect
        }
        else{
            alert('enter correct flute value')
        }
    }
    if(ply==='7')
    {   
        if(isNaN(flute1) && isNaN(flute2) && isNaN(flute3)){
            ect=rct*4+(rct*fluteval1)+(rct*fluteval2)+(rct*fluteval3)
            return ect
        }
        else{
            alert('enter correct flute value')
        }
    }
    if(ply==='9')
    {
        if(isNaN(flute1) && isNaN(flute2) && isNaN(flute3) && isNaN(flute4)){
            ect=rct*5+(rct*fluteval1)+(rct*fluteval2)+(rct*fluteval3)+(rct*fluteval4)
            return ect
        }
        else{
            alert('enter correct flute value')
        }
    }
    
}


