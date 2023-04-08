import AvailableTransportCell from 'src/components/AvailableTransport/AvailableTransportCell'

type AvailableTransportPageProps = {
  id: number
}

const AvailableTransportPage = ({ id }: AvailableTransportPageProps) => {
  return <AvailableTransportCell id={id} />
}

export default AvailableTransportPage
