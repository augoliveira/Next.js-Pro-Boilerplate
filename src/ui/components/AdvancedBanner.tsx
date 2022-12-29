'use client'
import { ParallaxBanner } from 'react-scroll-parallax'
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types'
import Image from 'next/image'
import Bg from '../../../public/bg-slide-1.jpg'
import BgImg from '../../../public/WebBanne.png'
import { HomeHero } from './Home'
import styled from 'styled-components'

const Box = styled.div`
  width: 100vw;
  height: 100vh;
`

export const AdvancedBannerTop = () => {
  const background: BannerLayer = {
    children: (
      <Box>
        <Image
          src={Bg}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover'
          }}
          alt={''}
        />
      </Box>
    ),
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true
  }

  const headline: BannerLayer = {
    translateY: [0, 50],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center">
        <HomeHero />
      </div>
    )
  }

  const foreground: BannerLayer = {
    children: (
      <Image
        src={BgImg}
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
        quality={100}
        alt={''}
      />
    ),
    translateY: [0, 15],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true
  }

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />
  }

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="full"
    />
  )
}
