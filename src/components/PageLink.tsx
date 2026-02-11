import React, { HTMLProps } from 'react';
import cn from 'classnames';
import './PageLink.css'

type Props = HTMLProps<HTMLAnchorElement> & { active?: boolean }

export default function PageLink({ className, children, active, disabled, ...props }: Props) {
    const customclassName = cn('page-link', className, { active, disabled });

    if (disabled) {
        return (
            <span className={customclassName}>{children}</span>
        )
    }
  return (
    <a {...props} className={customclassName} aria-current={active ? "page" : undefined}>
        {children}
    </a>
  )
}
