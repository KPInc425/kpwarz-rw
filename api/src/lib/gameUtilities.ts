export const checkTravelTime = (game, character) => {
  const modeOfTransport = character.transportation
  console.log(character)
  // const vehicleType = character.transport[0]
  const timeOfDay = game.timeOfDay

  switch (modeOfTransport) {
    case 'Bootz':
      return { nextDay: true, timeOfDay: 'Morning' }
    case 'Bus':
      if (timeOfDay === 'Morning') {
        return { nextDay: false, timeOfDay: 'Evening' }
      } else {
        return { nextDay: true, timeOfDay: 'Morning' }
      }
    case 'Bike':
      if (timeOfDay === 'Morning') {
        return { nextDay: false, timeOfDay: 'Afternoon' }
      } else if (timeOfDay === 'Afternoon') {
        return { nextDay: false, timeOfDay: 'Evening' }
      } else {
        return { nextDay: true, timeOfDay: 'Morning' }
      }
    case 'Ride_Share':
      switch (timeOfDay) {
        case 'Morning':
          return { nextDay: false, timeOfDay: 'Noon' }
        case 'Noon':
          return { nextDay: false, timeOfDay: 'Afternoon' }
        case 'Afternoon':
          return { nextDay: false, timeOfDay: 'Evening' }
        case 'Evening':
          return { nextDay: true, timeOfDay: 'Morning' }
      }
      break
    case 'Whip':
      switch (timeOfDay) {
        case 'Morning':
          return { nextDay: false, timeOfDay: 'Midmorning' }
        case 'Midmorning':
          return { nextDay: false, timeOfDay: 'Noon' }
        case 'Noon':
          return { nextDay: false, timeOfDay: 'Afternoon' }
        case 'Afternoon':
          return { nextDay: false, timeOfDay: 'Evening' }
        case 'Evening':
          return { nextDay: true, timeOfDay: 'Morning' }
      }
      break
    case 'Car_Service':
      switch (timeOfDay) {
        case 'Morning':
          return { nextDay: false, timeOfDay: 'Midmorning' }
        case 'Midmorning':
          return { nextDay: false, timeOfDay: 'Noon' }
        case 'Noon':
          return { nextDay: false, timeOfDay: 'Afternoon' }
        case 'Afternoon':
          return { nextDay: false, timeOfDay: 'Evening' }
        case 'Evening':
          return { nextDay: false, timeOfDay: 'Midnight' }
        case 'Midnight':
          return { nextDay: true, timeOfDay: 'Morning' }
      }
  }
}
