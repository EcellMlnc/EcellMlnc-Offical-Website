import React from 'react';
import PropTypes from 'prop-types';
import { EventsPageTemplate } from '../../templates/event-page';

const EventsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <EventsPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        intro={data.intro || { blurbs: [] }}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

EventsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default EventsPagePreview;
