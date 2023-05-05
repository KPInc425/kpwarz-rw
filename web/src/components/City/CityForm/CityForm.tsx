import type { EditCityById, UpdateCityInput } from 'types/graphql'

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

type FormCity = NonNullable<EditCityById['city']>

interface CityFormProps {
  city?: EditCityById['city']
  onSave: (data: UpdateCityInput, id?: FormCity['id']) => void
  error: RWGqlError
  loading: boolean
}

const CityForm = (props: CityFormProps) => {
  const onSubmit = (data: FormCity) => {
    props.onSave(data, props?.city?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCity> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.city?.name}
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
          defaultValue={props.city?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="avgQuality"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Avg quality
        </Label>

        <NumberField
          name="avgQuality"
          defaultValue={props.city?.avgQuality}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="avgQuality" className="rw-field-error" />

        <Label
          name="avgPrice"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Avg price
        </Label>

        <NumberField
          name="avgPrice"
          defaultValue={props.city?.avgPrice}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="avgPrice" className="rw-field-error" />

        <Label
          name="minQuantity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Min quantity
        </Label>

        <NumberField
          name="minQuantity"
          defaultValue={props.city?.minQuantity}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="minQuantity" className="rw-field-error" />

        <Label
          name="maxQuantity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Max quantity
        </Label>

        <NumberField
          name="maxQuantity"
          defaultValue={props.city?.maxQuantity}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="maxQuantity" className="rw-field-error" />

        <Label
          name="authorityPresence"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Authority presence
        </Label>

        <NumberField
          name="authorityPresence"
          defaultValue={props.city?.authorityPresence}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="authorityPresence" className="rw-field-error" />

        <Label
          name="regionId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Region id
        </Label>

        <NumberField
          name="regionId"
          defaultValue={props.city?.regionId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="regionId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CityForm
