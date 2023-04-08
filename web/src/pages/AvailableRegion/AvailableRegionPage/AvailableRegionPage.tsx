import AvailableRegionCell from 'src/components/AvailableRegion/AvailableRegionCell'

type AvailableRegionPageProps = {
  id: number
}

const AvailableRegionPage = ({ id }: AvailableRegionPageProps) => {
  return <AvailableRegionCell id={id} />
}

export default AvailableRegionPage
