export const LAYOUT_TOGGLE_MENU = 'LAYOUT_TOGGLE_MENU';

export const toggleMenu = () => (dispatch, getState) => {
  const state = getState();
  const {openDrawer} = state.layout;
  dispatch({type: LAYOUT_TOGGLE_MENU, openDrawer: !openDrawer});
};
