const generateCharacter = (data) => {
  data.userId = context.currentUser.id
  data.health = 100
  data.maxHealth = 100
  data.currentItems = 0
  data.maxItems = 100
  data.luck = generateLuck(data)
  data.storageType = 'Pockets'
  return data
}

export default generateCharacter

const generateLuck = (data) => {
  let modifier = 0
  if (data.background === 'Plebian') {
    modifier = 0.33
  } else if (data.background === 'Suburban_Kid') {
    modifier = 0.5
  } else if (data.background === 'Affluenza') {
    modifier = 1
  }
  // console.log(data.background)
  // console.log(modifier)
  // console.log(Math.floor(Math.random() * 100 * modifier))
  return Math.floor(Math.random() * 100 * modifier)
}
