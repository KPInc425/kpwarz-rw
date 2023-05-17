import CurrentMerchantCell from '../CurrentMerchantCell/CurrentMerchantCell'
import PlayerInventoryCell from '../PlayerInventoryCell'

const Trader = ({ id, characterId }) => {
  return (
    <div>
      <CurrentMerchantCell id={id} />
      <PlayerInventoryCell id={characterId} />
    </div>
  )
}

export default Trader
