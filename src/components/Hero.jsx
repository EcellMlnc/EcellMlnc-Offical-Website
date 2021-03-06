import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

const Hero = (props) => {
  const { description, image, title } = props;

  return (
    <div className="container mt-12">
      <div className="flex relative rounded-md overflow-hidden bg-blue-400">
        {!!image && !!image.childImageSharp ? (
          <Img
            alt={title}
            className="grayscale-1 blend-multiply"
            fadeIn={false}
            fixed={[
              { ...image.childImageSharp.desktop, media: `(min-width: 768px)` },
              { ...image.childImageSharp.mobile, media: `(max-width: 767px)` },
            ]}
          />
        ) : null}

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(49, 130, 206, 0) 24%, rgba(49, 130, 206, .5) 100%)',
          }}
        ></div>

        <div className="absolute bottom-0 inset-x-0 p-5 lg:p-6 text-white">
          <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
            {title}
          </h1>
          <h3 className="text-lg font-medium md:w-2/3">{description}</h3>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      desktop: PropTypes.object.isRequired,
      mobile: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default Hero;
