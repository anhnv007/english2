import React, { useState, useEffect } from "react";
import { Wrapper } from "./styled";
import Note from "./Note";
import { Row, Col } from "antd";
import { withReducer, withCompose, withUser } from "hocs";
import { firebaseApp } from "app/firebaseConfig";
import { orNull } from "utils/Selector";
import noteReducer from "../reducer";
import { Loading } from "components";
import moment from "moment";
const List = ({ user, dispatch, action }) => {
  const [listWord, setListWord] = useState([]);
  const [loading, setLoading] = useState(false);
  const date_time = moment(new Date()).format("HH:mm DD/MM/YYYY");
  const onAddNoteDefault = () => {
    const userLean = orNull("uid", user);
    action.noteR.onAddNote(
      {
        isUser: userLean,
        title: "",
        note: "",
        date_time: date_time
      },
      dispatch.noteR
    );
  };

  const onGetAllWord = () => {
    if (user) {
      setLoading(true);
      firebaseApp
        .database()
        .ref("notes/")
        .child(`${orNull("uid", user)}`)
        .on("value", function(snapshot) {
          if (snapshot.val()) {
            var result = Object.keys(snapshot.val()).map(key => [
              key,
              snapshot.val()[key]
            ]);
            console.log(result);
            setListWord(result);
            return setLoading(false);
          }
          onAddNoteDefault();
          setListWord([]);
          return setLoading(false);
        });
    }
  };

  const onCreateNote = () => {
    onAddNoteDefault();
  };

  const onDeleteNote = id => {
    const userLean = orNull("uid", user);
    action.noteR.OnRemoveNote(
      {
        isUser: userLean,
        key: id
      },
      dispatch.noteR
    );
  };

  const onUpdate = (id, title, note) => {
    const userLean = orNull("uid", user);
    action.noteR.OnUpdateNote(
      {
        isUser: userLean,
        key: id,
        title: title,
        note: note,
        date_time: date_time
      },
      dispatch.noteR
    );
  };

  useEffect(onGetAllWord, [user]);

  return (
    <Wrapper>
      {loading ? <Loading /> : null}
      <Row gutter={[16, 24]}>
        {listWord.map((item, key) => {
          return (
            <Col key={key} xs={24} md={12} sm={12} lg={12} xl={6}>
              <Note
                onCreateNote={onCreateNote}
                onDeleteNote={onDeleteNote}
                onUpdate={onUpdate}
                item={item}
              />
            </Col>
          );
        })}
      </Row>
    </Wrapper>
  );
};
export default withCompose(
  withUser,
  withReducer({
    key: "noteR",
    ...noteReducer
  })
)(List);
