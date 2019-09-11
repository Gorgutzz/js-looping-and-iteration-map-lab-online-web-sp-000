// Code your solution in this file.
function lowerCaseDrivers(driverlist) {

  return driverlist.map(function(driver) {

    return driver.toLowerCase();
  });
}

<<<<<<< HEAD
function nameToAttributes(driverlist) {

  return(driverlist.map(function(driver) {

    const firstname = driver.split(' ')[0];
    const lastname = driver.split(' ')[1];

    return({ firstName: firstname, lastName: lastname }); }
  ));
}

function attributesToPhrase(driverlist) {

  return(driverlist.map(function(driver) {

    return(`${driver.name} is from ${driver.hometown}`); }
=======
function nameToAttributes(driverlist)
{
  return(driverlist.map(function(driver)
  {
    const firstname = driver.split(' ')[0];
    const lastname = driver.split(' ')[1];

    return({ firstName: firstname, lastName: lastname });
  }
>>>>>>> 40224d699089fd7e7524faba51d002b7cc8a1f00
  ));
}
