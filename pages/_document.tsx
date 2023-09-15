import Document, { Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document'
export default class CustomDocument extends Document<DocumentInitialProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}