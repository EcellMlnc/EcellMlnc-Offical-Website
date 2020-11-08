import PropTypes from 'prop-types';
import React from 'react';
import { Card } from './Card';

const Cards = (props) => {
  const { gridItems } = props;

  return (
    <div className="container pt-6 overflow-hidden">
      <div className="flex flex-wrap -mx-3 xl:-mx-6">
        {gridItems.map((item, i) => (
          <div
            className="w-full sm:w-1/2 xl:w-1/3 px-3 xl:px-6 py-6"
            key={`card_${i}`}
          >
            <Card {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

Cards.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      title: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

export default Cards;
