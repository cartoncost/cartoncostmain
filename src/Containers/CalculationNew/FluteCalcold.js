import React, { Component } from 'react'
import classes from './Calculation.module.css'
class FluteCalc extends Component {
    value=['A','B','C','E','F']
    flute={
        A:'1.5',
        B:'1.4',
        C:'1.45',
        E:'1.25',
        F:'1.2'
      }

onChangeHandler=(e)=>{
    this.setState({ [e.target.name]: e.target.value })
}
    render(){

    const values=this.value.map(el=><option key={el} value={el}>{el}</option>)

      
    let content=[]
    for(let i =0;i<Math.floor(this.props.ply/2);i++)
    {
        content=[...content,
            <div key={i}>

            <p className={classes.htableData} style={{textAlign:"left", marginBottom:"10px"}}>Flute {i+1}</p>
          <select name={[i]} onChange={this.props.changed} style={{width:"12.9861111vw",height:"3.3333333333vw",marginRight:"20px", border:"rgba(0, 0, 0, 0.39)"}}>
                {values}
              </select>
              </div>
        
        ]
    }
    return <div  style={{display:'flex',justifyContent:"center",backgroundColor:" #efefef",paddingBottom:"10px"}}>{content}</div>

}
}

export default FluteCalc