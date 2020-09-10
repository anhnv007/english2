import styled from "styled-components";
import theme from "app/theme";
import { Layout } from "antd";
const { Header } = Layout;

export const HeaderWrapper = styled(Header)`
  background-color: ${theme.color.DARK_THEME_COLOR};
`;

export const AvatarWrapper = styled.div`
  margin-top: 27px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

export const LineWrapper = styled.div`
  margin: 0 3px;
  color: white;
  font-size: 18px;
`;

export const SignInWrapper = styled.div`
  margin-top: 14px;
  display: flex;
  cursor: pointer;
`;

export const SignInText = styled.div`
  color: white;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;
