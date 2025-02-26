import React from "react";
import { FlexProps } from "../../Box";
import Flex from "../../Box/Flex";
import Dropdown from "../../Dropdown/Dropdown";
import Link from "../../Link/Link";
import { socials } from "../config";
import { border, borderRadius } from "styled-system";

const SocialLinks: React.FC<React.PropsWithChildren<FlexProps>> = ({ ...props }) => (
  <Flex {...props} data-theme="dark">
    {socials.map((social, index) => {
      const iconProps = {
        width: "23px",
        color: "#3B82F6",
        style: { cursor: "pointer",border: "1px solid #E5E7EB",borderRadius: "100%", padding: "5px" },
      };
      const Icon = social.icon;
      const mr = index < socials.length - 1 ? "24px" : 0;
      return (
        <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
          <Icon {...iconProps} />
        </Link>
      );
    })}
  </Flex>
);

export default React.memo(SocialLinks, () => true);
