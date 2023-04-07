import type { FindCharacterFinanceses } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CharacterFinanceses from 'src/components/CharacterFinances/CharacterFinanceses'

export const QUERY = gql`
  query FindCharacterFinanceses {
    characterFinanceses {
      id
      characterId
      cashOnHand
      bankAccount
      debt
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No characterFinanceses yet. '}
      <Link to={routes.newCharacterFinances()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  characterFinanceses,
}: CellSuccessProps<FindCharacterFinanceses>) => {
  return <CharacterFinanceses characterFinanceses={characterFinanceses} />
}
