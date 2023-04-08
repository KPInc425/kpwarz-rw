import EditAvailableItemsCell from 'src/components/AvailableItems/EditAvailableItemsCell'

type AvailableItemsPageProps = {
  id: number
}

const EditAvailableItemsPage = ({ id }: AvailableItemsPageProps) => {
  return <EditAvailableItemsCell id={id} />
}

export default EditAvailableItemsPage
