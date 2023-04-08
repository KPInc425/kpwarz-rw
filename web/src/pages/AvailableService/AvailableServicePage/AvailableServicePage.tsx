import AvailableServiceCell from 'src/components/AvailableService/AvailableServiceCell'

type AvailableServicePageProps = {
  id: number
}

const AvailableServicePage = ({ id }: AvailableServicePageProps) => {
  return <AvailableServiceCell id={id} />
}

export default AvailableServicePage
