import { gql } from 'graphql-request';

export const homePageQuery = gql`
  query HomePage {
    homepage {
      hero {
        title
        navlinks
        profile {
          formats
          name
          width
          height
          url
        }
      }
      about {
        work
        blogs
        watch
        email
      }
      projects {
        title
        url
        bg {
          url
          formats
        }
        description
        tools
        image {
          name
          width
          height
          url
        }
      }
      contact {
        email
        insta
        youtube
        twitter
        linkedin
        title
      }
    }
    posts(sort: "created_at:desc", limit: 3) {
      title
      updated_at
      topics
      slug
      description
    }
  }
`;
