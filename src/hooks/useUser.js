import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../store/actions/userActions';

const useUser = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  return { users, loading, error };
};

export default useUser;
