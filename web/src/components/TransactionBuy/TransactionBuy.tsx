const CREATE = gql`
  mutation CreateTransactionBuyMutation($input: CreateTransactionBuyInput!) {
    createTransactionBuy(input: $input) {
      itemName
      characterId
      merchantId
      quantity
      price
    }
  }
`
import { useState } from 'react'

import { Button } from '@chakra-ui/react'

import {
  Form,
  FormError,
  Label,
  NumberField,
  TextField,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY as FindCurrentMerchantQuery } from 'src/components/CurrentMerchantCell'
import { QUERY as FindPlayerInventoryQuery } from 'src/components/PlayerInventoryCell'

const TransactionBuy = ({ item, characterId, merchantId }) => {
  const [qtyBuy, setQtyBuy] = useState(1)
  const [createTransaction, { loading, error }] = useMutation(CREATE, {
    onCompleted: () => {
      toast.success('Thank you for your purchase!')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    refetchQueries: [
      { query: FindCurrentMerchantQuery, variables: { id: merchantId } },
      { query: FindPlayerInventoryQuery, variables: { id: characterId } },
    ],
  })

  const onSubmit = (input) => {
    console.log(characterId)
    input = {
      boughtItemId: item.id,
      itemName: item.name,
      quantity: qtyBuy,
      price: item.price,
      characterId: characterId,
      merchantId: merchantId,
    }
    createTransaction({ variables: { input: input } })
  }

  return (
    <div>
      <h3 className="text-lg font-light font-semibold text-gray-600 dark:text-slate-100">
        Buy {qtyBuy} of {item.name} for ${item.price} per {item.unit}
      </h3>
      <h4 className="text-lg font-light font-semibold text-gray-600 dark:text-slate-100">
        Total: ${qtyBuy * item.price}
      </h4>
      <Form className="mt-4 w-full" onSubmit={onSubmit}>
        <FormError error={error} titleClassName="font-semibold" />
        <Label
          name="quantity"
          className="block text-sm uppercase text-gray-600 dark:text-slate-300"
        >
          Quantity
        </Label>
        <NumberField
          name="quantity"
          validation={{ required: true }}
          min={1}
          max={item.quantity}
          defaultValue={1}
          onChange={(e) => setQtyBuy(Number(e.target.value))}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <Button disabled={loading} type="submit" className="mt-4">
          Buy
        </Button>
      </Form>
    </div>
  )
}

export default TransactionBuy
