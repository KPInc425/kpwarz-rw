import AvailableCityCell from 'src/components/AvailableCity/AvailableCityCell'

type AvailableCityPageProps = {
  id: number
}

const AvailableCityPage = ({ id }: AvailableCityPageProps) => {
  return <AvailableCityCell id={id} />
}

export default AvailableCityPage
