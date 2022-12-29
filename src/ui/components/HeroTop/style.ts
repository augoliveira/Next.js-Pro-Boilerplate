import styled from 'styled-components'

export const Wrapper = styled.div`
  .headline {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 100;
    font-size: 10vw;
  }

  .inset {
    position: absolute;
    inset: 0;
  }
  .white {
    color: white;
  }
  .gray {
    color: #446;
  }
  .full-width {
    width: 100% !important;
  }
  .full {
    height: 100vh;
    z-index: -999;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gradient {
    background: linear-gradient(rgba(14, 62, 151, 0.5) 50%, black);
  }
`
