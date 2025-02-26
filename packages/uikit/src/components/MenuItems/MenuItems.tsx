/* eslint-disable @typescript-eslint/no-explicit-any */
import { createElement, memo,useState } from "react";
import { Flex } from "../Box";
import isTouchDevice from "../../util/isTouchDevice";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import MenuItem from "../MenuItem/MenuItem";
import { MenuItemsProps } from "./types";


const MenuItems: React.FC<React.PropsWithChildren<MenuItemsProps>> = ({
  items = [],
  activeItem,
  activeSubItem,
  ...props
}) => {
  return (
    <Flex {...props}>
      {items.map(({ label, items: menuItems = [], href, icon, disabled, webicon }) => {
         const [isHovered, setIsHovered] = useState(false);
        const statusColor = menuItems?.find((menuItem) => menuItem.status !== undefined)?.status?.color;
        const isActive = activeItem === href;
        const linkProps = isTouchDevice() && menuItems && menuItems.length > 0 ? {} : { href };
        const Icon = icon;
        const WebIcon = webicon;
        return (
          <DropdownMenu
            key={`${label}#${href}`}
            items={menuItems}
            py={1}
            activeItem={activeSubItem}
            isDisabled={disabled}
          >
            <MenuItem
          {...linkProps}
          isActive={isActive}
          statusColor={statusColor}
          isDisabled={disabled}
        >
          <span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
          >
              {/* {label  || (icon && createElement(Icon as any, { color: isActive ? "secondary" : "textSubtle" }))} */}
              {label}
              {webicon && createElement(WebIcon as any, { color: isActive ? "secondary" : "textSubtle", 
                style: {
                  marginLeft: '0px',
                  transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease-in-out'
                } })}
              {/* {label + (webicon ? (webicon && createElement(WebIcon as any, { color: isActive ? "secondary" : "textSubtle" })) : '') || (icon && createElement(Icon as any, { color: isActive ? "secondary" : "textSubtle" }))} */}
              </span>
            </MenuItem>
          </DropdownMenu>
        );
      })}
    </Flex>
  );
};

export default memo(MenuItems);
