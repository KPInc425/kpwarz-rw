const sortById = (a, b) => {
  console.log('a', a)
  console.log('b', b)
  return a.id - b.id
}

const sortByName = (a, b) => {
  console.log('a', a)
  console.log('b', b)
  return a.name.localeCompare(b.name)
}

export { sortById, sortByName }
