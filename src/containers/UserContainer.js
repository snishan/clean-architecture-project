import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersRequest } from '../store/actions/userActions';
import { Card, Col, Row, Spin, Alert } from 'antd';
import UserCard from '../components/UserCard';

const UserContainer = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  if (loading) return <Spin size="large" tip="Loading..." style={{ display: 'block', margin: 'auto', marginTop: '20px' }} />;
  if (error) return <Alert message={`Error: ${error}`} type="error" showIcon style={{ marginBottom: '20px' }} />;

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={[16, 16]}>
        {users.map((user) => (
          <Col span={8} key={user.id}>
            <Card
              hoverable
            //   cover={<img alt="user-avatar" src={user.avatar} />}
              title={user.name}
              extra={<a href={`/users/${user.id}`}>More</a>}
            >
              <p>{user.email}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UserContainer;
