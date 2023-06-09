import type { EditServiceById, UpdateServiceInput } from 'types/graphql'

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

type FormService = NonNullable<EditServiceById['service']>

interface ServiceFormProps {
  service?: EditServiceById['service']
  onSave: (data: UpdateServiceInput, id?: FormService['id']) => void
  error: RWGqlError
  loading: boolean
}

const ServiceForm = (props: ServiceFormProps) => {
  const onSubmit = (data: FormService) => {
    props.onSave(data, props?.service?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormService> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.service?.name}
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
          defaultValue={props.service?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="cityId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          City id
        </Label>

        <NumberField
          name="cityId"
          defaultValue={props.service?.cityId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="cityId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ServiceForm
