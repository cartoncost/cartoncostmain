const Options = (array) => {
let Arrayel=[]
 array.map(el=>{
     return Arrayel.push({ key: el, text: el, value: el})
 })

 return Arrayel
}

export default Options
