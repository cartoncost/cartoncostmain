import React, { Component } from 'react'
import classes from "./Calculation.module.css";
import { makeStyles, Switch } from "@material-ui/core";
import { blue } from '@material-ui/core/colors';
import FefcoImage from './fefcoImage';
import FluteCalc from './FluteCalcold';


const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "40%",
      marginTop: "6%",
      marginRight: "3%",
      marginLeft: "3%",
      ["@media(max-width:600px)"]: {
        width: "80%",
        marginTop: "10%",
      },
    },
  },
}));




class CalculationNew extends Component {
gsm={
    3:{
      10:[200,200,140],
      9:[250,150,120],
      11:[250,220,120]},
    5:{
      8:[140,140,140,120,120],
      9:[150,150,150,140,140],
      10:[150,150,150,150,150],
      11:[150,150,200,140,140],
      12:[200,200,150,120,140]
    },
  7:{
    12:[150,150,150,150,120,120,120],
    14:[150,150,150,150,150,150,150],
    15:[180,180,150,150,150,150,150],
    17:[200,200,200,180,180,150,150]
  },
  9:{
    14:[120,120,120,120,120,180,180,180,180],
    15:[150,150,150,150,150,120,120,120,120],
    18:[150,150,150,150,150,180,180,180,180],
    20:[180,180,180,180,180,140,140,140,140]
  }

}
bf={
  3:{
    10:[27.25,27.25,23],
    9:[27.25,24,23],
    11:[27.25,27.25,23]},
  5:{
    8:[23,23,23,23,23],
    9:[23,23,23,23,23],
    10:[24,24,24,23,23],
    11:[24,24,24,23,23],
    12:[24,24,24,23,23]
  },
7:{
  12:[23,23,23,23,23,23,23],
  14:[24,24,24,24,24,24,24],
  15:[24,24,24,24,24,24,24],
  17:[24,24,24,24,24,24,24]
},
9:{
  14:[23,23,23,23,23,24,24,24,24],
  15:[23,23,23,23,23,23,23,23,23],
  18:[24,24,24,24,24,24,24,24,24],
  20:[24,24,24,24,24,23,23,23,23]
}

}


  value=['0201',
  '0200',
  '0203',
  '0204',
  '0210',
  '0211',
  '0212',
  '0215',
  '0216',
  '0218',
  '0225',
  '0226',
  '0227',
  '0300',
  '0301',
  '0302',
  '0314-Sleeve',
  '0314-Tray',
  '0320',
  '0321',
  '0330',
  '0416',
  '0420',
  '0421',
  '0422',
  '0427',
  '0432',
  '0433',
  '0447',
  '0453',
  '0501',
  ]
  
  ply=['3','5','7','9']
  BoxQuality=['-','8','9','10','11','12','14','15','17','18','19','20']
  flute={
    A:'1.5',
    B:'1.4',
    C:'1.45',
    E:'1.25',
    F:'1.2'
  }
  state={
    // qty:"",
    slength:"",
    swidth:"",
    sheigth:"",
    fefco:this.value[0],
    // flute:"",
    deckle:"",
    clength:"",
    total:"",
    errors:[],
    ply:this.ply[0],
    BoxQuality:this.BoxQuality[0],
    0:"A",
    1:"A",
    2:"A",
    3:"A",
    paperWeight:0,
    cartonCost:0


    
  }
onChangeHandler=e => this.setState({ [e.target.name]: e.target.value })


displayErrors=errors=>errors.map((error,i)=><p key={i}>{error.message}</p>)
onSubmitHandler=(e)=>{
  e.preventDefault()
 


  const {qty,slength,swidth,sheigth,fefco,flute,BoxQuality}=this.state

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
      break;
    case '0200':
      deckle=(width/2)+heigth
      clength=length+width+length+width+50
      break;
    case '0203':
      deckle=(2*width)+heigth
      clength=length+width+length+width+50
      break;

    case '0204':
      deckle=length+heigth
      clength=length+width+length+width+50
      break;

    case '0210':
      deckle=25+25+(2*width)+heigth
      clength=length+width+length+width+50
      break;

    case '0211':
      deckle=50+(2*width)+heigth
      clength=length+width+length+width+50
      break;

    case '0212':
      deckle=25+(width/2)+width+heigth
      clength=length+width+length+width+50
      break;

    case '0215':
      deckle=(2*width/3)+heigth+width+25
      clength=length+width+length+width+50
      break;

    case '0216':
      deckle=(2*width/3)+heigth+(width/2)
      clength=length+width+length+width+50
      break;

    case '0218':
      deckle=(2*width)+heigth
      clength=length+width+length+width+50
      break;

    case '0225':
      deckle=width+heigth+(width/2)
      clength=length+width+length+width+50
      break;

    case '0226':
      deckle=width+heigth
      clength=length+width+length+width+50
          break;

    case '0227':
      deckle=(2*width+heigth)
      clength=length+width+length+width+50
          break;

    case '0300':
      deckle=(2*heigth+length)
      clength=deckle+width+heigth
          break;

    case '0301':
      deckle=(2*heigth+length)
      clength=deckle+width+heigth
          break;

    case '0302':
      deckle=(2*heigth+length)
      clength=deckle+width+heigth
          break;

    case '0314-Tray':
      deckle=(4*heigth)+length+10
      clength=2*heigth+width
          break;

    case '0314-Sleeve':
      deckle=heigth
      clength=(2*length)+(2*width)+50
          break;

    case '0320':
      deckle=(width/2)+heigth
      clength=(2*length)+(2*width)+50
          break;

    case '0321':
      deckle=(width*(2/3))+heigth
      clength=(2*length)+(2*width)+50
          break;

    case '0330':
      deckle=(4*heigth)+length+10
      clength=(2*heigth)+width
          break;

    case '0416':
      deckle=(2*heigth)+length
      clength=(2*width)+(2*heigth)
          break;

    case '0420':
      deckle=100+(2*heigth)+length
      clength=(2*heigth)+(2*width)+25
          break;

    case '0421':
      deckle=(4*heigth)+length+10
      clength=(2*heigth)+(2*width)+25
          break;

    case '0422':
      deckle=(4*heigth)+length+10
      clength=(2*heigth)+width
          break;

    case '0427':
      deckle=(4*heigth)+length+10
      clength=(3*heigth)+(2*width)
          break;

    case '0432':
      deckle=(4*heigth)+length
      clength=(width/4)+heigth+width+heigth+(width/4)
          break;

    case '0433':
      deckle=(4*heigth)+length
      clength=(width/4)+heigth+width+heigth+(width/4)
          break;

    case '0447':
      deckle=100+(2*heigth)+length
      clength=(3*heigth)+(2*width)
          break;

    case '0453':
      deckle=(2*heigth)+length
      clength=(2*heigth)+width
          break;

    case '0501':
      deckle=heigth
      clength=(2*length)+(2*width)+50
          break;
  
    default:
      break;
  }

let total=((clength*deckle*1)/Math.pow(1000,2)).toFixed(2)
this.setState({deckle:deckle,clength:clength,total:total})
if(BoxQuality!=='-')
{
this.calcualtePaperWeight(BoxQuality)
}
}

calcualtePaperWeight=(BoxQuality)=>{
  console.log(this.state.ply,BoxQuality,this.gsm[this.state.ply][BoxQuality][0])
  let paperWeight=0
  let element=[]
  let key=[]
  let paperCost=0
  switch (this.state.ply) {
    case '3':
      if(BoxQuality==10){
        element=this.gsm[3][10]
        paperWeight=element[0]+element[1]+(this.flute[this.state[0]]*element[2]) // aggrgt
        key=this.bf[3][10]
        paperCost=
        key[0]/1000*element[0]+
        key[1]/1000*element[1]+
        key[2]/1000*(this.flute[this.state[0]]*element[2])
      }
      else if(BoxQuality==9){
        element=this.gsm[3][9]
        paperWeight=element[0]+element[1]+(this.flute[this.state[0]]*element[2])
        key=this.bf[3][9]
        paperCost=
        key[0]/1000*element[0]+
        key[1]/1000*element[1]+
        key[2]/1000*(this.flute[this.state[0]]*element[2])
      }
      else if(BoxQuality==11){
        element=this.gsm[3][11]
        paperWeight=element[0]+element[1]+(this.flute[this.state[0]]*element[2])
        key=this.bf[3][11]
        paperCost=
        key[0]/1000*element[0]+
        key[1]/1000*element[1]+
        key[2]/1000*(this.flute[this.state[0]]*element[2])
      }

      else{
        paperWeight=0
        paperCost=0
      }
    break
    
    case '5':
      if(BoxQuality==8){
        element=this.gsm[5][8]
        paperWeight=element[0]+element[1]+element[2]+(this.flute[this.state[0]]*element[3])+(this.flute[this.state[1]]*element[4])
        key=this.bf[5][8]
        paperCost=
        key[0]/1000*element[0]+
        key[1]/1000*element[1]+
        key[2]/1000*element[2]+
        key[3]/1000*(this.flute[this.state[0]]*element[3])+
        key[4]/1000*(this.flute[this.state[1]]*element[4])
      }
      else if(BoxQuality==9){
        element=this.gsm[5][9]
        paperWeight=element[0]+element[1]+element[2]+(this.flute[this.state[0]]*element[3])+(this.flute[this.state[1]]*element[4])
        key=this.bf[5][9]
        paperCost=
        key[0]/1000*element[0]+
        key[1]/1000*element[1]+
        key[2]/1000*element[2]+
        key[3]/1000*(this.flute[this.state[0]]*element[3])+
        key[4]/1000*(this.flute[this.state[1]]*element[4])
      }
      else if(BoxQuality==10){
        element=this.gsm[5][10]
        paperWeight=element[0]+element[1]+element[2]+(this.flute[this.state[0]]*element[3])+(this.flute[this.state[1]]*element[4])
        key=this.bf[5][10]
        paperCost=
        key[0]/1000*element[0]+
        key[1]/1000*element[1]+
        key[2]/1000*element[2]+
        key[3]/1000*(this.flute[this.state[0]]*element[3])+
        key[4]/1000*(this.flute[this.state[1]]*element[4])
      }
      else if(BoxQuality==11){
        element=this.gsm[5][11]
        paperWeight=element[0]+element[1]+element[2]+(this.flute[this.state[0]]*element[3])+(this.flute[this.state[1]]*element[4])
        key=this.bf[5][11]
        paperCost=
        key[0]/1000*element[0]+
        key[1]/1000*element[1]+
        key[2]/1000*element[2]+
        key[3]/1000*(this.flute[this.state[0]]*element[3])+
        key[4]/1000*(this.flute[this.state[1]]*element[4])
      }
      else if(BoxQuality==12){
        element=this.gsm[5][12]
        paperWeight=element[0]+element[1]+element[2]+(this.flute[this.state[0]]*element[3])+(this.flute[this.state[1]]*element[4])
        key=this.bf[5][12]
        paperCost=
        key[0]/1000*element[0]+
        key[1]/1000*element[1]+
        key[2]/1000*element[2]+
        key[3]/1000*(this.flute[this.state[0]]*element[3])+
        key[4]/1000*(this.flute[this.state[1]]*element[4])
      }

      else{
        paperWeight=0
        paperCost=0
      }
    break


    case '7':
      if(BoxQuality==12){
        element=this.gsm[7][12]
        paperWeight=element[0]+element[1]+element[2]+element[3]+(this.flute[this.state[0]]*element[4])+(this.flute[this.state[1]]*element[5])+(this.flute[this.state[2]]*element[6])
        key=this.bf[7][12]
        paperCost=
        key[0]/1000*element[0]+
        key[1]/1000*element[1]+
        key[2]/1000*element[2]+
        key[3]/1000*element[3]+
        key[4]/1000*(this.flute[this.state[0]]*element[4])+
        key[5]/1000*(this.flute[this.state[1]]*element[5])+
        key[6]/1000*(this.flute[this.state[2]]*element[6])
      }
      else if(BoxQuality==14){
        element=this.gsm[7][14]
        paperWeight=element[0]+element[1]+element[2]+element[3]+(this.flute[this.state[0]]*element[4])+(this.flute[this.state[1]]*element[5])+(this.flute[this.state[2]]*element[6])
        key=this.bf[7][14]
        paperCost=
        key[0]/1000*element[0]+
        key[1]/1000*element[1]+
        key[2]/1000*element[2]+
        key[3]/1000*element[3]+
        key[4]/1000*(this.flute[this.state[0]]*element[4])+
        key[5]/1000*(this.flute[this.state[1]]*element[5])+
        key[6]/1000*(this.flute[this.state[2]]*element[6])
      }
      else if(BoxQuality==15){
        element=this.gsm[7][15]
        paperWeight=element[0]+element[1]+element[2]+element[3]+(this.flute[this.state[0]]*element[4])+(this.flute[this.state[1]]*element[5])+(this.flute[this.state[2]]*element[6])

        key=this.bf[7][15]
        paperCost=
        key[0]/1000*element[0]+
        key[1]/1000*element[1]+
        key[2]/1000*element[2]+
        key[3]/1000*element[3]+
        key[4]/1000*(this.flute[this.state[0]]*element[4])+
        key[5]/1000*(this.flute[this.state[1]]*element[5])+
        key[6]/1000*(this.flute[this.state[2]]*element[6])
      }
      else if(BoxQuality==17){
        element=this.gsm[7][17]
        paperWeight=element[0]+element[1]+element[2]+element[3]+(this.flute[this.state[0]]*element[4])+(this.flute[this.state[1]]*element[5])+(this.flute[this.state[2]]*element[6])
        key=this.bf[7][17]
        paperCost=
        key[0]/1000*element[0]+
        key[1]/1000*element[1]+
        key[2]/1000*element[2]+
        key[3]/1000*element[3]+
        key[4]/1000*(this.flute[this.state[0]]*element[4])+
        key[5]/1000*(this.flute[this.state[1]]*element[5])+
        key[6]/1000*(this.flute[this.state[2]]*element[6])
      }
      
      else{
        paperWeight=0
        paperCost=0
      }
    break
    case '9':
      if(BoxQuality==14){
        element=this.gsm[9][14]
        paperWeight=element[0]+element[1]+element[2]+element[3]+element[4]+(this.flute[this.state[0]]*element[5])+(this.flute[this.state[1]]*element[6])+(this.flute[this.state[2]]*element[7])+(this.flute[this.state[3]]*element[8])
        key=this.bf[9][14]
        paperCost=
        key[0]/1000*element[0]+
        key[1]/1000*element[1]+
        key[2]/1000*element[2]+
        key[3]/1000*element[3]+
        key[4]/1000*element[4]+
        key[5]/1000*(this.flute[this.state[0]]*element[5])+
        key[6]/1000*(this.flute[this.state[1]]*element[6])+
        key[7]/1000*(this.flute[this.state[2]]*element[7])+
        key[8]/1000*(this.flute[this.state[3]]*element[8])
      }
      else if(BoxQuality==15){
        element=this.gsm[9][15]
        paperWeight=element[0]+element[1]+element[2]+element[3]+element[4]+(this.flute[this.state[0]]*element[5])+(this.flute[this.state[1]]*element[6])+(this.flute[this.state[2]]*element[7])+(this.flute[this.state[3]]*element[8])
        key=this.bf[9][15]
        paperCost=
        key[0]/1000*element[0]+
        key[1]/1000*element[1]+
        key[2]/1000*element[2]+
        key[3]/1000*element[3]+
        key[4]/1000*element[4]+
        key[5]/1000*(this.flute[this.state[0]]*element[5])+
        key[6]/1000*(this.flute[this.state[1]]*element[6])+
        key[7]/1000*(this.flute[this.state[2]]*element[7])+
        key[8]/1000*(this.flute[this.state[3]]*element[8])
      }
      else if(BoxQuality==18){
        element=this.gsm[9][18]
        paperWeight=element[0]+element[1]+element[2]+element[3]+element[4]+(this.flute[this.state[0]]*element[5])+(this.flute[this.state[1]]*element[6])+(this.flute[this.state[2]]*element[7])+(this.flute[this.state[3]]*element[8])
        key=this.bf[9][18]
        paperCost=
        key[0]/1000*element[0]+
        key[1]/1000*element[1]+
        key[2]/1000*element[2]+
        key[3]/1000*element[3]+
        key[4]/1000*element[4]+
        key[5]/1000*(this.flute[this.state[0]]*element[5])+
        key[6]/1000*(this.flute[this.state[1]]*element[6])+
        key[7]/1000*(this.flute[this.state[2]]*element[7])+
        key[8]/1000*(this.flute[this.state[3]]*element[8])
      }
      else if(BoxQuality==20){
        element=this.gsm[9][20]
        paperWeight=element[0]+element[1]+element[2]+element[3]+element[4]+(this.flute[this.state[0]]*element[5])+(this.flute[this.state[1]]*element[6])+(this.flute[this.state[2]]*element[7])+(this.flute[this.state[3]]*element[8])
        key=this.bf[9][20]
        paperCost=
        key[0]/1000*element[0]+
        key[1]/1000*element[1]+
        key[2]/1000*element[2]+
        key[3]/1000*element[3]+
        key[4]/1000*element[4]+
        key[5]/1000*(this.flute[this.state[0]]*element[5])+
        key[6]/1000*(this.flute[this.state[1]]*element[6])+
        key[7]/1000*(this.flute[this.state[2]]*element[7])+
        key[8]/1000*(this.flute[this.state[3]]*element[8])
      }
      
      else{
        paperWeight=0
        paperCost=0
      }
    break

    default:
      paperWeight=0
      paperCost=0
    
    
  }
  this.setState({paperWeight:paperWeight})
  this.setState({paperCost:paperCost})
  const cartonCost=Number(paperCost)*Number(this.state.total)
  this.setState({cartonCost:cartonCost})

}
    render() {

      console.log(this.state)
      const values=this.value.map(el=><option key={el} value={el}>{el}</option>
      )
      const ply=this.ply.map(el=><option key={el} value={el}>{el} Ply</option>
        )
      const BoxQuality=this.BoxQuality.map(el=>{
        if(this.state.ply==="3" )
        {

          if(el=='-'||el==9||el==10||el==11)
          {

            if(el=='-'){
              return <option key={el} value={el}>Select an Option</option>
            }
            return <option key={el} value={el}>{el} + BS
          </option>
          }
          
        }

        if(this.state.ply==="5" )
        {
          if(el=='-'||el==8||el==9||el==10||el==11||el==12)
          {
            if(el=='-'){
              return <option key={el} value={el}>Select an Option</option>
            }
            return <option key={el} value={el}>{el} + BS
          </option>
          }
          
        }
        if(this.state.ply==="7" )
        {
          if(el=='-'||el==12||el==14||el==15||el==17)
          {
            if(el=='-'){
              return <option key={el} value={el}>Select an Option</option>
            }
            return <option key={el} value={el}>{el} + BS
          </option>
          }
          
        }
        if(this.state.ply==="9" )
        {
          if(el=='-'||el==14||el==15||el==18||el==20)
          {
            if(el=='-'){
              return <option key={el} value={el}>Select an Option</option>
            }
            return <option key={el} value={el}>{el} + BS
          </option>
          }
          
        }
      }
          )
        return (
          <div className={classes.Align}>
          <form  className={classes.Calculation} onSubmit={this.onSubmitHandler}>

      <table className={classes.TableHead}>
      <thead>
        <tr className={classes.dataRow}>
        <th className={classes.hdata}>
            <p className={classes.htableData}>Fefco</p>
          </th>
          <th className={classes.hdata}>
            <p className={classes.htableData}>Ply</p>
          </th>
          <th className={classes.hdata}>
            <p className={classes.htableData}>Length (mm)</p>
          </th>
          <th className={classes.hdata}>
            <p className={classes.htableData}>width (mm)</p>
          </th>
          <th className={classes.hdata}>
            <p className={classes.htableData}>Heigth</p>
          </th>

          <th className={classes.hdata}>
            <p className={classes.htableData}>Box Quality</p>
          </th>

        </tr>
      </thead>
      <tbody>
        <tr className={classes.dataRow}>
        <td className={classes.data}>
            <p className={classes.tableData}>
            <select value={this.state.fefco} name="fefco" onChange={this.onChangeHandler} className={classes.innerText}>
            {values}
          </select>
              </p>
          </td>
          <td className={classes.data}>
            {/* <p className={classes.tableData}>
              <input className={classes.innerText} name="qty" value={this.state.qty} type="text" onChange={this.onChangeHandler}/>
            </p> */}
              <p className={classes.tableData}></p>
      <select value={this.state.ply} name="ply" onChange={this.onChangeHandler} style={{width:"12.9861111vw",height:"3.3333333333vw", border:"rgba(0, 0, 0, 0.39)"}}>
            {ply}
          </select>
          </td>
          <td className={classes.data}>
            <p className={classes.tableData}>
              <input className={classes.innerText} name="slength" value={this.state.slength} type="text" onChange={this.onChangeHandler}/>
              </p>
          </td>
          <td className={classes.data}>
            <p className={classes.tableData}>
              <input className={classes.innerText} name="swidth" value={this.state.swidth} type="text" onChange={this.onChangeHandler}/>
              </p>
          </td>
          <td className={classes.data}>
            <p className={classes.tableData}>
              <input className={classes.innerText} name="sheigth" value={this.state.sheigth} type="text" onChange={this.onChangeHandler}/>
              </p>
          </td>

          <td className={classes.data}>
            <p className={classes.tableData}>
            <select value={this.state.BoxQuality} name="BoxQuality" onChange={this.onChangeHandler} style={{width:"12.9861111vw",height:"3.3333333333vw", border:"rgba(0, 0, 0, 0.39)"}}>
            {BoxQuality}
          </select>
          </p>
          </td>


        </tr>

      </tbody>

      </table>
      {/* <div style={{display:'flex',justifyContent:"space-around",backgroundColor:" #efefef",paddingBottom:"10px"}}>
  <div>
        <p className={classes.htableData} style={{textAlign:"left", marginBottom:"10px"}}>Ply</p>
      <select value={this.state.ply} name="ply" onChange={this.onChangeHandler} style={{width:"12.9861111vw",height:"3.3333333333vw", border:"rgba(0, 0, 0, 0.39)"}}>
            {ply}
          </select>
          </div>
          <div>
        <p className={classes.htableData} style={{textAlign:"left", marginBottom:"10px"}}>Box Quality</p>
      <select value={this.state.BoxQuality} name="BoxQuality" onChange={this.onChangeHandler} style={{width:"12.9861111vw",height:"3.3333333333vw", border:"rgba(0, 0, 0, 0.39)"}}>
            {BoxQuality}
          </select>
          </div>
          </div> */}
          {this.state.cartonCost!==0?<p>Total cartonCost :{this.state.cartonCost}</p>:null}
<FluteCalc changed={this.onChangeHandler} ply={this.state.ply}/>

          <button  type="submit" >Submit</button>
            </form>
            <div >
            <FefcoImage props={this.state.fefco} />
            </div>
            </div>
        )
    }
}

export default CalculationNew
