import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditRegionById, UpdateRegionInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormRegion = NonNullable<EditRegionById['region']>

interface RegionFormProps {
  region?: EditRegionById['region']
  onSave: (data: UpdateRegionInput, id?: FormRegion['id']) => void
  error: RWGqlError
  loading: boolean
}

const RegionForm = (props: RegionFormProps) => {
  const onSubmit = (data: FormRegion) => {
    props.onSave(data, props?.region?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormRegion> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.region?.name}
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
          defaultValue={props.region?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="control"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Control
        </Label>

        <TextField
          name="control"
          defaultValue={props.region?.control}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="control" className="rw-field-error" />

        <Label
          name="gameId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Game id
        </Label>

        <NumberField
          name="gameId"
          defaultValue={props.region?.gameId}
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

export default RegionForm
