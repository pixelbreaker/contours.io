import React, { FC, useEffect, useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import { MEDIA_MEDIUM_UP, MEDIA_LARGE_UP } from '../constants'

const IndexPage: FC = () => (
  <Layout>
    <SEO title="Home" />
    Main app {process.env.GATSBY_API_URL}
  </Layout>
)

export default IndexPage
