import React, { Component } from 'react'
import Axios from 'axios'

export class UserInterface extends Component {
    state={
        banner:null
    }
    fileSelectHandler=(e)=>{
        this.setState({banner:e.target.files[0]})
    }

    fileUploadHandler=()=>{
        const fd=new FormData()
        fd.append('image',this.state.banner,this.state.banner.name)
        Axios.post('gs://cartoncost-409cb.appspot.com.json/',fd)
    }

    render() {
        return (
            <div style={{marginTop:"200px"}}>
                <input type="file" onChange={this.fileSelectHandler} name="banner" />
                <button onClick={this.fileUploadHandler}>Upload</button>
            </div>
        )
    }
}

export default UserInterface
