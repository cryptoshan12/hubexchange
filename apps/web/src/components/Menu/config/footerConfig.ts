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
        href: '/docs',
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
        href: '/privacy',
      },
      {
        label: t('Terms & Condition'),
        href: '/terms',
      },
      {
        label: t('Cookie Policy'),
        href: '/cookies',
      },
    ],
  },

]
