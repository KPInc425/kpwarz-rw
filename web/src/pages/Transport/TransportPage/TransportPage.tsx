import TransportCell from 'src/components/Transport/TransportCell'

type TransportPageProps = {
  id: number
}

const TransportPage = ({ id }: TransportPageProps) => {
  return <TransportCell id={id} />
}

export default TransportPage
