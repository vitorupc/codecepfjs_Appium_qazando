var  random_number = require ('random-number'); 

const getNumber = () => {
var  option  = {
  min : 0, max : 1000, integer : true  
}
return (random_number(option));

}
console.log(getNumber())
exports.getNumber = getNumber