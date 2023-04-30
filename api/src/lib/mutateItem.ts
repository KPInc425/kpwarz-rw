import { db } from 'src/lib/db'

export const mutateItem = async (itemId, quantity, price) => {
  const item = await db.item.findUnique({
    where: { id: itemId },
  })
  console.log(item)
  const newPrice = (item.price + price) / 2
  const updatedItem = await db.item.update({
    where: { id: itemId },
    data: {
      quantity: item.quantity + quantity,
      price: newPrice,
    },
  })
  return updatedItem
}
