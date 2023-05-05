import type {
  EditAvailableRegionById,
  UpdateAvailableRegionInput,
} from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormAvailableRegion = NonNullable<
  EditAvailableRegionById['availableRegion']
>

interface AvailableRegionFormProps {
  availableRegion?: EditAvailableRegionById['availableRegion']
  onSave: (
    data: UpdateAvailableRegionInput,
    id?: FormAvailableRegion['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const AvailableRegionForm = (props: AvailableRegionFormProps) => {
  const onSubmit = (data: FormAvailableRegion) => {
    props.onSave(data, props?.availableRegion?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormAvailableRegion> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.availableRegion?.name}
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
          defaultValue={props.availableRegion?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AvailableRegionForm
