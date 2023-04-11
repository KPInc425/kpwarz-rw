const generateNewFinances = (characterId) => {
  return {
    characterId: characterId,
    cashOnHand: 250,
    bankAccount: -200,
    debt: 200,
  }
}

export default generateNewFinances
