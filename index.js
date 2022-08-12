// matching names of an array with a string
function findMatching(arr, str){
    let newArr = arr.filter(item => item.toLowerCase()==str.toLowerCase())
    return newArr    
}
//testing
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
console.log(findMatching(drivers,'Bobby'))

//returning all the drivers whose names starts with the specified substring
function fuzzyMatch(arr, subStr){
    let newArr = arr.filter(item => item.substring(0,subStr.length)== subStr)
    return newArr
}
//testing
console.log(fuzzyMatch(drivers, 'Sa'))

// modified version of findMatching for array of objects
function matchName(arr, str){
    let newArr = arr.filter(obj => obj['name'].toLowerCase()== str.toLowerCase())
    return newArr
}
//testing
const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
console.log(matchName(driver, 'Bobby'))