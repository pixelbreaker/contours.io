/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const axios = require('axios')
const crypto = require('crypto')

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  // fetch raw data from the randomuser api
  const fetchEvents = () =>
    axios.get(`${process.env.GATSBY_API_URL}/events?limit=10`)
  // await for results
  const res = await fetchEvents()

  // map into these results and create nodes
  res.data.map(eventItem => {
    // Create your node object
    const eventNode = {
      // Required fields
      // id: eventItem._id,
      parent: `__SOURCE__`,
      internal: {
        type: `Events`,
        // contentDigest will be added just after
      },
      // children: [],

      // Other fields that you want to query with graphQl
      // title: eventItem.title,
      // startsAt: eventItem.startsAt,
      // slug: eventItem.slug,
      // startLocation: eventItem.startLocation,
      ...eventItem,
      // etc...
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(eventNode))
      .digest(`hex`)
    // add it to eventNode
    eventNode.internal.contentDigest = contentDigest

    // Create node with the gatsby createNode() API
    createNode(eventNode)
  })

  return
}
