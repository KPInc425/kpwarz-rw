import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditAvailableTransportById,
  UpdateAvailableTransportInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormAvailableTransport = NonNullable<
  EditAvailableTransportById['availableTransport']
>

interface AvailableTransportFormProps {
  availableTransport?: EditAvailableTransportById['availableTransport']
  onSave: (
    data: UpdateAvailableTransportInput,
    id?: FormAvailableTransport['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const AvailableTransportForm = (props: AvailableTransportFormProps) => {
  const onSubmit = (data: FormAvailableTransport) => {
    props.onSave(data, props?.availableTransport?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormAvailableTransport> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.availableTransport?.name}
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
          defaultValue={props.availableTransport?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="speed"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Speed
        </Label>

        <NumberField
          name="speed"
          defaultValue={props.availableTransport?.speed}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="speed" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>

        <NumberField
          name="price"
          defaultValue={props.availableTransport?.price}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="price" className="rw-field-error" />

        <Label
          name="storage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Storage
        </Label>

        <NumberField
          name="storage"
          defaultValue={props.availableTransport?.storage}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="storage" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AvailableTransportForm
