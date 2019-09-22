import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';

const Hero = styled.div`
  height: 80vh;
  min-height: 400px;
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    {/* <Hero> */}
    <Hero
      style={{
        backgroundImage: `url(${
          image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div className="flex flex-col">
        <h1 className="text-white text-5xl text-center">{title}</h1>
        <h3 className="text-white text-2xl text-center">{subheading}</h3>
      </div>
    </Hero>

    <section className="w-11/12 mx-auto my-24">
      <h1 className="title text-4xl text-center">{mainpitch.title}</h1>
      <h3 className="subtitle text-xl text-center font-light">
        {mainpitch.description}
      </h3>
    </section>
    <section></section>

    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="tile">
                  {/* <h1 className="title">{mainpitch.title}</h1> */}
                </div>
                <div className="tile">
                  {/* <h3 className="subtitle">{mainpitch.description}</h3> */}
                </div>
                {/* <div className="w-11/12 mx-auto">
                  <h3 className="text-4xl text-center">{heading}</h3>
                  <p>{description}</p>
                </div> */}
                <Features gridItems={intro.blurbs} />
                <div className="w-11/12 mx-auto flex justify-center	 content-center">
                  <Link
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    to="/products"
                  >
                    See all products
                  </Link>
                </div>
                <div className="column is-12">
                  <h3 className="text-4xl text-center">Latest stories</h3>
                  <BlogRoll />
                  <div className="w-11/12 mx-auto flex justify-center	 content-center">
                    <Link
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      to="/products"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
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
          }
          heading
          description
        }
      }
    }
  }
`;
