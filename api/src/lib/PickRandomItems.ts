const pickRandomItems = (items, count) => {
  const chosenItems = []
  const randomIndexChoices = []
  for (let i = 0; i < count; i++) {
    let randomIndex = Math.floor(Math.random() * items.length)
    while (randomIndexChoices.includes(randomIndex)) {
      randomIndex = Math.floor(Math.random() * items.length)
    }
    chosenItems.push(items[randomIndex])
    console.log('chosenItems', chosenItems)
    randomIndexChoices.push(randomIndex)
  }
  return chosenItems
}

export default pickRandomItems
