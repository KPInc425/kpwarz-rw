import EditAvailableServiceCell from 'src/components/AvailableService/EditAvailableServiceCell'

type AvailableServicePageProps = {
  id: number
}

const EditAvailableServicePage = ({ id }: AvailableServicePageProps) => {
  return <EditAvailableServiceCell id={id} />
}

export default EditAvailableServicePage
