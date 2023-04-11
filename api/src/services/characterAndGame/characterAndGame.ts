import type {
  QueryResolvers,
  MutationResolvers,
  CharacterRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { generateNewGame } from 'src/lib/generateNewGame'

export const characters: QueryResolvers['characters'] = () => {
  return db.character.findMany()
}

export const character: QueryResolvers['character'] = ({ id }) => {
  return db.character.findUnique({
    where: { id },
  })
}

export const createCharacter: MutationResolvers['createCharacter'] = ({
  input,
}) => {
  return db.character.create({
    data: input,
  })
}

export const updateCharacter: MutationResolvers['updateCharacter'] = ({
  id,
  input,
}) => {
  return db.character.update({
    data: input,
    where: { id },
  })
}

export const deleteCharacter: MutationResolvers['deleteCharacter'] = ({
  id,
}) => {
  return db.character.delete({
    where: { id },
  })
}

export const Character: CharacterRelationResolvers = {
  user: (_obj, { root }) => {
    return db.character.findUnique({ where: { id: root?.id } }).user()
  },
  finances: (_obj, { root }) => {
    return db.character.findUnique({ where: { id: root?.id } }).finances()
  },
  items: (_obj, { root }) => {
    return db.character.findUnique({ where: { id: root?.id } }).items()
  },
  transportation: (_obj, { root }) => {
    return db.character.findUnique({ where: { id: root?.id } }).transportation()
  },
  game: (_obj, { root }) => {
    return db.character.findUnique({ where: { id: root?.id } }).game()
  },
}
