// Code your solution in this file.
function lowerCaseDrivers(driver){
  const d = drivers.map(function(num){
    return num.toLowerCase()
  })
  return d
}
function nameToAttributes(drivers){
  const d = drivers.map(function(num){
    return Object.assign({}, num, {firstName: num.split(""), lastName: num})
  })
  console.log(d)
  return d
}
function attribtuesToPhrase(drivers){
  const d = `${drivers.name} is from ${drivers.hometown}`
  return d
}
