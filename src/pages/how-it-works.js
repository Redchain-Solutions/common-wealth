import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'

// components
import Hero from '../components/Hero'
import MsgBox from '../components/MsgBox'
import InfoBox from '../components/InfoBox'
import SiteSection from '../components/SiteSection'
import SectionHeader from '../components/SectionHeader'
import CtaCardWrapper from '../components/CtaCard/wrapper'
import Accordion from '../components/Accordion'

// constants
import { HERO_HOW_IT_WORKS } from '../components/Hero/constants'
import {
  IB_MEMBER_PORTAL,
  IB_HYPERLIQUIDITY,
  IB_SHARED_UPSIDE,
  IB_SOFTWARE,
  IB_THE_OPPORTUNITY,
} from '../components/InfoBox/constants'
import { SH_GROWTH_STRATEGIES } from '../components/SectionHeader/constants'
import { CC_HOMEPAGE } from '../components/CtaCard/constants'
import { FAQ } from '../components/Accordion/constants'

const HowItWorks = () => (
  <Layout>
    <SEO title="How it works" />
    <SiteSection modifier="bg-how">
      <Hero {...HERO_HOW_IT_WORKS} />
    </SiteSection>
    <SiteSection modifier="sm">
      <MsgBox>
        Commonwealth tokens ($COMMON) represents pro-rata membership shares in Commonwealth’s underlying basket of
        tokenassets and growth strategies.
      </MsgBox>
    </SiteSection>
    {[IB_MEMBER_PORTAL, IB_HYPERLIQUIDITY, IB_SHARED_UPSIDE].map((props, index) => (
      <SiteSection key={props.title}>
        <InfoBox {...props} modifier={index % 2 && 'reverse'} />
      </SiteSection>
    ))}
    <SiteSection>
      <SectionHeader {...SH_GROWTH_STRATEGIES} />
      <CtaCardWrapper ctaCards={CC_HOMEPAGE} />
    </SiteSection>
    <SiteSection modifier="green">
      <InfoBox {...IB_THE_OPPORTUNITY} />
    </SiteSection>
    <SiteSection>
      <Accordion {...FAQ} />
    </SiteSection>
    <SiteSection>
      <InfoBox {...IB_SOFTWARE} />
    </SiteSection>
  </Layout>
)

export default HowItWorks
