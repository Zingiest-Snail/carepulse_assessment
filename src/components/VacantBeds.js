import React, {Component} from 'react';
import ResultItem from './ResultItem';
import PropTypes from 'prop-types';

class VacantBeds extends Component {
  
  render() {
      return this.props.resultsData.map((result) => (
        <ResultItem key={result.id} result={result} submitFunction={this.props.submitFunction} />
    ));
  }
}

//PropTypes
VacantBeds.propTypes = {
    resultsData: PropTypes.array.isRequired
}
export default VacantBeds;