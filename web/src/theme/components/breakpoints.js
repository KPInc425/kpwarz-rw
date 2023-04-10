// @src/theme/theme.js

import { extendTheme } from '@chakra-ui/react'

import { badgeStyles } from './components/badge'
import { buttonStyles } from './components/button'
import { breakpoints } from './foundations/breakpoints'
import { globalStyles } from './styles'
export default extendTheme(
  { breakpoints }, // Breakpoints
  globalStyles, // Global styles
  buttonStyles, // Button styles
  badgeStyles // Badge styles
)
