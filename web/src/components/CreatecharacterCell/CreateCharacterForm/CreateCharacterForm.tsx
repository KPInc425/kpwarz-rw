import { RadioGroup } from '@chakra-ui/react'
import { Stack, HStack } from '@chakra-ui/react'
import type { EditCharacterById, UpdateCharacterInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
  RadioField,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

import { useAuth } from 'src/auth'

type FormCharacter = NonNullable<EditCharacterById['character']>

interface CharacterFormProps {
  character?: EditCharacterById['character']
  onSave: (data: UpdateCharacterInput, id?: FormCharacter['id']) => void
  error: RWGqlError
  loading: boolean
}

const CharacterForm = (props: CharacterFormProps) => {
  const { currentUser } = useAuth()
  const onSubmit = (data: FormCharacter) => {
    generateCharacter(data)
    props.onSave(data, props?.character?.id)
  }

  const generateCharacter = (data) => {
    data.userId = currentUser.id
    data.health = 100
    data.maxHealth = 100
    data.currentItems = 0
    data.maxItems = 100
    data.luck = generateLuck(data)
    data.storageType = 'Pockets'
  }

  const generateLuck = (data) => {
    let modifier = 0
    if (data.background === 'Plebian') {
      modifier = 3
    } else if (data.background === 'Suburban Kid') {
      modifier = 2
    } else if (data.background === 'Affluenza') {
      modifier = 1
    }
    return Math.floor((Math.random() * 100) / modifier)
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
          Physical Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.character?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        {/* <Label
          name="startLocation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Starting Location
        </Label>

        <TextField
          name="startLocation"
          defaultValue={props.character?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="startLocation" className="rw-field-error" /> */}

        <Label
          name="background"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Rootz?
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="testStuff-background-0"
            name="background"
            defaultValue="Plebian"
            defaultChecked={props.character?.background?.includes('Plebian')}
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
            defaultChecked={props.character?.background?.includes(
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
            defaultChecked={props.character?.background?.includes('Affluenza')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Affluenza</div>
        </div>

        <FieldError name="background" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Let's Go!
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CharacterForm
