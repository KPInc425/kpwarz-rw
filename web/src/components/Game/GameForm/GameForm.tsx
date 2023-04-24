import type { EditGameById, UpdateGameInput } from 'types/graphql'

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

type FormGame = NonNullable<EditGameById['game']>

interface GameFormProps {
  game?: EditGameById['game']
  onSave: (data: UpdateGameInput, id?: FormGame['id']) => void
  error: RWGqlError
  loading: boolean
}

const GameForm = (props: GameFormProps) => {
  const onSubmit = (data: FormGame) => {
    props.onSave(data, props?.game?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormGame> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.game?.name}
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
          defaultValue={props.game?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="startLocation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Start location
        </Label>

        <TextField
          name="startLocation"
          defaultValue={props.game?.startLocation}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="startLocation" className="rw-field-error" />

        <Label
          name="currentRegionId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Current location
        </Label>

        <TextField
          name="currentRegionId"
          defaultValue={props.game?.currentRegionId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="currentRegionId" className="rw-field-error" />

        <Label
          name="currentCity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Current city
        </Label>

        <TextField
          name="currentCity"
          defaultValue={props.game?.currentCity.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="currentCity" className="rw-field-error" />

        <Label
          name="maxDays"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Max days
        </Label>

        <NumberField
          name="maxDays"
          defaultValue={props.game?.maxDays}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="maxDays" className="rw-field-error" />

        <Label
          name="currentDay"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Current day
        </Label>

        <NumberField
          name="currentDay"
          defaultValue={props.game?.currentDay}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="currentDay" className="rw-field-error" />

        <Label
          name="timeOfDay"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Time of day
        </Label>

        <TextField
          name="timeOfDay"
          defaultValue={props.game?.timeOfDay}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="timeOfDay" className="rw-field-error" />

        <Label
          name="characterId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Character id
        </Label>

        <NumberField
          name="characterId"
          defaultValue={props.game?.characterId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="characterId" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <NumberField
          name="userId"
          defaultValue={props.game?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default GameForm
