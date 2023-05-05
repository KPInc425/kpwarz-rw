import type {
  EditCharacterFinancesById,
  UpdateCharacterFinancesInput,
} from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormCharacterFinances = NonNullable<
  EditCharacterFinancesById['characterFinances']
>

interface CharacterFinancesFormProps {
  characterFinances?: EditCharacterFinancesById['characterFinances']
  onSave: (
    data: UpdateCharacterFinancesInput,
    id?: FormCharacterFinances['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const CharacterFinancesForm = (props: CharacterFinancesFormProps) => {
  const onSubmit = (data: FormCharacterFinances) => {
    props.onSave(data, props?.characterFinances?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCharacterFinances> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="characterId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Character id
        </Label>

        <NumberField
          name="characterId"
          defaultValue={props.characterFinances?.characterId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="characterId" className="rw-field-error" />

        <Label
          name="cashOnHand"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Cash on hand
        </Label>

        <NumberField
          name="cashOnHand"
          defaultValue={props.characterFinances?.cashOnHand}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="cashOnHand" className="rw-field-error" />

        <Label
          name="bankAccount"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Bank account
        </Label>

        <NumberField
          name="bankAccount"
          defaultValue={props.characterFinances?.bankAccount}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="bankAccount" className="rw-field-error" />

        <Label
          name="debt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Debt
        </Label>

        <NumberField
          name="debt"
          defaultValue={props.characterFinances?.debt}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="debt" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CharacterFinancesForm
