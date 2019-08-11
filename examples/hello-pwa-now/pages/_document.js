import Document, {Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'
import {Manifest} from 'next-manifest';

console.log('Manifest', Manifest);

export default class extends Document {
  static getInitialProps({renderPage}) {
    return {
      ...renderPage(),
      styles: flush()
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <Manifest href="/static/manifest.json" themeColor="#F0F0F0"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
