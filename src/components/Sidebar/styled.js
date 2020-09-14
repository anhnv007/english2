import styled from "styled-components";
import * as Antd from "antd";

const { Sider } = Antd.Layout;

export const Logo = styled.div`
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
`;

export const SiderWrapper = styled(Sider)`
  height: 100vh;
  @media (max-width: 992px) {
    position: fixed;
    z-index: 100;
  }
`;
