import EditCharacterFinancesCell from 'src/components/CharacterFinances/EditCharacterFinancesCell'

type CharacterFinancesPageProps = {
  id: number
}

const EditCharacterFinancesPage = ({ id }: CharacterFinancesPageProps) => {
  return <EditCharacterFinancesCell id={id} />
}

export default EditCharacterFinancesPage
