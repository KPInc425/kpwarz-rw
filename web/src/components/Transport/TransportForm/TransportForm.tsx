import type { EditTransportById, UpdateTransportInput } from 'types/graphql'

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

type FormTransport = NonNullable<EditTransportById['transport']>

interface TransportFormProps {
  transport?: EditTransportById['transport']
  onSave: (data: UpdateTransportInput, id?: FormTransport['id']) => void
  error: RWGqlError
  loading: boolean
}

const TransportForm = (props: TransportFormProps) => {
  const onSubmit = (data: FormTransport) => {
    props.onSave(data, props?.transport?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormTransport> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.transport?.name}
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
          defaultValue={props.transport?.description}
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
          defaultValue={props.transport?.speed}
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
          defaultValue={props.transport?.price}
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
          defaultValue={props.transport?.storage}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="storage" className="rw-field-error" />

        <Label
          name="characterId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Character id
        </Label>

        <NumberField
          name="characterId"
          defaultValue={props.transport?.characterId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="characterId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TransportForm
