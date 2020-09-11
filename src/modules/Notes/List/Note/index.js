import React, { useState, useEffect } from "react";
import {
  CardWrapper,
  InputTitle,
  InputTextArea,
  CardTitleWrapper,
  CardFooterWrapper,
  ButtonUpdate,
  TimeText
} from "./styled";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import theme from "app/theme";
import { orPath, orEmpty } from "utils/Selector";
const Note = ({ onCreateNote, onDeleteNote, item, onUpdate }) => {
  const [colorRandom, setColorRandom] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  var randomProperty = function(obj) {
    var keys = Object.keys(obj);
    return obj[keys[(keys.length * Math.random()) << 0]];
  };

  const randomColorFnc = () => {
    if (theme.color) {
      setColorRandom(randomProperty(theme.color));
    }
  };

  useEffect(randomColorFnc, []);

  const note_id = orPath(null, [0], item);
  const note_item = orPath(null, [1], item);

  const onSetupForm = () => {
    if (note_item) {
      setTitle(orEmpty("title", note_item));
      setNote(orEmpty("note", note_item));
      setDateTime(orEmpty("date_time", note_item));
    }
  };
  const onChangeNote = e => {
    setNote(e.target.value);
    setIsUpdate(true);
  };
  const onChangeTitle = e => {
    setTitle(e.target.value);
    setIsUpdate(true);
  };
  useEffect(onSetupForm, [note_item]);

  const renderTitleCard = () => {
    return (
      <CardTitleWrapper>
        <PlusOutlined onClick={onCreateNote} />
        <InputTitle
          style={{ backgroundColor: `${colorRandom}` }}
          placeholder="Tiêu đề"
          value={title}
          onChange={onChangeTitle}
        />
      </CardTitleWrapper>
    );
  };

  const renderFooter = () => {
    return (
      <CardFooterWrapper>
        {isUpdate ? (
          <ButtonUpdate size="small" type="primary" onClick={onUpdateNote}>
            Cập nhật
          </ButtonUpdate>
        ) : null}

        <TimeText>{dateTime}</TimeText>
      </CardFooterWrapper>
    );
  };

  const onUpdateNote = () => {
    onUpdate(note_id, title, note);
    setIsUpdate(false);
  };

  return (
    <CardWrapper
      title={renderTitleCard()}
      extra={
        <CloseOutlined
          onClick={() => onDeleteNote(note_id)}
          style={{ color: "#fff" }}
        />
      }
      style={{ backgroundColor: `${colorRandom}` }}
    >
      <InputTextArea
        style={{ backgroundColor: `${colorRandom}` }}
        rows={6}
        placeholder="Ghi chú của bạn"
        value={note}
        onChange={onChangeNote}
      />
      {renderFooter()}
    </CardWrapper>
  );
};
export default Note;
