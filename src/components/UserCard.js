import React from 'react';
import { Card } from 'antd';

const UserCard = ({ user }) => (
  <Card title={user.name}>
    <p>Email: {user.email}</p>
  </Card>
);

export default UserCard;
