export const tokenReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_TOKEN': 
      return action.payload;
    case 'SET_TOKEN_SIGNOUT':
      return action.payload;
  }
  return state;
}
