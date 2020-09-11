import styled from "styled-components";

import * as Antd from "antd";

const { TextArea } = Antd.Input;
const { Text } = Antd.Typography;
export const CardWrapper = styled(Antd.Card)`
  width: 100%;
  margin: 8px;
  height: 260px;
`;
export const InputTitle = styled(Antd.Input)`
  border: none;
  outline: none;
  color: #fff;
  :focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
`;
export const InputTextArea = styled(TextArea)`
  border: none;
  outline: none;
  resize: none;
  color: #fff;
  :focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
`;

export const CardTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const CardFooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonUpdate = styled(Antd.Button)``;
export const TimeText = styled(Text)`
  color: #fff;
  font-size: 10px;
`;
