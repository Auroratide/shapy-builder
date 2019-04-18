import { connect } from 'react-redux';
import ShapyBuilder from './ShapyBuilder';
import {
  updateColor,
  selectShape,
  selectEyes
} from './actions';

const mapStateToProps = (state) => ( {
  shapes: state.options.shapes,
  eyes: state.options.eyes,
  color: state.builder.color,
  selectedShapeIndex: state.builder.selectedShapeIndex,
  selectedEyesIndex: state.builder.selectedEyesIndex
} );

const mapDispatchToProps = {
  updateColor,
  selectShape,
  selectEyes
};

export default connect(mapStateToProps, mapDispatchToProps)(ShapyBuilder);
