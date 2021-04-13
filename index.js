let driver = {hair: 5}

function updateDriverWithKeyAndValue(driver, key, val)
{
  let newDriver = Object.assign({}, driver)
  newDriver[key] = val

  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, val)
{
  driver[key] = val

  return driver
}

function deleteFromDriverByKey(driver, key, val)
{
  let newDriver = Object.assign({}, driver)
  delete newDriver[key]

  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key, val)
{
  delete driver[key]

  return driver
}

