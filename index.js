// Code your solution in this file.

function lowerCaseDrivers(driver){

}
function nameToAttributes(drivers){
  const d = drivers.map(function(num){
    return Object.assign({}, num, {firstName: num.split(""), lastName: num})
  })
  console.log(d)
  return d
}
function attribtuesToPhrase(drivers){
  const d = `${drivers.name}` is from `${drivers.hometown}`
  return d
}
