import styled from "styled-components";
import { Card, Typography } from "antd";
import theme from "app/theme";

const { Grid } = Card;
const { Text } = Typography;

export const GirdContent = styled.div`
  width: 100%;
  text-align: center;
`;
export const GirdContentOption = styled.div`
  width: 100%;
`;
export const TextContent = styled(Text)`
  font-size: 36px;
  color: ${theme.color.LIGHT_PURPLE_SEC};
`;
export const TextOption = styled(Text)`
  font-size: 18px;
  color: ${theme.color.DARK_BLUE};
`;
