import EditTransportCell from 'src/components/Transport/EditTransportCell'

type TransportPageProps = {
  id: number
}

const EditTransportPage = ({ id }: TransportPageProps) => {
  return <EditTransportCell id={id} />
}

export default EditTransportPage
