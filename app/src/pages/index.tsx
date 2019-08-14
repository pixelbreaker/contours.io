import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import { MEDIA_MEDIUM_UP, MEDIA_LARGE_UP } from '../constants'

const Logo = styled.img`
  height: 40vw;
  width: 40vw;

  @media (${MEDIA_MEDIUM_UP}) {
    width: 20vw;
    height: 20vw;
  }
`

const Quote = styled.div`
  font-size: 16px;
  margin: 5vw 0 0;
  max-width: 70vw;

  @media (${MEDIA_MEDIUM_UP}) {
    max-width: 40vw;
  }

  @media (${MEDIA_LARGE_UP}) {
    max-width: 25vw;
  }
`

const QuoteBody = styled.div`
  font-family: Roboto, sans-serif;
  font-style: italic;
`

const QuoteName = styled.div`
  font-family: Roboto, sans-serif;
  margin: 10px 0 0;
  text-align: right;
  width: 100%;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Logo src="/images/logo-splash.svg" />
    <Quote>
      <QuoteBody>
        “It is by riding a bicycle that you learn the contours of a country
        best, since you have to sweat up the hills and coast down them.”
      </QuoteBody>
      <QuoteName>— Ernest Hemingway</QuoteName>
    </Quote>
  </Layout>
)

export default IndexPage
