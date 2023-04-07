import type { FindCharacterFinancesById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CharacterFinances from 'src/components/CharacterFinances/CharacterFinances'

export const QUERY = gql`
  query FindCharacterFinancesById($id: Int!) {
    characterFinances: characterFinances(id: $id) {
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

export const Empty = () => <div>CharacterFinances not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  characterFinances,
}: CellSuccessProps<FindCharacterFinancesById>) => {
  return <CharacterFinances characterFinances={characterFinances} />
}
