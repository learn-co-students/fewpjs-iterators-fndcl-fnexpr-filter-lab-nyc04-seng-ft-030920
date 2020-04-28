// Code your solution here
function findMatching(drivers , name){

    let nameFound =  drivers.filter(n => n.toLowerCase() === name.toLowerCase())

    return nameFound




}

function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
      )
}

function matchName(driver , name){

    return driver.filter(n => n.name === name)

}