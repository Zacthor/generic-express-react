import { connect } from 'react-redux';
import Home from './home';
import mapStateToProps from './homeStateMapper';
import * as actions from './homeActions';
import { mapDispatchToPropsHelper } from '../../helpers';

const mapDispatchToProps = mapDispatchToPropsHelper(actions);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
