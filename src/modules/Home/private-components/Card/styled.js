import styled from "styled-components";
import { Typography } from "antd";
import theme from "app/theme";

const { Text } = Typography;

export const CardTitle = styled(Text)`
  font-size: 20px;
  color: ${theme.color.DARK_BLUE};
`;

export const CardIcon = styled.div`
  font-size: 20px;
  color: ${theme.color.DARK_BLUE};
`;
