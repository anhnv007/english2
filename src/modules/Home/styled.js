import styled from "styled-components";
import { Typography } from "antd";
const { Text } = Typography;

export const StyledLink = styled(Text)`
  color: #ccc;
  margin-top: 5px;
  transition: background-color 0.3s ease;
  border-radius: 2px;
  &:hover {
    background-color: #78bdb8;
  }
`;
