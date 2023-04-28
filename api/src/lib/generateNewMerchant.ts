const generateNewMerchant = (city) => {
  return {
    name: 'Random Merchant ' + Math.floor(Math.random() * 10000),
    bio: 'Random Bio ' + Math.floor(Math.random() * 10000),
    description: `This is random Merchant ${Math.floor(Math.random() * 10000)}`,
    city: city,
    currentItems: Math.floor(
      Math.random() * city.maxQuantity + city.minQuantity
    ),
    maxItems: city.maxQuantity,
    temperament: Math.floor(Math.random() * 10) + 1,
  }
}

export default generateNewMerchant
