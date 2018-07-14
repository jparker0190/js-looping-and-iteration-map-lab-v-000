// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const d = drivers.map(function(num){
    return num.toLowerCase()
  })
  return d
}
function nameToAttributes(drivers){
  const d = drivers.map(function(num){
    return Object.assign({}, num, {firstName: num.split(","), lastName: num})
  })
  console.log(d)
  return d
}
function attribtuesToPhrase(drivers){
  const d = drivers.map(function(num){
    return `${num.name} is from ${num.hometown}`
  })
  return d
}
