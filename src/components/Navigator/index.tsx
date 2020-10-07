import React from 'react'

import GroupLink from '../GroupLink'
import Link from '../CustomLink'

import { Accordion } from './styles'

export interface IPath {
  id: number
  to: string
  label: string
}

export interface ILinkPaths {
  key: number
  label: string
  to?: string
  subpaths?: IPath[]
}

interface INavigatorProps {
  config: ILinkPaths[]
}

const Navigator: React.FC<INavigatorProps> = ({ config }) => {
  return (
    <Accordion allowToggle>
      {config.map(({ key, label, to, subpaths }) => {
        if (subpaths) {
          return <GroupLink key={key} label={label} subpaths={subpaths} />
        }
        return <Link key={key} label={label} href={to} />
      })}
    </Accordion>
  )
}

export default Navigator
