import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Cards from '../components/Cards';

export const EventsPageTemplate = ({ image, title, intro }) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #ff9800, -0.5rem 0 0 #ff9800',
          backgroundColor: '#ff9800',
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>
    <Cards gridItems={intro.blurbs} />
  </div>
);

EventsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const EventsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log('frontmatter', frontmatter);
  return (
    <Layout links={frontmatter.links}>
      <EventsPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

EventsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export const pageQuery = graphql`
  query EventsPage {
    markdownRemark(frontmatter: { templateKey: { eq: "event-page" } }) {
      frontmatter {
        title
        links {
          facebook
          linkedin
          email
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
            mobile: fixed(
              width: 768
              height: 240
              quality: 80
              cropFocus: CENTER
            ) {
              ...GatsbyImageSharpFixed_withWebp
            }
            desktop: fixed(
              width: 1920
              height: 280
              quality: 95
              cropFocus: SOUTH
            ) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            title
          }
        }
      }
    }
  }
`;

export default EventsPage;
