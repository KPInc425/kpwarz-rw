import TestStuffCell from 'src/components/TestStuff/TestStuffCell'

type TestStuffPageProps = {
  id: number
}

const TestStuffPage = ({ id }: TestStuffPageProps) => {
  return <TestStuffCell id={id} />
}

export default TestStuffPage
