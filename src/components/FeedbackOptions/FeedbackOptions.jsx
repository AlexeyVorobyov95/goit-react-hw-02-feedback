import PropTypes from 'prop-types';
// import { Fragment } from 'react';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  
  return (
    <>
      {options.map(key => {
        return (
          <Button type="button" key={key} onClick={onLeaveFeedback}>
            {key}
          </Button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};