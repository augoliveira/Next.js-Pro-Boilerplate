'use client'
import Image from 'next/image'
import { DownloadSimple, RocketLaunch } from 'phosphor-react'
import { Container, Title } from '../../../themes/styles'
import { ButtonPrimary } from '../../../themes/styles'
import { AboutContainer } from './styles'
import Sobre from '../../../../public/business.png'

export function About() {
  return (
    <Container id="about">
      <Title>
        Nossas especialidades
        <span>
          <RocketLaunch /> Conheça
        </span>
      </Title>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            className="AboutImg"
            src={Sobre}
            alt={Title}
            width={700}
            height={700}
            style={{
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <p>
              Sou um desenvolvedor Front-End que vive em Mogi das Cruzes-SP, sou
              formado em Análise e desenvolvimento de sistemas.
            </p>
            <p>
              Meu interesse e primeiro contato com desenvolvimento web começou
              em 2022, com a criação de um site feito em Html, Css e JavaScript.
            </p>
            <p>
              Atualmente estou estudando e desenvolvendo projetos web, de modo a
              ampliar meus conhecimentos e assim aprimorar ainda mais as
              habilidades que possuo.
            </p>
          </div>
          <a href="/pdf/Evander-Curriculo.pdf" download>
            <ButtonPrimary>
              <b>Download CV</b> <DownloadSimple weight="bold" />
            </ButtonPrimary>
          </a>
        </div>
      </AboutContainer>
    </Container>
  )
}
