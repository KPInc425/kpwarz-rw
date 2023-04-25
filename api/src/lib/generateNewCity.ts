const generateNewCity = (regionId) => {
  const cityNumber = Math.floor(Math.random() * 10000)
  return {
    regionId: regionId,
    name: 'Random City ' + cityNumber,
    localBoss: 'Random Boss ' + Math.floor(Math.random() * 10000),
    description: `This is a random city Number ${cityNumber}`,
    avgQuality: Math.floor(Math.random() * 10),
    avgPrice: Math.floor(Math.random() * 10),
    minQuantity: Math.floor(Math.random() * 100),
    maxQuantity: Math.floor(Math.random() * 1000 + 100),
    authorityPresence: Math.floor(Math.random() * 10),
  }
}

export default generateNewCity
