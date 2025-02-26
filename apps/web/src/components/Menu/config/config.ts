import {
  MenuItemsType,
  SwapIcon,
  SwapFillIcon,
  DropdownMenuItems,
  // SwapVertIcon,
  // LockIcon,
  EarnIcon,
  EarnFillIcon,
  ChartIcon,
  // ArrowDownIcon,
  ArrowDropDownIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { SUPPORT_ONLY_BSC } from 'config/constants/supportChains'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
// ) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
) => ConfigMenuItemsType[] = (t, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      showItemsOnMobile: false,
      webicon: ArrowDropDownIcon,
      items: [
        {
          label: t('Swap'),
          href: '/swap',
        },
        {
          label: t('Buy Crypto'),
          href: '/limit-orders',
          disabled: true,
          supportChainIds: SUPPORT_ONLY_BSC,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Explore'),
      icon: ChartIcon,
      fillIcon: ChartIcon,
      disabled: true,
      href: '/explore',
      showItemsOnMobile: false,
      items: [
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Pool'),
      href: '/pools',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      showItemsOnMobile: false,
      items: [

      ],
    },
    {
      label: t('Stake'),
      href: '/farms',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      showItemsOnMobile: false,
      items: [

      ],
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
