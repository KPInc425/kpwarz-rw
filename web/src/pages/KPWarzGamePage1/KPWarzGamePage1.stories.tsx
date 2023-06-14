import type { ComponentMeta } from '@storybook/react'

import KPWarzGamePage from './KPWarzGamePage1'

export const generated = () => {
  return <KPWarzGamePage />
}

export default {
  title: 'Pages/KPWarzGamePage',
  component: KPWarzGamePage,
} as ComponentMeta<typeof KPWarzGamePage>
