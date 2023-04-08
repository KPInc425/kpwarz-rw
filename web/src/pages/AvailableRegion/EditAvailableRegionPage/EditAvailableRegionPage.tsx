import EditAvailableRegionCell from 'src/components/AvailableRegion/EditAvailableRegionCell'

type AvailableRegionPageProps = {
  id: number
}

const EditAvailableRegionPage = ({ id }: AvailableRegionPageProps) => {
  return <EditAvailableRegionCell id={id} />
}

export default EditAvailableRegionPage
