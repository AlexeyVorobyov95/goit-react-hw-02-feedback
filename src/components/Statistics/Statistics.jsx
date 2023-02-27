import { Title, Span, Text } from './Statistics.styled';
import PropTypes from 'prop-types';


export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    // console.log(total)
    <>
      <Title>Statistics</Title>
      <Text>
        Good: <Span>{good}</Span>
      </Text>
      <Text>
        Neutral: <Span>{neutral}</Span>
      </Text>
      <Text>
        Bad: <Span>{bad}</Span>
      </Text>
      <Text>
        Total: <Span>{total}</Span>
      </Text>
      <Text>
        Positive feedback: <Span>{positivePercentage}%</Span>
      </Text>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};