import styled from 'styled-components'

export const Wrapper = styled.main`
  background: linear-gradient(160.44deg, #6d23b6 1.37%, #47126b 58.45%);
  box-shadow: inset 10px 10px 20px #9783e3;
  border-radius: 8px;
  color: #fff;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.div`
  margin-bottom: 2rem;
  svg {
    width: 500px;
    fill: white;
  }
  color: white;
  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`
