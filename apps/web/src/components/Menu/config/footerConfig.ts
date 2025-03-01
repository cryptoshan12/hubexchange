import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('Navigation'),
    items: [
      {
        label: t('Swap'),
        href: '/swap',
        isHighlighted: true,
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
      {
        label: t('Docs'),
        href: '/',
      },
      {
        label: t('About'),
        href: '/about', 
      },
    ],
  },
  {
    label: t('Legal Information'),
    items: [
      {
        label: t('Privacy Policy'),
        href: '/',
      },
      {
        label: t('Terms & Condition'),
        href: '/',
      },
      {
        label: t('Cookie Policy'),
        href: '/',
      },
    ],
  },

]
