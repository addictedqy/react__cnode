const initLanding = () => {
  return {
    title: {
      loginname: '',
      id: '',
      avatar_url: '',
    },
    fetchState: 'SUCCESS',
  }
}

export const landingReducer = (state = initLanding(), action) => {
  switch (action.type) {
    case 'FETCH_LADING':
      return Object.assign({}, state, {
        fetchState: 'LOADING',
      });
    case 'FECHING_LADING_SUCCESS':
      return Object.assign({}, state, {
        title: action.payload,
        fetchState: 'SUCCESS',
      })
    case 'FETCHING_LADING_POST':
      return Object.assign({}, state, {
        fetchState: 'LOADING',
      })
    case 'FETCH_LADING_POST_SUCCESS': 
      return Object.assign({}, state, {
        title: action.payload,
        fetchState: 'SUCCESS',
      })
  }
  return state;
}

