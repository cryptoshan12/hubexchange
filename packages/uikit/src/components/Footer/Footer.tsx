import { vars } from "@pancakeswap/ui/css/vars.css";
// import { useIsMounted , useTheme  } from "@pancakeswap/hooks";
import React from "react";
import { Box, Flex } from "../Box";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledSocialLinks,
  StyledText,
  StyledToolsContainer,
} from "./styles";

// import { Button } from "../Button";
// import CakePrice from "../CakePrice/CakePrice";
// import LangSelector from "../LangSelector/LangSelector";
import { /* ArrowForwardIcon, */ LogoWithTextIcon } from "../Svg";
// import { ThemeSwitcher } from "../ThemeSwitcher";
import { FooterProps } from "./types";
// import { SkeletonV2 } from "../Skeleton";
import { LabelText } from "../../widgets/Menu/components/UserMenu";
// import { alignContent, bottom, right, textAlign, width } from "styled-system";
// import { baseColors } from "@pancakeswap/ui/tokens/colors";

const MenuItem: React.FC<React.PropsWithChildren<FooterProps>> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  // const isMounted = useIsMounted();
  return (
    <StyledFooter
      data-theme="dark"
      p={["40px 16px", null, "56px 40px 30px 40px"]}
      position="relative"
      {...props}
      justifyContent="center"
    >
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <StyledIconMobileContainer display={["block", null, "none"]}>
          <LogoWithTextIcon width="130px" />
        </StyledIconMobileContainer>
        <Flex
          order={[2, null, 1]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          alignItems="flex-start"
          mb={["42px", null, "36px"]}
        >
          <Box display={["none", null, "block"]}>
            <LogoWithTextIcon width="160px"  />
            <Box style={{width: "255px",fontSize: "15px",padding: "10px 0px",color:vars.colors.textSubtle}}>
            At Hub.exchange, we are committed to revolutionizing the way people trade and interact with cryptocurrencies. Our platform offers a seamless, secure, and user-friendly experience, catering to both beginners and seasoned traders.
            </Box>
          </Box>
          {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>
              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem key={label}>
                  {href ? (
                    <Link
                      data-theme="dark"
                      href={href}
                      target={href.startsWith("/") ? "_self" : "_blank"}
                      rel="noreferrer noopener"
                      color={isHighlighted ? vars.colors.warning : "text"}
                      bold={false}
                    >
                      {label}
                    </Link>
                  ) : (
                    <StyledText>{label}</StyledText>
                  )}
                </StyledListItem>
              ))}
            </StyledList>
          ))}
          <Box display={["none", null, "block"]}>
            <LabelText style={{color:vars.colors.secondary,margin:"0"}}>SOCIAL LINKS</LabelText>
            <StyledSocialLinks order={[2]} pt={["42px", null, "32px"]} mb={["0", null, "32px"]} />
          </Box>
          
        </Flex>
        
        {/* <StyledToolsContainer
          data-theme="dark"
          order={[1, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >
          <Flex order={[2, null, 1]} alignItems="center">
            <SkeletonV2 variant="round" width="56px" height="32px" isDataReady={isMounted}>
              <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
            </SkeletonV2>
            <LangSelector
              currentLang={currentLang}
              langs={langs}
              setLang={setLang}
              color="textSubtle"
              dropdownPosition="top-right"
            />
          </Flex>
          <Flex order={[1, null, 2]} mb={["24px", null, "0"]} justifyContent="space-between" alignItems="center">
            <Box mr="20px">
              <CakePrice cakePriceUsd={cakePriceUsd} color="textSubtle" />
            </Box>
            <Button
              data-theme={isDark ? "dark" : "light"}
              as="a"
              href="/swap?outputCurrency=0x7e7E8522aB7C797df75399708AB2983f336AD2c2&chainId=56"
              target="_blank"
              scale="sm"
              endIcon={<ArrowForwardIcon color="backgroundAlt" />}
            >
              {buyCakeLabel}
            </Button>
          </Flex>
        </StyledToolsContainer> */}
        <StyledToolsContainer flexDirection={["column", null, "row"]} order={[1, null, 3]}
           style={{background: "#3B82F6",justifyContent: "center", color:"white", position:"absolute", bottom:"0", left:"0",right:"0",width:"100%"}}>
            <Flex order={[ 1]} alignItems="center" style={{textAlign:"center",padding:"15px"}}>© 2025 . All rights reserved.</Flex>
            </StyledToolsContainer>
      </Flex>
      
    </StyledFooter>
    
  );
};

export default MenuItem;
