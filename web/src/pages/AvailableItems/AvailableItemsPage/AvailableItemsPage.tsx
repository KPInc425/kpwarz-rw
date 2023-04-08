import AvailableItemsCell from 'src/components/AvailableItems/AvailableItemsCell'

type AvailableItemsPageProps = {
  id: number
}

const AvailableItemsPage = ({ id }: AvailableItemsPageProps) => {
  return <AvailableItemsCell id={id} />
}

export default AvailableItemsPage
