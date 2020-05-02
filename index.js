// Code your solution here

let findMatching = (driver, str) => {
    return driver.filter(ea => ea.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }
  
  function matchName(source, soughtName) {
    return source.filter( record => record.name === soughtName)
  }