import React from 'react'
import  Link  from 'next/link'
import { useRouter } from 'next/router'
// import { useTranslation } from 'next-i18next'

const LinkComponent = ({ children, to, skipLocaleHandling, ...rest }) => {
  // const { i18n } = useTranslation()
  const router = useRouter()
  const locale = rest.locale || router.query.locale || /*i18n.language || */''

  let href = to || rest.href || router.asPath
  if (locale && !skipLocaleHandling) {
    href = href
      ? `/${locale}${href}`
      : router.pathname.replace('[locale]', locale)
  }

  return <>
    <Link href={href}>
        <a {...rest}>
          {children}
        </a>
    </Link>
  </>
}

export default LinkComponent
