import React from 'react';
import { Col, Layout as AntLayout } from 'antd';
import { FilePdfOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Header, Footer, Content } = AntLayout;

const StyledIcon = styled.span`
  background: #a0b0ff;
  padding: 20px;
  width: auto;
  height: auto;
  border-radius: 100px;
  font-size: 35px;
  color: black;
  box-shadow: 0 0 10px #d8d8d8;
  cursor: pointer;
`;

const BasicLayout = (props) => {
  return (
    <AntLayout title={'Language Learning Forms'}>
      <Header>Language Learning Forms</Header>
      <Content>
        <Col span={24}>{props.children}</Col>
      </Content>
      <Footer>
        <StyledIcon>
          <FilePdfOutlined />
        </StyledIcon>
      </Footer>
    </AntLayout>
  );
};

export default BasicLayout;
