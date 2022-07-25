import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const NumberFormatter = ({ value, ...others }) => (
  <NumberFormat
    value={value}
    thousandSeparator
    decimalScale={0}
    displayType="text"
    {...others}
  />
);

NumberFormatter.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default NumberFormatter;
