const generateNewRegion = (gameId) => {
  return {
    gameId: gameId,
    name: "Random Region",
    description: "This is a random region",
    cities: [
      {
        "Random City 1", "Random City 2"],
    debt: 200,
  }
}

export default generateNewRegion
