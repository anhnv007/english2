import styled from "styled-components";
import {
  StarOutlined,
  StarFilled,
  DeleteOutlined,
  EditOutlined
} from "@ant-design/icons";
import theme from "app/theme";
export const ImportantIcon = styled(StarFilled)`
  color: ${theme.color.BLUE};
`;
export const DeleteIcon = styled(DeleteOutlined)`
  color: ${theme.color.BLUE};
  margin: 8px;
  cursor: pointer;
`;

export const EditIcon = styled(EditOutlined)`
  color: ${theme.color.BLUE};
  margin: 8px;
  cursor: pointer;
`;
