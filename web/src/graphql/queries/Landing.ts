import { gql } from 'graphql-request';

export const landingPageQuery = gql`
  query LandingPageQuery {
    homepage {
      seo {
        metaTitle
        metaDescription
      }
      hero {
        title
        navlinks
        profile {
          name
          alternativeText
          caption
          width
          height
          formats
          url
        }
      }
      about {
        work
        blogs
        watch
        email
      }
      Contacts {
        title
        email
        insta
        twitter
        youtube
      }
    }
    articles(sort: "created_at:desc", limit: 3) {
      updated_at
      created_at
      title
      description
      content
      tools
      slug
      playlist {
        name
      }
    }
    projects {
      title
      description
      tools
      url
      image {
        name
        alternativeText
        caption
        width
        height
        formats
        size
        url
      }
    }
  }
`;
