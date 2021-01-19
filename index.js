function takeANumber(line, name){
line.push(name)
return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing (katzDeliLine){
  if (katzDeliLine.length > 0){
   return `Currently serving ${katzDeliLine.shift()}.`
  }else {
    return "There is nobody waiting to be served!"
  }
}
function currentLine (lineOfPeople){
var arr =[]
if( lineOfPeople.length >0){ 
  for (let i=0; i<lineOfPeople.length; i++){
  arr.push(`${[i+1]}. ${lineOfPeople[i]}`)
  }
  return `The line is currently: ${arr.join(', ')}`
  
}else {
  return "The line is currently empty."
}
}