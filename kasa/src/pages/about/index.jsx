import styled from 'styled-components'
import AboutImg from '../../assets/about_img.png'
import AboutToggle from '../../components/aboutToggle'


const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 6rem 0 6rem;
`

const AboutImage = styled.div`
  width: 100%;
  height: 220px;
  background-image: url(${AboutImg});
  background-size: cover;
  background-position: center;
  border-radius: 25px;
`

const Banner = () => {

  return (
    <Section>
      <AboutImage/>
      <AboutToggle/>
    </Section>
  )
}

export default Banner
