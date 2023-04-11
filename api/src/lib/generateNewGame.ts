const generateNewGame = (characterId) => {
  return {
    name: 'Random Game for Test Character',
    description: 'This is a random game',
    currentCity: 'Random City 1',
    startLocation: 'Random Region',
    currentLocation: 'Random Region',
    currentDay: 1,
    maxDays: 30,
    timeOfDay: 'Morning',
    characterId: characterId,
    userId: context.currentUser.id,
  }
}

export default generateNewGame
