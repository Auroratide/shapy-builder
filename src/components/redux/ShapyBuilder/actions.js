export const UPDATE_COLOR = 'ShapyBuilder::UPDATE_COLOR';
export const updateColor = (color) => ( {
  type: UPDATE_COLOR,
  color
} );

export const SELECT_SHAPE = 'ShapyBuilder::SELECT_SHAPE';
export const selectShape = (index) => ( {
  type: SELECT_SHAPE,
  index
} );

export const SELECT_EYES = 'ShapyBuilder::SELECT_EYES';
export const selectEyes = (index) => ( {
  type: SELECT_EYES,
  index
} );