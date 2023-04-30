import { db } from 'src/lib/db'

export const generateNewItem = async (itemId, quantity) => {
  const item = await db.item.findUnique({
    where: { id: itemId },
  })

  const newItem = {
    name: item.name,
    description: item.description,
    price: item.price,
    quantity: quantity,
    type: item.type,
    scale: item.scale,
  }

  return newItem
}
