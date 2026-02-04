import './globals.css'

export const metadata = {
  title: '방화벽 로그 모니터링',
  description: '방화벽 로그 모니터링 웹 어드민',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
