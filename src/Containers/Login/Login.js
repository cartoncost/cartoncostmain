import {Header,Grid,Icon,Form,Segment, Button,Message } from 'semantic-ui-react'
import React, { Component } from 'react'
import firebase from '../../Firebase'


export class Login extends Component {
    state={
        email:"",
        password:"",
        loading:"",
        errors:[],

    
    }

    handleInputChange = (e) => {
        
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };
      

      componentDidMount(){
        const images = firebase.storage().ref();
        const image = images.child('Rectangle 68.png');

        
      }
    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.isFormValid(this.state)){
            this.setState({errors:[],loading:true})
            firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
            .then(signedInUser=>{
                console.log(signedInUser);
                this.setState({loading:false})
            })
            .catch(
                err=>{

                    this.setState({errors:this.state.errors.concat(err),loading:false})
                }
            )
        
    }}
    isFormValid=({email,password})=>{
        return email && password
    }
    render() {
        let message=[]
        if(this.state.errors.length>0){
            this.state.errors.map(err=>{
                return message=<p>{err.message}</p>
            })
        }
        return (
            
            <div style={{marginTop:"10.92vw"}}>

                <Grid textAlign="center" verticalAlign="middle" className="app">
                    <Grid.Column style={{maxWidth:450}}>
                        <Header as="h1" icon color="#00AD5A" textAlign="center">
                        <Icon name="inbox icon" color="brown"></Icon>
                        Register for Calculating Carton Cost
                        </Header>
                        <Form onSubmit={this.handleSubmit} size="large">
                            <Segment stacked>
                            <Form.Input
                            fluid
                            name="email"
                            icon="mail"
                            iconPosition="left"
                            placeholder="Email"
                            type="email"
                            onChange={this.handleInputChange}
                            value={this.state.email}
                            />
                            <Form.Input
                            fluid
                            name="password"
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            type="password"
                            onChange={this.handleInputChange}
                            value={this.state.password}
                            />
                            <Button
                            disabled={this.state.loading}
                            className={this.state.loading?'loading':''}
                            color="green"
                            fluid
                            size="large">
                                Login
                            </Button>
                            </Segment>
                        </Form>
                        {this.state.errors.length>0?(
                            <Message error>
                                <h3>Error</h3>
                                {message}
                            </Message>
                        ):""}
                    </Grid.Column>
                </Grid>
                
            </div>
        )
    }
}

export default Login
