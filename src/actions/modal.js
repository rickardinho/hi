/** Constants */
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

/** Action-creators */
export const showModal = (type, props) => ({
    type: SHOW_MODAL,
    payload: {
      type,
      props
    }
});

export const hideModal = () => ({
    type: HIDE_MODAL
});
