import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image } from '@pancakeswap-libs/uikit'
import { CommunityTag, CoreTag, NoFeeTag, RiskTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  risk?: number
  depositFee?: number
  farmImage?: string
  tokenSymbol?: string
  farmAPY?: string

}

const Wrapper = styled(Flex)`
  padding:30px 20px;
  background:#0E0E14;
  border-radius:20px;
  svg {
    margin-right: 0.25rem;
  }
`

const AprWrapper = styled.div`
  text-align:left;
  font-size:22px;
  font-weight:600;
  margin-top:20px;
  color:#30BAC6;
`

const TVLWrapper = styled.div`
  color:#fff;
  font-size:12px;
  text-align:left;
  font-weight:600;
  margin-top:20px;
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const HeadingWrapper = styled(Heading)`
  color:#fff;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  risk,
  farmImage,
  tokenSymbol,
  depositFee,
  farmAPY,
}) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="left" mb="12px" flexDirection="column">
        <Flex flexDirection="row" alignItems="flex-end" justifyContent="space-between" >
          <HeadingWrapper mb="4px" >{lpLabel}</HeadingWrapper>
          <Image src={`/images/farms/${farmImage}.png`} alt={tokenSymbol} width={28} height={28} />
        </Flex>
        <AprWrapper>
          {farmAPY}% APR
        </AprWrapper>
        <TVLWrapper>TVL: $1,026,865</TVLWrapper>
    </Wrapper>
  )
}

export default CardHeading
