import type {
  EditAvailableItemsById,
  UpdateAvailableItemsInput,
} from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormAvailableItems = NonNullable<EditAvailableItemsById['availableItems']>

interface AvailableItemsFormProps {
  availableItems?: EditAvailableItemsById['availableItems']
  onSave: (
    data: UpdateAvailableItemsInput,
    id?: FormAvailableItems['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const AvailableItemsForm = (props: AvailableItemsFormProps) => {
  const onSubmit = (data: FormAvailableItems) => {
    props.onSave(data, props?.availableItems?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormAvailableItems> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.availableItems?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.availableItems?.description}
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

        <div className="rw-check-radio-items">
          <RadioField
            id="availableItems-type-0"
            name="type"
            defaultValue="Food"
            defaultChecked={props.availableItems?.type?.includes('Food')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Food</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="availableItems-type-1"
            name="type"
            defaultValue="Weapon"
            defaultChecked={props.availableItems?.type?.includes('Weapon')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Weapon</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="availableItems-type-2"
            name="type"
            defaultValue="Clothing"
            defaultChecked={props.availableItems?.type?.includes('Clothing')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Clothing</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="availableItems-type-3"
            name="type"
            defaultValue="Medicine"
            defaultChecked={props.availableItems?.type?.includes('Medicine')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Medicine</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="availableItems-type-4"
            name="type"
            defaultValue="Drug"
            defaultChecked={props.availableItems?.type?.includes('Drug')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Drug</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="availableItems-type-5"
            name="type"
            defaultValue="Misc"
            defaultChecked={props.availableItems?.type?.includes('Misc')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Misc</div>
        </div>

        <FieldError name="type" className="rw-field-error" />

        <Label
          name="ability"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ability
        </Label>

        <TextField
          name="ability"
          defaultValue={props.availableItems?.ability}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="ability" className="rw-field-error" />

        <Label
          name="basePrice"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Base price
        </Label>

        <NumberField
          name="basePrice"
          defaultValue={props.availableItems?.basePrice}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="basePrice" className="rw-field-error" />

        <Label
          name="chance"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Chance
        </Label>

        <NumberField
          name="chance"
          defaultValue={props.availableItems?.chance}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="chance" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AvailableItemsForm
