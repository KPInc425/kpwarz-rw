import type { ComponentMeta } from '@storybook/react'

import KpwarzGamePage from './KpwarzGamePage'

export const generated = () => {
  return <KpwarzGamePage />
}

export default {
  title: 'Pages/KpwarzGamePage',
  component: KpwarzGamePage,
} as ComponentMeta<typeof KpwarzGamePage>
