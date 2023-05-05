import type { EditItemById, UpdateItemInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormItem = NonNullable<EditItemById['item']>

interface ItemFormProps {
  item?: EditItemById['item']
  onSave: (data: UpdateItemInput, id?: FormItem['id']) => void
  error: RWGqlError
  loading: boolean
}

const ItemForm = (props: ItemFormProps) => {
  const onSubmit = (data: FormItem) => {
    props.onSave(data, props?.item?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormItem> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.item?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="quantity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quantity
        </Label>

        <NumberField
          name="quantity"
          defaultValue={props.item?.quantity}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="quantity" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>

        <NumberField
          name="price"
          defaultValue={props.item?.price}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="price" className="rw-field-error" />

        <Label
          name="quality"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quality
        </Label>

        <TextField
          name="quality"
          defaultValue={props.item?.quality}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="quality" className="rw-field-error" />

        <Label
          name="ability"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ability
        </Label>

        <TextField
          name="ability"
          defaultValue={props.item?.ability}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="ability" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.item?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>

        <TextField
          name="type"
          defaultValue={props.item?.type}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="type" className="rw-field-error" />

        <Label
          name="uses"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Uses
        </Label>

        <NumberField
          name="uses"
          defaultValue={props.item?.uses}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="uses" className="rw-field-error" />

        <Label
          name="characterId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Character id
        </Label>

        <NumberField
          name="characterId"
          defaultValue={props.item?.characterId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="characterId" className="rw-field-error" />

        <Label
          name="gameId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Game id
        </Label>

        <NumberField
          name="gameId"
          defaultValue={props.item?.gameId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="gameId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ItemForm
