import type { EditCharacterById, UpdateCharacterInput } from 'types/graphql'

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

type FormCharacter = NonNullable<EditCharacterById['character']>

interface CharacterFormProps {
  character?: EditCharacterById['character']
  onSave: (data: UpdateCharacterInput, id?: FormCharacter['id']) => void
  error: RWGqlError
  loading: boolean
}

const CharacterForm = (props: CharacterFormProps) => {
  const onSubmit = (data: FormCharacter) => {
    props.onSave(data, props?.character?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCharacter> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.character?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="bio"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Bio
        </Label>

        <TextField
          name="bio"
          defaultValue={props.character?.bio}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="bio" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.character?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <NumberField
          name="userId"
          defaultValue={props.character?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="health"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Health
        </Label>

        <NumberField
          name="health"
          defaultValue={props.character?.health}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="health" className="rw-field-error" />

        <Label
          name="maxHealth"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Max health
        </Label>

        <NumberField
          name="maxHealth"
          defaultValue={props.character?.maxHealth}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="maxHealth" className="rw-field-error" />

        <Label
          name="currentItems"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Current items
        </Label>

        <NumberField
          name="currentItems"
          defaultValue={props.character?.currentItems}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="currentItems" className="rw-field-error" />

        <Label
          name="maxItems"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Max items
        </Label>

        <NumberField
          name="maxItems"
          defaultValue={props.character?.maxItems}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="maxItems" className="rw-field-error" />

        <Label
          name="luck"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Luck
        </Label>

        <NumberField
          name="luck"
          defaultValue={props.character?.luck}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="luck" className="rw-field-error" />

        <Label
          name="storageType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Storage type
        </Label>

        <TextField
          name="storageType"
          defaultValue={props.character?.storageType}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="storageType" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CharacterForm
