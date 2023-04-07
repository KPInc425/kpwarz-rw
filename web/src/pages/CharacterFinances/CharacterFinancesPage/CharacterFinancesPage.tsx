import CharacterFinancesCell from 'src/components/CharacterFinances/CharacterFinancesCell'

type CharacterFinancesPageProps = {
  id: number
}

const CharacterFinancesPage = ({ id }: CharacterFinancesPageProps) => {
  return <CharacterFinancesCell id={id} />
}

export default CharacterFinancesPage
