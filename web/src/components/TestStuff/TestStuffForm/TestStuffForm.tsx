import type { EditTestStuffById, UpdateTestStuffInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormTestStuff = NonNullable<EditTestStuffById['testStuff']>

interface TestStuffFormProps {
  testStuff?: EditTestStuffById['testStuff']
  onSave: (data: UpdateTestStuffInput, id?: FormTestStuff['id']) => void
  error: RWGqlError
  loading: boolean
}

const TestStuffForm = (props: TestStuffFormProps) => {
  const onSubmit = (data: FormTestStuff) => {
    props.onSave(data, props?.testStuff?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormTestStuff> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.testStuff?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="background"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Background
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="testStuff-background-0"
            name="background"
            defaultValue="Plebian"
            defaultChecked={props.testStuff?.background?.includes('Plebian')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Plebian</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="testStuff-background-1"
            name="background"
            defaultValue="Suburban_Kid"
            defaultChecked={props.testStuff?.background?.includes(
              'Suburban_Kid'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Suburban Kid</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="testStuff-background-2"
            name="background"
            defaultValue="Affluenza"
            defaultChecked={props.testStuff?.background?.includes('Affluenza')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Affluenza</div>
        </div>

        <FieldError name="background" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TestStuffForm
