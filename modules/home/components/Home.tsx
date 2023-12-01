import { lazy } from 'react'

import Breakline from '@/common/components/elements/Breakline'

import CareerList from './CareerList'
import Introduction from './Introduction'

const SkillList = lazy(() => import('./SkillList'))

export default function Home() {
  return (
    <>
      <Introduction />
      <Breakline className="my-6" />
      <CareerList />
      <Breakline className="my-6" />
      <SkillList />
    </>
  )
}
