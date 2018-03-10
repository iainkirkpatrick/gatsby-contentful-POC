import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'

const Index = ({data}) =>  {
  console.log('testing NODE_ENV, ', process.env.NODE_ENV)

  const places = data.allContentfulPlace.edges;

  return (
    <CardList>
      {places.map(({ node: place })=> {
        return (
          <Card
           key={place.id}
           image={place.bannerImage}
           name={place.name}
           excerpt={place.description}
          />
        )
      })}
    </CardList>
  )
}

export const query = graphql`
  query indexQuery {
    allContentfulPlace(limit: 1000, sort: {fields: [createdAt], order: DESC}) {
      edges {
        node {
          name
          bannerImage {
            sizes {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          description {
            description
          }
        }
      }
    }
  }
`

export default Index
