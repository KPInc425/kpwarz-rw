import type { ComponentMeta } from '@storybook/react'

import KPWarzLoadGamePage from './KPWarzLoadGamePage'

export const generated = () => {
  return <KPWarzLoadGamePage />
}

export default {
  title: 'Pages/KPWarzLoadGamePage',
  component: KPWarzLoadGamePage,
} as ComponentMeta<typeof KPWarzLoadGamePage>
