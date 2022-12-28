'use client'
import React from 'react'
import Typewriter from 'typewriter-effect'

import { ButtonPrimary, Container } from '../../../themes/styles'
import { Content, ImgHome, HomeText } from './styles'
import styled from 'styled-components'

const Wrapper = styled.div`
  z-index: -1;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: transparent;
  justify-content: center;
  align-items: center;
`

export function HomeHero() {
  return (
    <Container>
      <Content>
        <HomeText>
          <h1>
            AGÊNCIA <code>EXPERT</code>
          </h1>

          <h2
            className="cta-5-title"
            style={{ fontFamily: `Montserrat, sans-serif;` }}
          >
            <Typewriter
              options={{
                wrapperClassName: 'color-font fw-600',
                strings: [
                  'Marca',
                  'Campanha',
                  'Impressos',
                  'Sites e aplicativos'
                ],
                autoStart: true,
                loop: true
              }}
              onInit={(typewriter) => {
                typewriter
              }}
            />
          </h2>

          <span>
            SOLUÇÕES COMPLETAS PARA CONQUISTAR A PREFERÊNCIA DO SEU CLIENTE
          </span>
        </HomeText>
      </Content>
    </Container>
  )
}
