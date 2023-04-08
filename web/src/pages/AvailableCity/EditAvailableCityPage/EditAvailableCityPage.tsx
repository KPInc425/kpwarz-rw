import EditAvailableCityCell from 'src/components/AvailableCity/EditAvailableCityCell'

type AvailableCityPageProps = {
  id: number
}

const EditAvailableCityPage = ({ id }: AvailableCityPageProps) => {
  return <EditAvailableCityCell id={id} />
}

export default EditAvailableCityPage
