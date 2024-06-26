import React from 'react'
import Icon1 from '/Images/three.svg'
import Icon2 from '/Images/four.svg'
import Icon3 from '/Images/five.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Free Tier</ServicesH2>
          <ServicesP>Basic speech analysis with instant feedback on one recording..</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Pro Tier</ServicesH2>
          <ServicesP>Detailed tracking and analysis across multiple recordings.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Enterprise Tier</ServicesH2>
          <ServicesP>Comprehensive tools for therapists managing multiple clients.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services