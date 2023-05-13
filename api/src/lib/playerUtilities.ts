import { db } from 'src/lib/db'

export const checkPlayerFunds = async (characterId, price) => {
  console.log(characterId)
  const finances = await db.characterFinances.findUnique({
    where: { characterId: characterId },
  })
  console.log(finances)
  console.log(finances.cashOnHand)
  console.log(price)
  if (finances.cashOnHand >= price) {
    return true
  } else {
    return false
  }
}

export const checkPlayerEnoughItemsToSell = async (
  characterId,
  itemName,
  quantity
) => {
  const items = await db.item.findMany({
    where: { characterId: characterId },
  })
  const itemFound = items.find((item) => item.name === itemName)
  if (itemFound.quantity >= quantity) {
    return { status: true, itemId: itemFound.id }
  } else {
    return { status: false, itemId: null }
  }
}

export const checkInventorySpace = async (characterId, quantity) => {
  const character = await db.character.findUnique({
    where: { id: characterId },
  })
  if (character.maxItems - character.currentItems >= quantity) {
    return true
  } else {
    return false
  }
}

export const checkIfAlreadyHoldingItem = async (characterId, itemName) => {
  const items = await db.item.findMany({
    where: { characterId: characterId },
  })
  const itemFound = items.find((item) => item.name === itemName)
  if (itemFound) {
    return { status: true, itemId: itemFound.id }
  } else {
    return { status: false, itemId: null }
  }
}

export const setPlayerCash = async (characterId, price) => {
  const characterFinances = await db.characterFinances.findUnique({
    where: { characterId: characterId },
  })
  const updatedCharacter = await db.characterFinances.update({
    where: { characterId: characterId },
    data: {
      cashOnHand: characterFinances.cashOnHand + price,
    },
  })
  return updatedCharacter
}

export const addItemToPlayer = async (characterId, item) => {
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
  const updatedCharacter = await setCharacterQuantity(
    characterId,
    item.quantity
  )

  return { updatedCharacter, createItem }
}

export const removeItemFromPlayer = async (itemName, characterId, quantity) => {
  const items = await db.item.findMany({
    where: { characterId: characterId },
  })

  const itemFound = items.find((item) => item.name === itemName)
  if (itemFound) {
    const updatedItem = await db.item.update({
      where: { id: itemFound.id },
      data: {
        quantity: itemFound.quantity - quantity,
      },
    })
    if (updatedItem.quantity <= 0) {
      return db.item.delete({
        where: { id: updatedItem.id },
      })
    } else {
      return updatedItem
    }
  } else {
    throw new Error('Item not found')
  }
}

export const setCharacterQuantity = async (characterId, quantity) => {
  const character = await db.character.findUnique({
    where: { id: characterId },
  })
  const updatedCharacter = await db.character.update({
    where: { id: characterId },
    data: {
      currentItems: character.currentItems + quantity,
    },
  })
  return updatedCharacter
}
