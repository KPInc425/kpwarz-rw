import EditAvailableTransportCell from 'src/components/AvailableTransport/EditAvailableTransportCell'

type AvailableTransportPageProps = {
  id: number
}

const EditAvailableTransportPage = ({ id }: AvailableTransportPageProps) => {
  return <EditAvailableTransportCell id={id} />
}

export default EditAvailableTransportPage
