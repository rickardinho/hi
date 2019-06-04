import React from 'react';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';


const UndoRedoComp = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p>
    <button type='button' onClick={onUndo} disabled={!canUndo}>
      Undo
    </button>
    <button type='button' onClick={onRedo} disabled={!canRedo}>
      Redo
    </button>
  </p>
);


const mapStateToProps = (state) => {
  return {
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo())
  };
};

const UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedoComp);

export default UndoRedo;
