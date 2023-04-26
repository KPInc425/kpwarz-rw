import type { ComponentMeta } from '@storybook/react'

import KpWarzLoadGamePage from './KpWarzLoadGamePage'

export const generated = () => {
  return <KpWarzLoadGamePage />
}

export default {
  title: 'Pages/KpWarzLoadGamePage',
  component: KpWarzLoadGamePage,
} as ComponentMeta<typeof KpWarzLoadGamePage>
