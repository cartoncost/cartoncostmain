import React from 'react'
import { Form ,Select} from 'semantic-ui-react'
import {fluteTypes} from './InnerValues/ArrayValues'
import options from './InnerValues/Options'


const Flutecalculate = (props) => {
    const values=options(fluteTypes)
    let content=[]
    for(let i =0;i<Math.floor(props.ply/2);i++)
    {
        content=[...content,
            <Form.Field
            key={i}
            control={Select}
            label="Flute"
            options={values}
            placeholder='Box Quality'
            name={[i]}
            // onChange={(e,data)=>{
            //     console.log(data.name[0],data.value)
            // }}
            onChange={(e,data)=>{props.changed(e,data)}}
          />
        ]
    }
    return (
        <div  style={{marginRight:"15vw",marginLeft:"15vw"}}>
        <Form.Group  widths='equal'>
                {content} 
        </Form.Group>
           
        </div>
    )
}

export default Flutecalculate
