import { connect } from 'react-redux';
import { fetchOptions } from './actions';
import OptionsProvider from './OptionsProvider';

const mapDispatchToProps = { fetchOptions };

export default connect(null, mapDispatchToProps)(OptionsProvider);