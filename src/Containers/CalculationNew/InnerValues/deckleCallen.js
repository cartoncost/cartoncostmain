import React from 'react'

const deckleCallen = ({qty,slength,swidth,sheigth,fefco,flute,BoxQuality}) => {
    let length=Number(slength)
    let heigth=Number(sheigth)
    let width=Number(swidth)
    let sqty=Number(qty)
  
    let deckle=0
    let clength=0
    switch (fefco) {
        case '0201':
          deckle=width+heigth
          clength=length+width+length+width+50
          return [deckle,clength];
        case '0200':
          deckle=(width/2)+heigth
          clength=length+width+length+width+50
          return [deckle,clength];
        case '0203':
          deckle=(2*width)+heigth
          clength=length+width+length+width+50
          return [deckle,clength];
    
        case '0204':
          deckle=length+heigth
          clength=length+width+length+width+50
          return [deckle,clength];
    
        case '0210':
          deckle=25+25+(2*width)+heigth
          clength=length+width+length+width+50
          return [deckle,clength];
    
        case '0211':
          deckle=50+(2*width)+heigth
          clength=length+width+length+width+50
          return [deckle,clength];
    
        case '0212':
          deckle=25+(width/2)+width+heigth
          clength=length+width+length+width+50
          return [deckle,clength];
    
        case '0215':
          deckle=(2*width/3)+heigth+width+25
          clength=length+width+length+width+50
          return [deckle,clength];
    
        case '0216':
          deckle=(2*width/3)+heigth+(width/2)
          clength=length+width+length+width+50
          return [deckle,clength];
    
        case '0218':
          deckle=(2*width)+heigth
          clength=length+width+length+width+50
          return [deckle,clength];
    
        case '0225':
          deckle=width+heigth+(width/2)
          clength=length+width+length+width+50
          return [deckle,clength];
    
        case '0226':
          deckle=width+heigth
          clength=length+width+length+width+50
              return [deckle,clength];
    
        case '0227':
          deckle=(2*width+heigth)
          clength=length+width+length+width+50
              return [deckle,clength];
    
        case '0300':
          deckle=(2*heigth+length)
          clength=deckle+width+heigth
              return [deckle,clength];
    
        case '0301':
          deckle=(2*heigth+length)
          clength=deckle+width+heigth
              return [deckle,clength];
    
        case '0302':
          deckle=(2*heigth+length)
          clength=deckle+width+heigth
              return [deckle,clength];
    
        case '0314-Tray':
          deckle=(4*heigth)+length+10
          clength=2*heigth+width
              return [deckle,clength];
    
        case '0314-Sleeve':
          deckle=heigth
          clength=(2*length)+(2*width)+50
              return [deckle,clength];
    
        case '0320':
          deckle=(width/2)+heigth
          clength=(2*length)+(2*width)+50
              return [deckle,clength];
    
        case '0321':
          deckle=(width*(2/3))+heigth
          clength=(2*length)+(2*width)+50
              return [deckle,clength];
    
        case '0330':
          deckle=(4*heigth)+length+10
          clength=(2*heigth)+width
              return [deckle,clength];
    
        case '0416':
          deckle=(2*heigth)+length
          clength=(2*width)+(2*heigth)
              return [deckle,clength];
    
        case '0420':
          deckle=100+(2*heigth)+length
          clength=(2*heigth)+(2*width)+25
              return [deckle,clength];
    
        case '0421':
          deckle=(4*heigth)+length+10
          clength=(2*heigth)+(2*width)+25
              return [deckle,clength];
    
        case '0422':
          deckle=(4*heigth)+length+10
          clength=(2*heigth)+width
              return [deckle,clength];
    
        case '0427':
          deckle=(4*heigth)+length+10
          clength=(3*heigth)+(2*width)
              return [deckle,clength];
    
        case '0432':
          deckle=(4*heigth)+length
          clength=(width/4)+heigth+width+heigth+(width/4)
              return [deckle,clength];
    
        case '0433':
          deckle=(4*heigth)+length
          clength=(width/4)+heigth+width+heigth+(width/4)
              return [deckle,clength];
    
        case '0447':
          deckle=100+(2*heigth)+length
          clength=(3*heigth)+(2*width)
              return [deckle,clength];
    
        case '0453':
          deckle=(2*heigth)+length
          clength=(2*heigth)+width
              return [deckle,clength];
    
        case '0501':
          deckle=heigth
          clength=(2*length)+(2*width)+50
              return [deckle,clength];
      
        default:
          return [deckle,clength];
      }

}

export default deckleCallen
