import { db } from 'src/lib/db'

export const removeCostFromMerchant = async (merchantId, price) => {
  const merchant = await db.merchant.findUnique({
    where: { id: merchantId },
  })
  const updatedMerchant = await db.merchant.update({
    where: { id: merchantId },
    data: {
      funds: merchant.funds - price,
    },
  })
  return updatedMerchant
}

export const addCostToMerchant = async (merchantId, price) => {
  const merchant = await db.merchant.findUnique({
    where: { id: merchantId },
  })
  const updatedMerchant = await db.merchant.update({
    where: { id: merchantId },
    data: {
      funds: merchant.funds + price,
    },
  })
  return updatedMerchant
}

export const removeItemFromMerchant = async (itemId, quantity) => {
  const item = await db.item.findUnique({
    where: { id: itemId },
  })
  const updatedItem = await db.item.update({
    where: { id: itemId },
    data: {
      quantity: item.quantity - quantity,
    },
  })

  if (updatedItem.quantity === 0) {
    return db.item.delete({
      where: { id: itemId },
    })
  } else {
    return updatedItem
  }
}
