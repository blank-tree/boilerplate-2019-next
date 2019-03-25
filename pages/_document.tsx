/**
 *  ./pages/_document.tsx
 *  Is rendered on the server side
 *  Is used to change the initial server side rendered document markup
 *  https://nextjs.org/docs#custom-document
 */

import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="apply_permanent_bodyclass">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}