'use client';

import { FC } from 'react';
import { Button, Col, Row } from 'antd';

const HomePage: FC = () => {
  return (
    <Row>
      <Col
        span={ 24 }
        className="mt-[50px] p-64"
      >
        <Button type='primary' block>
          Login
        </Button>
      </Col>
    </Row>
  );
};

export default HomePage;
