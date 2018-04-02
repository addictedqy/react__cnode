export const changeValueReaducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGEVALUE':
      return action.payload;
  }
  return state;
}
