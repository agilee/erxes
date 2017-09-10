import React, { PropTypes } from 'react';
import { compose, gql, graphql } from 'react-apollo';
import { Meteor } from 'meteor/meteor';
import { SegmentsList } from '../components';

const SegmentListContainer = props => {
  const { segmentsQuery } = props;

  if (segmentsQuery.loading) {
    return null;
  }

  const updatedProps = {
    ...props,
    segments: segmentsQuery.segments,
    removeSegment({ id }, callback) {
      Meteor.call('customers.removeSegment', id, (...params) => {
        segmentsQuery.refetch();
        callback(...params);
      });
    },
  };

  return <SegmentsList {...updatedProps} />;
};

SegmentListContainer.propTypes = {
  object: PropTypes.object,
  segmentsQuery: PropTypes.object,
};

const segmentFields = `
  _id
  name
  description
  subOf
  color
  connector
  conditions
`;

export default compose(
  graphql(
    gql`
      query segments {
        segments {
          ${segmentFields}
          getSubSegments {
            ${segmentFields}
          }
        }
      }
    `,
    {
      name: 'segmentsQuery',
      options: () => ({
        fetchPolicy: 'network-only',
      }),
    },
  ),
)(SegmentListContainer);
