const GameMenu = ({ updateCurrentView }) => {
  return (
    <div className="col-span-1 row-[span_7_/_span_7] row-start-3 rounded-md border-2 border-gray-300">
      <h2 className="text-center text-2xl font-bold">Menu</h2>
      <Button onClick={updateCurrentView} viewIndex={0} label={'Player Info'} />
      <Button onClick={updateCurrentView} viewIndex={1} label={'Inventory'} />
      <Button onClick={updateCurrentView} viewIndex={2} label={'Actions'} />
      <Button onClick={updateCurrentView} viewIndex={3} label={'Trader'} />
      <Button onClick={updateCurrentView} viewIndex={4} label={'Travel'} />
      <Button onClick={updateCurrentView} viewIndex={5} label={'Stores'} />
      <Button onClick={updateCurrentView} viewIndex={6} label={'Finances'} />
      {/* Make this conditional on if the player has the Dark Web perk */}
      <Button onClick={updateCurrentView} viewIndex={7} label={'Dark Web'} />
      <Button
        onClick={updateCurrentView}
        viewIndex={8}
        label={'Black Market'}
      />
    </div>
  )
}

export default GameMenu

const Button = ({ label, onClick, viewIndex }) => {
  const handleClick = () => {
    onClick(viewIndex)
  }
  return (
    <button
      onClick={handleClick}
      className="mx-auto mt-2 block w-full rounded-lg bg-blue-700 p-2 text-center hover:bg-blue-400 dark:bg-green-700 dark:hover:bg-green-500 dark:hover:text-slate-700 dark:hover:shadow-lg dark:hover:shadow-green-700"
    >
      {label}
    </button>
  )
}
