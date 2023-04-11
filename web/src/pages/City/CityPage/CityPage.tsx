import CityCell from 'src/components/City/CityCell'

type CityPageProps = {
  id: number
}

const CityPage = ({ id }: CityPageProps) => {
  return <CityCell id={id} />
}

export default CityPage
