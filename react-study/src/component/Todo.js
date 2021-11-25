import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  InputBase,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

const Todo = ({ item, onDelete }) => {
  const [readOnly, setReadOnly] = useState(true);

  const offReadOnlyMode = () => {
    setReadOnly(false);
  };

  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
    }
  };

  return (
    <ListItem>
      <Checkbox checked={item.done} />
      <ListItemText>
        <InputBase
          inputProps={{ "aria-label": "naked" }}
          readOnly={readOnly}
          onClick={offReadOnlyMode}
          onKeyPress={enterKeyEventHandler}
          type="text"
          id={item.id}
          name={item.id}
          value={item.title}
          multiline={true}
          fullWidth={true}
        />
      </ListItemText>

      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={() => onDelete(item)}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
