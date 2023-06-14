import type { ComponentMeta } from '@storybook/react'

import KPWarzLoadGamePage from './KPWarzLoadGamePage1'

export const generated = () => {
  return <KPWarzLoadGamePage />
}

export default {
  title: 'Pages/KPWarzLoadGamePage',
  component: KPWarzLoadGamePage,
} as ComponentMeta<typeof KPWarzLoadGamePage>
