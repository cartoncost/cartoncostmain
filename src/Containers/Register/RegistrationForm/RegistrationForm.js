import Axios from 'axios'
import React, { Component } from 'react'
import {Form,Message} from 'semantic-ui-react'
import Aux from '../../Hoc/Auxilary'
import firebase from '../../../Firebase'
import {  Redirect, withRouter } from 'react-router-dom'
import {data} from './placeNames'
import * as actionCreators from '../../ReduxStore/Actions/index'
import {connect} from 'react-redux'



export class RegistrationForm extends Component {
    state={
        companyName: "",
        systemid: "",
        password: "",
        email: "",
        contactNumber: "",
        address: "",
        state: "",
        city: "",
        pin: "",
        date: new Date(),
        checked: false,
        states:Object.keys(data),
        errors:[],
        loading:false,
        userRef:firebase.database().ref('users')
    }
    handleInputChange = (e) => {
        
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };


    handleDropDownChange=(e,data)=>{
        const { name, value } = data;
        this.setState({ [name]: value });
    }
      toggleChange=()=>{
          this.setState(prevState=>{
              return {checked:!prevState.checked}
          })
      }
      isFormValid=()=>{
          let errors=[]
          let error
          if(this.isFormEmpty(this.state)){
            error={message:"Fill in all Fields"}
            this.setState({errors:errors.concat(error)})
            return false
          }
          else if(!this.isFieldValid(this.state)){

            return false
          }
          else{
              return true
          }
      }
      isFormEmpty=({companyName,password,email,contactNumber,address,state,city,pin,checked})=>{
        return !companyName.length || !password.length || !email.length || !contactNumber.length|| !address.length ||!state.length|| !city.length ||!pin.length || !checked
      }
      isFieldValid=({password,email,contactNumber,pin})=>{
        let errors=[]
        let error          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(password.length<6){
            error={message:"Password is not valid"}
            this.setState({errors:errors.concat(error)})
            return false
        }
        else if (!pattern.test(email)){
            error={message:"Email is not valid"}
            this.setState({errors:errors.concat(error)})
            return false
        }
        else if(contactNumber.length<10 || isNaN(Number(this.state.contactNumber))){
            error={message:"ContactNumber is not valid"}
            this.setState({errors:errors.concat(error)})
            return false
        }
        else if(pin.length!==6 || isNaN(Number(this.state.pin))){
            error={message:"PinCode is not valid"}
            this.setState({errors:errors.concat(error)})
            return false
        }
        else {
            return true
        }

      }
      HandleSubmit=(e)=>{
        e.preventDefault()
        // if(this.isFormValid()){
            this.setState({errors:[],loading:true})
            this.props.onAuth(this.state.companyName,this.state.email,this.state.password)
        // firebase
        // .auth()
        // .createUserWithEmailAndPassword(this.state.email,this.state.password)
        // .then(Response=>{
        //     this.state.userRef.child(Response.user.uid).set(
        //         {
        //             companyName: this.state.companyName,
        //             password: this.state.password,
        //             email: this.state.email,
        //             contactNumber:this.state.contactNumber,
        //             address: this.state.address,
        //             state: this.state.state,
        //             city: this.state.city,
        //             pin: this.state.pin,
        //             date: new Date(),
        //             checked: this.state.checked,
        //         }
        //     )
        //     this.setState({loading:false})
        //     this.props.history.push("/signin")

        // })
        // .catch(err=>{console.log(err);
        //     this.setState({errors:this.state.errors.concat(err),loading:false})
        // })
    //   }
    }

    displayErrors=(errors)=>{
        errors.map((error,i)=>{
            return <p key={i}>{error.message}</p>
        })
    }

    render() {
        let stateAr=[]
        let states=this.state.states.map(stateEl=>{
            return stateAr.push({ key: stateEl, text: stateEl, value: stateEl })
        })
        let cityAr=[]
        if(this.state.state){
            data[this.state.state].map(cityEl=>{
                return cityAr.push({ key: cityEl, text: cityEl, value: cityEl })
            })
        }
        let message=[]
        if(this.state.errors.length>0){
            this.state.errors.map(err=>{
                return message=<p>{err.message}</p>
            })
        }
        return (
            <Aux>
            <Form onSubmit={this.HandleSubmit}>
                    <Form.Group widths='equal'>
                    <Form.Input fluid 
                    type="text"
                    label='Company Name' 
                    placeholder='Company Name' 
                    name="companyName"
                    onChange={this.handleInputChange}
                    value={this.state.companyName}

                    />
                    
                    <Form.Input fluid 
                    label='Enter Email'
                    type="email" 
                    placeholder='Email Address' 
                    name="email"
                    onChange={this.handleInputChange}
                    value={this.state.email}

                    />
                </Form.Group>
              
              
                <Form.Group widths='equal'>
                    <Form.Input fluid 
                    type="password"
                    label='Password' 
                    placeholder='Password' 
                    name="password"
                    onChange={this.handleInputChange}
                    value={this.state.password}

                    />

                    <Form.Input fluid 
                    label='Contact Number'
                    type="text" 
                    placeholder='Contact Number' 
                    name="contactNumber"
                    onChange={this.handleInputChange}
                    value={this.state.contactNumber}
/>
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input fluid 
                    type="text"
                    label='Address line 1' 
                    placeholder='Address' 
                    name="address"
                    onChange={this.handleInputChange}
                    value={this.state.address}

                    />

                    <Form.Select
                    fluid
                    label='State'
                    placeholder='State'
                    options={stateAr}
                    name="state"
                    onChange={this.handleDropDownChange}
                    // value={this.state.state}
                    />
                </Form.Group>


                <Form.Group widths='equal'>
                    <Form.Select
                    fluid
                    label='City'
                    options={cityAr}
                    placeholder='City'
                    name="city"
                    onChange={this.handleDropDownChange}
                    // value={this.state.city}
                    />
                    <Form.Input fluid 
                    type="text"
                    label='PinCode' 
                    placeholder='PinCode' 
                    name="pin"
                    value={this.state.pin}
                    onChange={this.handleInputChange}
/>

                </Form.Group>
                <Form.Checkbox label='I agree to the Terms and Conditions' 
                name="checked" 
                onChange={this.toggleChange} 
                />
                <Form.Button disabled={this.state.loading} className={this.state.loading?'loading':null} color="instagram">Submit</Form.Button>
            </Form>
            {this.state.errors.length>0 &&(
                <Message error>
                    <h3>Error</h3>
            {message}
                </Message>
            )}
            </Aux>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onAuth:(username,email,password)=>dispatch(actionCreators.auth(username,email,password))
    }
}

export default withRouter(connect(null,mapDispatchToProps)(RegistrationForm))











//--------------------------------------------------------------------------------------------------------------------------
// import Axios from 'axios'
// import React, { Component } from 'react'
// import {Form,Message} from 'semantic-ui-react'
// import Aux from '../../Hoc/Auxilary'
// import firebase from '../../../Firebase'
// import {  Redirect, withRouter } from 'react-router-dom'
// import {data} from './placeNames'




// export class RegistrationForm extends Component {
//     state={
//         companyName: "",
//         systemid: "",
//         password: "",
//         email: "",
//         contactNumber: "",
//         address: "",
//         state: "",
//         city: "",
//         pin: "",
//         date: new Date(),
//         checked: false,
//         states:Object.keys(data),
//         errors:[],
//         loading:false,
//         userRef:firebase.database().ref('users')
//     }
//     handleInputChange = (e) => {
        
//         const { name, value } = e.target;
//         this.setState({ [name]: value });
//       };


//     handleDropDownChange=(e,data)=>{
//         const { name, value } = data;
//         this.setState({ [name]: value });
//     }
//       toggleChange=()=>{
//           this.setState(prevState=>{
//               return {checked:!prevState.checked}
//           })
//       }
//       isFormValid=()=>{
//           let errors=[]
//           let error
//           if(this.isFormEmpty(this.state)){
//             error={message:"Fill in all Fields"}
//             this.setState({errors:errors.concat(error)})
//             return false
//           }
//           else if(!this.isFieldValid(this.state)){

//             return false
//           }
//           else{
//               return true
//           }
//       }
//       isFormEmpty=({companyName,password,email,contactNumber,address,state,city,pin,checked})=>{
//         return !companyName.length || !password.length || !email.length || !contactNumber.length|| !address.length ||!state.length|| !city.length ||!pin.length || !checked
//       }
//       isFieldValid=({password,email,contactNumber,pin})=>{
//         let errors=[]
//         let error          
//         var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//         if(password.length<6){
//             error={message:"Password is not valid"}
//             this.setState({errors:errors.concat(error)})
//             return false
//         }
//         else if (!pattern.test(email)){
//             error={message:"Email is not valid"}
//             this.setState({errors:errors.concat(error)})
//             return false
//         }
//         else if(contactNumber.length<10 || isNaN(Number(this.state.contactNumber))){
//             error={message:"ContactNumber is not valid"}
//             this.setState({errors:errors.concat(error)})
//             return false
//         }
//         else if(pin.length!==6 || isNaN(Number(this.state.pin))){
//             error={message:"PinCode is not valid"}
//             this.setState({errors:errors.concat(error)})
//             return false
//         }
//         else {
//             return true
//         }

//       }
//       HandleSubmit=(e)=>{
//         e.preventDefault()
//         if(this.isFormValid()){
//             this.setState({errors:[],loading:true})
//         firebase
//         .auth()
//         .createUserWithEmailAndPassword(this.state.email,this.state.password)
//         .then(Response=>{
//             this.state.userRef.child(Response.user.uid).set(
//                 {
//                     companyName: this.state.companyName,
//                     password: this.state.password,
//                     email: this.state.email,
//                     contactNumber:this.state.contactNumber,
//                     address: this.state.address,
//                     state: this.state.state,
//                     city: this.state.city,
//                     pin: this.state.pin,
//                     date: new Date(),
//                     checked: this.state.checked,
//                 }
//             )
//             this.setState({loading:false})
//             this.props.history.push("/signin")

//         })
//         .catch(err=>{console.log(err);
//             this.setState({errors:this.state.errors.concat(err),loading:false})
//         })
//       }
//     }

//     displayErrors=(errors)=>{
//         errors.map((error,i)=>{
//             return <p key={i}>{error.message}</p>
//         })
//     }

//     render() {
//         let stateAr=[]
//         let states=this.state.states.map(stateEl=>{
//             return stateAr.push({ key: stateEl, text: stateEl, value: stateEl })
//         })
//         let cityAr=[]
//         if(this.state.state){
//             data[this.state.state].map(cityEl=>{
//                 return cityAr.push({ key: cityEl, text: cityEl, value: cityEl })
//             })
//         }
//         let message=[]
//         if(this.state.errors.length>0){
//             this.state.errors.map(err=>{
//                 return message=<p>{err.message}</p>
//             })
//         }
//         return (
//             <Aux>
//             <Form onSubmit={this.HandleSubmit}>
//                     <Form.Group widths='equal'>
//                     <Form.Input fluid 
//                     type="text"
//                     label='Company Name' 
//                     placeholder='Company Name' 
//                     name="companyName"
//                     onChange={this.handleInputChange}
//                     value={this.state.companyName}

//                     />
                    
//                     <Form.Input fluid 
//                     label='Enter Email'
//                     type="email" 
//                     placeholder='Email Address' 
//                     name="email"
//                     onChange={this.handleInputChange}
//                     value={this.state.email}

//                     />
//                 </Form.Group>
              
              
//                 <Form.Group widths='equal'>
//                     <Form.Input fluid 
//                     type="password"
//                     label='Password' 
//                     placeholder='Password' 
//                     name="password"
//                     onChange={this.handleInputChange}
//                     value={this.state.password}

//                     />

//                     <Form.Input fluid 
//                     label='Contact Number'
//                     type="text" 
//                     placeholder='Contact Number' 
//                     name="contactNumber"
//                     onChange={this.handleInputChange}
//                     value={this.state.contactNumber}
// />
//                 </Form.Group>

//                 <Form.Group widths='equal'>
//                     <Form.Input fluid 
//                     type="text"
//                     label='Address line 1' 
//                     placeholder='Address' 
//                     name="address"
//                     onChange={this.handleInputChange}
//                     value={this.state.address}

//                     />

//                     <Form.Select
//                     fluid
//                     label='State'
//                     placeholder='State'
//                     options={stateAr}
//                     name="state"
//                     onChange={this.handleDropDownChange}
//                     // value={this.state.state}
//                     />
//                 </Form.Group>


//                 <Form.Group widths='equal'>
//                     <Form.Select
//                     fluid
//                     label='City'
//                     options={cityAr}
//                     placeholder='City'
//                     name="city"
//                     onChange={this.handleDropDownChange}
//                     // value={this.state.city}
//                     />
//                     <Form.Input fluid 
//                     type="text"
//                     label='PinCode' 
//                     placeholder='PinCode' 
//                     name="pin"
//                     value={this.state.pin}
//                     onChange={this.handleInputChange}
// />

//                 </Form.Group>
//                 <Form.Checkbox label='I agree to the Terms and Conditions' 
//                 name="checked" 
//                 onChange={this.toggleChange} 
//                 />
//                 <Form.Button disabled={this.state.loading} className={this.state.loading?'loading':null} color="instagram">Submit</Form.Button>
//             </Form>
//             {this.state.errors.length>0 &&(
//                 <Message error>
//                     <h3>Error</h3>
//             {message}
//                 </Message>
//             )}
//             </Aux>
//         )
//     }
// }

// export default withRouter(RegistrationForm)



