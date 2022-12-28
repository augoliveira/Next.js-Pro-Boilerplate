'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import bg from '../../../../public/bg-slide2.jpg'

const Box = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
`

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

function BGImage() {
  const [width, setWidth] = useState<number>()
  const [height, setheight] = useState<number>()

  useEffect(() => {
    const { width, height } = getWindowDimensions()

    setWidth(width)

    setheight(height)
  }, [])

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions()

      setWidth(width)

      setheight(height)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (width && height) {
    return (
      <Box data-overlay-dark="7">
        <Image
          src={bg}
          width={width}
          height={height}
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
          alt={''}
        />
      </Box>
    )
  }

  return null
}

export default BGImage
