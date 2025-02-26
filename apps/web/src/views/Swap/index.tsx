import { useTranslation } from '@pancakeswap/localization'
// import { Currency } from '@pancakeswap/sdk'
import { /* BottomDrawer, */ Flex, Modal, ModalV2, useMatchBreakpoints } from '@pancakeswap/uikit'
import { AppBody } from 'components/App'
import { useContext } from 'react'

import { useSwapHotTokenDisplay } from 'hooks/useSwapHotTokenDisplay'
// import { useCurrency } from '../../hooks/Tokens'
// import { Field } from '../../state/swap/actions'
// import { useSingleTokenSwapInfo, useSwapState } from '../../state/swap/hooks'
import Page from '../Page'
// import PriceChartContainer from './components/Chart/PriceChartContainer'
import HotTokenList from './components/HotTokenList'
import { SmartSwapForm } from './SmartSwap'
import { StyledInputCurrencyWrapper, StyledSwapContainer } from './styles'
import { SwapFeaturesContext } from './SwapFeaturesContext'

export default function Swap() {
  const { isMobile } = useMatchBreakpoints()
  const { isChartExpanded, /* isChartDisplayed, setIsChartDisplayed, setIsChartExpanded, */ isChartSupported } =
    useContext(SwapFeaturesContext)
  const [isSwapHotTokenDisplay, setIsSwapHotTokenDisplay] = useSwapHotTokenDisplay()
  const { t } = useTranslation()

  // swap state & price data
  // const {
  //   [Field.INPUT]: { currencyId: inputCurrencyId },
  //   [Field.OUTPUT]: { currencyId: outputCurrencyId },
  // } = useSwapState()
  // const inputCurrency = useCurrency(inputCurrencyId)
  // const outputCurrency = useCurrency(outputCurrencyId)

  // const currencies: { [field in Field]?: Currency } = {
  //   [Field.INPUT]: inputCurrency ?? undefined,
  //   [Field.OUTPUT]: outputCurrency ?? undefined,
  // }

  // const singleTokenPrice = useSingleTokenSwapInfo(inputCurrencyId, inputCurrency, outputCurrencyId, outputCurrency)

  return (
    <Page removePadding={isChartExpanded} hideFooterOnDesktop={isChartExpanded}>
      <div
  style={{
    marginTop: "20px",
    width: "450px", // Adjust width to ensure word wrapping
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "8px", // Optional for rounded corners
    ...(window.innerWidth <= 768 ? { width: "300px" } : {}),
  }}
>
  <h1
    style={{
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      fontSize: "30px", // Reduced size to fit in box
      lineHeight: "35px",
      letterSpacing: "0px",
      textAlign: "center",
      color: "#0B0B0B",
    }}
  >
    Trade Your Favorite Tokens <br /> Seamlessly.
  </h1>

  <p
    style={{
      fontFamily: "Inter, sans-serif",
      fontSize: "14px",
      lineHeight: "35px",
      fontWeight: "400",
      color: "#3B82F6",
    }}
  >
    A Decentralized Exchange for All Major Tokens in One Place.
  </p>
</div>

      <Flex width={['436px', '100%']} height="100%" justifyContent="center" position="relative" alignItems="flex-start">
        {/* {!isMobile && isChartSupported && (
          <PriceChartContainer
            inputCurrencyId={inputCurrencyId}
            inputCurrency={currencies[Field.INPUT]}
            outputCurrencyId={outputCurrencyId}
            outputCurrency={currencies[Field.OUTPUT]}
            isChartExpanded={isChartExpanded}
            setIsChartExpanded={setIsChartExpanded}
            isChartDisplayed={isChartDisplayed}
            currentSwapPrice={singleTokenPrice}
          />
        )}
        {isChartSupported && (
          <BottomDrawer
            content={
              <PriceChartContainer
                inputCurrencyId={inputCurrencyId}
                inputCurrency={currencies[Field.INPUT]}
                outputCurrencyId={outputCurrencyId}
                outputCurrency={currencies[Field.OUTPUT]}
                isChartExpanded={isChartExpanded}
                setIsChartExpanded={setIsChartExpanded}
                isChartDisplayed={isChartDisplayed}
                currentSwapPrice={singleTokenPrice}
                isMobile
              />
            }
            isOpen={isChartDisplayed}
            setIsOpen={setIsChartDisplayed}
          />
        )} */}
        {!isMobile && isSwapHotTokenDisplay && isChartSupported && <HotTokenList />}

        <ModalV2
          isOpen={isMobile && isSwapHotTokenDisplay && isChartSupported}
          onDismiss={() => setIsSwapHotTokenDisplay(false)}
        >
          <Modal
            style={{ padding: 0 }}
            title={t('Top Token')}
            onDismiss={() => setIsSwapHotTokenDisplay(false)}
            bodyPadding="0px"
          >
            <HotTokenList />
          </Modal>
        </ModalV2>

        

        <Flex flexDirection="column">

          <StyledSwapContainer $isChartExpanded={isChartExpanded}>
            <StyledInputCurrencyWrapper mt={isChartExpanded ? '24px' : '0'}>
              <AppBody>
                <SmartSwapForm />
              </AppBody>
            </StyledInputCurrencyWrapper>
          </StyledSwapContainer>
        </Flex>
      </Flex>
    </Page>
  )
}
