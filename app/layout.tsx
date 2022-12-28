import StyledComponentsRegistry from '#/../lib/registry'
import GlobalStyles from '#/themes/global'
import RootStyleRegistry from './RootStyleRegistry'
import Head from './head'
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="Pt-BR">
      <Head />
      <body>
        <div>
          <GlobalStyles />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </div>
      </body>
    </html>
  )
}
