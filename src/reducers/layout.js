const initialState = {
  openDrawer: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LAYOUT_TOGGLE_MENU': {
      return {...state, openDrawer: action.openDrawer};
    }

    default: {
      return state;
    }
  }
}
