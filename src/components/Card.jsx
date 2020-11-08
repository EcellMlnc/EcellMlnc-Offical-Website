import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

export const Card = (props) => {
  const { title, image, text, link } = props;

  return (
    <div className="bg-white h-full shadow-sm rounded-md overflow-hidden ">
      <div className="bg-blue-300">
        <Img fluid={image.childImageSharp.fluid} alt={title} />
      </div>
      <div className="p-5 pb-1">
        <h1 className="text-2xl text-blue-500 font-bold leading-snug">
          {title}
        </h1>
        <p className="text-base text-blue-900 mb-5 font-medium">{text}</p>
        {link && (
          <p>
            <a className="underline hover:text-blue-900" href={link}>
              Registration Link
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

Card.defaultProps = {
  navigation: {},
};

Card.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  text: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
};
