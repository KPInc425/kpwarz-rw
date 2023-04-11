const generateNewFinances = (regionId) => {
  return {
    regionId: regionId,
    name: 'Random City ' + Math.floor(Math.random() * 10000),
    avgQuality: Math.floor(Math.random() * 10),
    avgPrice: Math.floor(Math.random() * 10),
    minQuantity: Math.floor(Math.random() * 100),
    maxQuantity: Math.floor(Math.random() * 1000 + 100),
    authorityPresence: Math.floor(Math.random() * 10),
  }
}

export default generateNewFinances
