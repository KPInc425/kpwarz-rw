const temperamentToString = (input) => {
  if (input < 3) {
    return 'Level-headed'
  } else if (input < 5) {
    return 'Keeps it cool'
  } else if (input < 7) {
    return 'Moody as hell'
  } else {
    return 'Unpredictable'
  }
}

export default temperamentToString
