import { connect } from 'react-redux';
import Home from './home';
import mapStateToProps from './homeStateMapper';


export default connect(
  mapStateToProps,
)(Home);
