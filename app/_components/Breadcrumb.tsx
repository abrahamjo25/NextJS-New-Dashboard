import React from 'react'
import { BreadCrumbs } from '../_lib/definitions'
import clsx from 'clsx'
import { lusitana } from './fonts'
import Link from 'next/link'
const Breadcrumb = ({breadcrumbs}: {breadcrumbs: BreadCrumbs[]}) => {
  return (
    <nav aria-label="Breadcrumb" className="hidden my-6 md:block ml-2">
    <ol className={clsx(lusitana.className, 'flex text-sm font-semibold')}>
      {breadcrumbs.map((items, index) => (
        <li
          key={items.to}
          aria-current={items.active}
          className={clsx(
            items.active ? 'text-primary' : 'text-gray-900',
          )}
        >
          <Link href={items.to}>{items.label}</Link>
          {index < breadcrumbs?.length - 1 ? (
            <span className="mx-2 inline-block">/</span>
          ) : null}
        </li>
      ))}
    </ol>
  </nav>
  )
}

export default Breadcrumb
