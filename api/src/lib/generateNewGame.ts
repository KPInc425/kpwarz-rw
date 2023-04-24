const generateNewGame = (characterId) => {
  return {
    name: 'Random Game for Test Character',
    description: 'This is a random game',
    startLocation: 'Random Region',
    currentDay: 1,
    maxDays: 30,
    timeOfDay: 'Morning',
    characterId: characterId,
    userId: context.currentUser.id,
  }
}

export default generateNewGame
