const generateNewRegion = (gameId) => {
  return {
    gameId: gameId,
    name: 'Random Region',
    description: 'This is a random region',
    control: 'Random Faction',
  }
}

export default generateNewRegion
