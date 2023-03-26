import React, { useState } from 'react'
import styled from 'styled-components'
import DownArrowImg from '../../assets/down_arrow.svg'
import UpArrowImg from '../../assets/up_arrow.svg'
import colors from '../../utils/style/colors'
import aboutData from '../../data/aboutData'

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: ${colors.primary};
  background: ${colors.secondary};
  padding: 10px;
  margin-top: 30px;
  border-radius: 5px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 80%;
  }
`

const CollapseContentWrapper = styled.div`
  position: relative;
  top: -10px;
  width: 100%;
  z-index: -1;
  background: ${colors.dark};
  border-radius: 5px;
  padding: 10px;

  @media (min-width: 768px) {
    width: 80%;
  }
`

const TextContent = styled.p`
  font-weight: 400;
  font-size: 24px;
  color: ${colors.secondary};
`

const ArrowIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  object-fit: cover;
`

const AboutCollapse = () => {
  const [activeIndexes, setActiveIndexes] = useState([])

  const collapseContent = (index) => {
    setActiveIndexes((activeIndexes) => {
      const indexIsOpen = activeIndexes.includes(index)
      return indexIsOpen
        ? activeIndexes.filter((i) => i !== index)
        : [...activeIndexes, index]
    })
  }

  const content = (title) => {
    switch (title) {
      case 'Fiable':
        return aboutData.fiable
      case 'Respect':
        return aboutData.respect
      case 'Service':
        return aboutData.service
      case 'Responsabilité':
        return aboutData.responsabilité
      default:
        return ''
    }
  }

  const CollapseSection = ({ title, index }) => (
    <>
      <TextWrapper onClick={() => collapseContent(index)}>
        {title}
        <ArrowIcon
          src={activeIndexes.includes(index) ? UpArrowImg : DownArrowImg}
          alt={
            activeIndexes.includes(index)
              ? 'Icône flèche du haut'
              : 'Icône flèche du bas'
          }
        />
      </TextWrapper>
      {activeIndexes.includes(index) && (
        <CollapseContentWrapper>
          <TextContent>{content(title)}</TextContent>
        </CollapseContentWrapper>
      )}
    </>
  )

  return (
    <Section>
      <CollapseSection title="Fiable" index={0} />
      <CollapseSection title="Respect" index={1} />
      <CollapseSection title="Service" index={2} />
      <CollapseSection title="Responsabilité" index={3} />
    </Section>
  )
}

export default AboutCollapse
