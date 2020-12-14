import React from 'react'
import { Form ,Input,Grid} from 'semantic-ui-react'
import {fluteTypes} from '../InnerValues/ArrayValues'
import options from '../InnerValues/Options'


const ECTCalculation = (props) => {
    const values=options(fluteTypes)
    let content=<Form.Field
            width={2}
            control={Input}
            label="RCT"
            placeholder='Length'
            name="RCT"
            value={props.value}
            onChange={props.changed}
          />
        
    
    return (
        <div  style={{marginRight:"auto",marginLeft:"auto"}}>
        <Form.Group>
                {content} 
        </Form.Group>
        </div>
    )
}

export default ECTCalculation






// import React from 'react'
// import { Form ,Input} from 'semantic-ui-react'
// import {fluteTypes} from '../InnerValues/ArrayValues'
// import options from '../InnerValues/Options'


// const ECTCalculation = (props) => {
//     const values=options(fluteTypes)
//     let content=[]
//     for(let i =0;i<props.ply;i++)
//     {
//         content=[...content,
//             <Form.Field
//             width={2}
//             control={Input}
//             label={`RCT ${i+1}`}
//             placeholder='Length'
//             name={`RCT ${i+1}`}
//             value={props.value}
//             changed={props.handleInputChange}
//           />
//         ]
//     }
//     return (
//         <div  style={{marginRight:"5vw",marginLeft:"5vw"}}>
//         <Form.Group>
//                 {content} 
//         </Form.Group>
           
//         </div>
//     )
// }

// export default ECTCalculation
