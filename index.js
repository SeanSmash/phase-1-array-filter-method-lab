  function findMatching(array, name){
    return array.filter(function(driver){
      return driver.toLowerCase() === name.toLowerCase()
    })
  }

  function fuzzyMatch(array, name){
    return array.filter(function(driver){
      return driver.startsWith(name)
    })
  }

  function matchName(array, name){
      return array.filter(function(driver){
          return driver["name"] === name
      })
  }