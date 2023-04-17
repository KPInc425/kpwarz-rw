const generateNewCity = (regionId) => {
  return {
    regionId: regionId,
    name: 'Random City ' + Math.floor(Math.random() * 10000),
    localBoss: 'Random Boss ' + Math.floor(Math.random() * 10000),
    description: `This is a random city Number ${Math.floor(
      Math.random() * 10000
    )}`,
    avgQuality: Math.floor(Math.random() * 10),
    avgPrice: Math.floor(Math.random() * 10),
    minQuantity: Math.floor(Math.random() * 100),
    maxQuantity: Math.floor(Math.random() * 1000 + 100),
    authorityPresence: Math.floor(Math.random() * 10),
  }
}

export default generateNewCity
