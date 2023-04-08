import EditTestStuffCell from 'src/components/TestStuff/EditTestStuffCell'

type TestStuffPageProps = {
  id: number
}

const EditTestStuffPage = ({ id }: TestStuffPageProps) => {
  return <EditTestStuffCell id={id} />
}

export default EditTestStuffPage
