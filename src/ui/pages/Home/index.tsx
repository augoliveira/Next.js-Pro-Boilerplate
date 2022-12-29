'use client'
import { Footer } from '#/ui/components/Footer'
import { Links } from '#/ui/components/Links'
import { ScrollTop } from '#/ui/components/ScrollTop'
import Paralax from '#/ui/components/Paralax'
import * as S from './styles'
import { Contact } from '#/ui/components/Contact'
import { Section } from '#/themes/styles'

export default function Home() {
  return (
    <>
      <Paralax />
      <S.Wrapper>
        <Links />
        <ScrollTop />

        <Section>
          <Contact />
        </Section>

        <Footer />
      </S.Wrapper>
    </>
  )
}
