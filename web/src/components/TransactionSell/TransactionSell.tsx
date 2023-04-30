const CREATE = gql`
  mutation CreateTransactionSellMutation($input: CreateTransactionSellInput!) {
    createTransactionSell(input: $input) {
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

const TransactionSell = ({ item, characterId, merchantId }) => {
  const [qtySell, setQtySell] = useState(1)
  const [createTransaction, { loading, error }] = useMutation(CREATE, {
    onCompleted: () => {
      toast.success('Thank you for your Product!')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    refetchQueries: [
      { query: FindCurrentMerchantQuery, variables: { id: merchantId } },
      { query: FindPlayerInventoryQuery, variables: { id: merchantId } },
    ],
  })

  const onSubmit = (input) => {
    console.log('input: ', input)
    input = {
      soldItemId: item.id,
      itemName: item.name,
      quantity: qtySell,
      price: item.price,
      characterId: characterId,
      merchantId: merchantId,
    }
    createTransaction({ variables: { input: input } })
  }

  return (
    <div>
      <h3 className="text-lg font-light font-semibold text-gray-600 dark:text-slate-100">
        Sell {qtySell} of {item.name} for ${item.price} per {item.unit}
      </h3>
      <h4 className="text-lg font-light font-semibold text-gray-600 dark:text-slate-100">
        Total: ${qtySell * item.price}
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
          defaultValue={1}
          onChange={(e) => setQtySell(Number(e.target.value))}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <Button disabled={loading} type="submit" className="mt-4">
          Sell
        </Button>
      </Form>
    </div>
  )
}

export default TransactionSell
