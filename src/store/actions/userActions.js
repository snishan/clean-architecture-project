export const fetchUsersRequest = () => ({ type: 'FETCH_USERS_REQUEST' });
export const fetchUsersSuccess = (users) => ({ type: 'FETCH_USERS_SUCCESS', payload: users });
export const fetchUsersFailure = (error) => ({ type: 'FETCH_USERS_FAILURE', payload: error });
