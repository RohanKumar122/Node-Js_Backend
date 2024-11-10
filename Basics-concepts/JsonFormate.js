const JSON =require("JSON")

const data= '[{"name":"Rohan","age":20,"username":"rohan123"},{"name":"Rohan","age":20,"username":"rohan123"}]'

const json =JSON.parse(data)

const datamin=JSON.stringify(json)

console.log(data,typeof data)
console.log(json[0],typeof json)
console.log(datamin,    typeof datamin)