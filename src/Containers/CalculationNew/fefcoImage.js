import React from 'react'


const FefcoImage = (props) => {
    console.log(props.props)
    return (
        <img src={require(`../../Assets/productImg/${props.props}.png`)} style={{width:"20vw",objectFit:"contain"}}></img>

    )
}

export default FefcoImage
