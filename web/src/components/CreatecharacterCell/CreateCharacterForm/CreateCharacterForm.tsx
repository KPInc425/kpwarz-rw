import {
  Box,
  FormLabel,
  Input,
  RadioGroup,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { Stack, HStack } from '@chakra-ui/react'
import type { EditCharacterById, UpdateCharacterInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
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
  const inputBackgroundColor = useColorModeValue('green.100', 'green.700')

  const onSubmit = (data: FormCharacter) => {
    console.log(data)
    props.onSave(data, props?.character?.id)
  }

  return (
    <Box className="rw-form-wrapper">
      <Form<FormCharacter> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <FormLabel
          as={Label}
          name="name"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </FormLabel>

        <Input
          as={TextField}
          name="name"
          backgroundColor={inputBackgroundColor}
          defaultValue={props.character?.name}
          variant={'filled'}
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <FormLabel
          as={Label}
          name="bio"
          errorClassName="rw-label rw-label-error"
        >
          Bio
        </FormLabel>

        <Input
          as={TextAreaField}
          name="bio"
          defaultValue={props.character?.bio}
          variant={'filled'}
          backgroundColor={inputBackgroundColor}
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          h={'100px'}
        />

        <FieldError name="bio" className="rw-field-error" />

        <FormLabel
          as={Label}
          name="description"
          errorClassName="rw-label rw-label-error"
        >
          Physical Description
        </FormLabel>

        <Input
          as={TextAreaField}
          name="description"
          defaultValue={props.character?.description}
          variant={'filled'}
          backgroundColor={inputBackgroundColor}
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          multiple={true}
          h={'100px'}
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

        <FormLabel
          as={Label}
          name="background"
          errorClassName="rw-label rw-label-error"
        >
          Rootz?
        </FormLabel>

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
          <Text>Suburban Kid</Text>
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
    </Box>
  )
}

export default CharacterForm
