import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge'
}

const colors = {
  dark: '#353D42',
  black: '#000000',
  white: '#FFFFFF',
  text: '#FFE44C'
}

const ogImage = () => {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontFamily: '"montserrat", sans-serif',
          background: 'white',
          width: '100%',
          height: '100%',
          fontWeight: 'bold',
          color: colors.text,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.dark,
          backgroundImage: `linear-gradient(45deg, ${colors.black}, ${colors.dark})`
        }}
      >
        <div style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              boxShadow: `0 0 0 16px 32px ${colors.dark}`,
              borderRadius: '40px',
              marginTop: '-8px'
            }}
          >
            <svg
              width="231"
              height="229"
              viewBox="0 0 231 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 125.5C0 182.57 46.4299 229 103.5 229C160.57 229 207 182.57 207 125.5H163.564C163.564 158.618 136.618 185.518 103.546 185.518C70.3818 185.472 43.528 158.618 43.528 125.5C43.528 92.3818 70.474 65.482 103.546 65.482V22C46.4299 22 0 68.4299 0 125.5Z"
                fill="url(#paint0_linear_0_1)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M120 0V128L231 64L120 0Z"
                fill="url(#paint1_linear_0_1)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_1"
                  x1="41.7822"
                  y1="171.231"
                  x2="149.003"
                  y2="91.7473"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#361D6C" />
                  <stop offset="1" stopColor="#3B368C" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_1"
                  x1="184.903"
                  y1="25.9314"
                  x2="103.089"
                  y2="65.3964"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFE44C" />
                  <stop offset="1" stopColor="#FFA615" />
                </linearGradient>
              </defs>
            </svg>

            {'UP.EXPERT'}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600
    }
  )
}

export default ogImage
