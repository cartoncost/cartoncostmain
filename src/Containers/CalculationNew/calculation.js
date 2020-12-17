import React, { Component } from 'react'
import {Form,Input,Select,Checkbox} from 'semantic-ui-react'
import {fefcovalue,ply,BoxQualityArr} from './InnerValues/ArrayValues'
import options from './InnerValues/Options'
import {BoxQuality} from './InnerValues/BoxQuality'
import FefcoImage from './fefcoImage'
import FluteCalculate from './Flutecalculate'
import ECTCalculation from './ECTCalculation/ECTCalculation'
import deckleCallen from './InnerValues/deckleCallen'
import {calcualtePaperWeight} from './InnerValues/calPaperweight'
import {eCTFinalCalc} from './ECTCalculation/ECTFinalCalc'
import {functionValues} from './InnerValues/functionValues'
import CalculationResult from './CalculationResult/CalculationResult'
import Aux from '../Hoc/Auxilary'
import classes from './Calculation.module.css'

export class calculation extends Component {
    state={
        slength:"",
        swidth:"",
        sheigth:"",
        BoxQuality:"",
        fefco:"",
        deckle:"",
        clength:"",
        total:"",
        errors:[],
        ply:"",
        0:"",
        1:"",
        2:"",
        3:"",
        paperWeight:0,
        cartonCost:0,
        gsm:[],
        bf:[],
        RCT:'',
        ECT:"",
        print:false,
        colors:"",
        colorNumber:"",
        Developmentcost:"",
        dcb:"",
        rsc:"",
        hsc:"",
        totalGsm:0,
        submitted:false
      }
    handleDropDownChange=(e,data)=>{
        const { name, value } = data;
        this.setState({ [name]: value });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    handleChange = (e, {name, value }) => {
        this.setState({[name]:value})
    }
    toggleChange=()=>{
        this.setState(prevState=>{
            return {print:!prevState.print}
        })
    }
    onSubmitHandler=e=>{
        e.preventDefault()
        if(this.state.slength || this.state.swidth || this.state.sheigth || this.state.BoxQuality ||
            this.state.fefco)
        {
        this.setState({
            submitted:true
        })
        const [deckle,clength]=deckleCallen(this.state)
        let total=((clength*deckle*1)/Math.pow(1000,2)).toFixed(2)
        const [element,paperWeight,key,paperCost]=calcualtePaperWeight(this.state.ply,
            this.state.BoxQuality,this.state[0],this.state[1],this.state[2],this.state[3])
            const cartonCost=Number(paperCost)*Number(total)
        
        const ect=eCTFinalCalc(this.state.ply,this.state.RCT,this.state[0],this.state[1],this.state[2],this.state[3])
        let totalGsm=functionValues(element)
        this.setState({gsm:element,bf:key,paperWeight:paperWeight,paperCost:paperCost,
            deckle:deckle,clength:clength,total:total,cartonCost:cartonCost,ECT:ect,totalGsm:totalGsm
        })
    }

    }

    render() {
        let Fefcoarr=options(fefcovalue)
        let plyArr=options(ply)
        let BoxQual=[]
        let img=null
        let printingfield=null
        let FluteCalc=[]
        let ECTCalc=[]
                if(this.state.ply){
                BoxQual=BoxQuality(BoxQualityArr,this.state.ply)
                FluteCalc=<FluteCalculate  changed={this.handleDropDownChange} ply={this.state.ply}/>
                ECTCalc=<ECTCalculation changed={this.handleInputChange} ply={this.state.ply}/>
                }
                

                if(this.state.fefco){
                    img=<FefcoImage props={this.state.fefco} />
                }
        if(this.state.print){
            printingfield=<>
            <Form.Group inline>
          <label><h3>Types of printing</h3></label>
          <Form.Radio
            label='Screen'
            value='screen'
            checked={this.state.colors === 'screen'}
            name="colors"
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Flexo'
            value='flexo'
            checked={this.state.colors === 'flexo'}
            name="colors"
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Offset'
            value='offset'
            checked={this.state.colors === 'offset'}
            name="colors"
            onChange={this.handleChange}
          />
        </Form.Group>
        
        <Form.Group inline>
          <label><h3>Types of color options </h3></label>
          <Form.Radio
            label='1 Color'
            value='1color'
            checked={this.state.colorNumber === '1color'}
            name="colorNumber"
            onChange={this.handleChange}
          />
          <Form.Radio
            label='2 Color'
            value='2color'
            checked={this.state.colorNumber === '2color'}
            name="colorNumber"
            onChange={this.handleChange}
          />
          <Form.Radio
            label='3 Color'
            value='3color'
            checked={this.state.colorNumber === '3color'}
            name="colorNumber"
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Multi-Color'
            value='multicolor'
            checked={this.state.colorNumber === 'multicolor'}
            name="colorNumber"
            onChange={this.handleChange}
          />
        </Form.Group>





 <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Development cost'
            placeholder='Development Cost'
            name="Developmentcost"
            value={this.state.Developmentcost}
            onChange={this.handleInputChange}
          />
            <Form.Field
            control={Input}
            label='Operation Cost(Die Cut box )'
            placeholder='Operation Cost(Die Cut box )'
            name="dcb"
            value={this.state.dcb}
            onChange={this.handleInputChange}
          />
            <Form.Field
            control={Input}
            label='Operation Cost(Regular Simple Carton)'
            placeholder='Operation Cost(Regular Simple Carton)'
            name="rsc"
            value={this.state.rsc}
            onChange={this.handleInputChange}
          />
            <Form.Field
            control={Input}
            label='Operation Cost(Half Simple Carton)'
            placeholder='Operation Cost(Half Simple Carton)'
            name="hsc"
            value={this.state.hsc}
            onChange={this.handleInputChange}
          />


          </Form.Group>
        </>
        }
    return (

        <div className={classes.Calculation}>
          <div className={classes.CalculationInner}>
        <Form onSubmit={this.onSubmitHandler}>
        <Form.Group widths='equal'>
        <Form.Field
            control={Select}
            label='Fefco'
            options={Fefcoarr}
            placeholder='Fefco'
            name='fefco'
            onChange={this.handleDropDownChange}
          />
        <Form.Field
            control={Select}
            label='Ply'
            options={plyArr}
            placeholder='Ply'
            name="ply"
            onChange={this.handleDropDownChange}
          />
        <Form.Field
            control={Select}
            label='Bursting Strength'
            options={BoxQual}
            placeholder='Bursting Strength'
            name="BoxQuality"
            onChange={this.handleDropDownChange}
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Length'
            placeholder='Length'
            name="slength"
            value={this.state.slength}
            onChange={this.handleInputChange}
          />
          <Form.Field
            control={Input}
            label='Width'
            placeholder='Width'
            name="swidth"
            value={this.state.swidth}
            onChange={this.handleInputChange}
          />
           <Form.Field
            control={Input}
            label='Heigth'
            placeholder='Heigth'
            name="sheigth"
            value={this.state.sheigth}
            onChange={this.handleInputChange}
          />

        </Form.Group>
        
        {FluteCalc}
        {ECTCalc}
        <Checkbox toggle onChange={this.toggleChange} label='With Printing'/>
        {printingfield}
        <Form.Button disabled={this.state.loading} 
        className={this.state.loading?'loading':null} 
        color="instagram">Submit</Form.Button>
        </Form>
        {img}

        {this.state.submitted?<CalculationResult {...this.state}/>:null}
        </div>
            </div>
        )
    }
}

export default calculation
