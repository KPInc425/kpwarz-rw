import { db } from 'src/lib/db'

export const checkPlayerFunds = async (characterId, price) => {
  const finances = await db.characterFinances.findUnique({
    where: { id: characterId },
  })
  console.log(finances.cashOnHand)
  console.log(characterId)
  if (finances.cashOnHand >= price) {
    return true
  } else {
    return false
  }
}

export const checkInventorySpace = async (characterId, quantity) => {
  const character = await db.character.findUnique({
    where: { id: characterId },
  })
  if (character.maxItems - character.currentItems > quantity) {
    return true
  } else {
    return false
  }
}

export const checkIfAlreadyHoldingItem = async (characterId, itemId) => {
  const items = await db.item.findUnique({
    where: { id: characterId },
  })
  if ([items].find((item) => item.id === itemId)) {
    return true
  } else {
    return false
  }
}

export const removeCostFromPlayer = async (characterId, price) => {
  const characterFinances = await db.characterFinances.findUnique({
    where: { id: characterId },
  })
  const updatedCharacter = await db.characterFinances.update({
    where: { id: characterId },
    data: {
      cashOnHand: characterFinances.cashOnHand - price,
    },
  })
  return updatedCharacter
}

export const addItemToPlayer = async (characterId, item) => {
  const character = await db.character.findUnique({
    where: { id: characterId },
  })
  const createItem = await db.item.create({
    data: {
      name: item.name,
      description: item.description,
      price: item.price,
      quantity: item.quantity,
      type: item.type,
      scale: item.scale,
      character: {
        connect: { id: characterId },
      },
    },
  })
  const updatedCharacter = await db.character.update({
    where: { id: characterId },
    data: {
      currentItems: character.currentItems + item.quantity,
    },
  })

  return { updatedCharacter, createItem }
}
