import React from "react";

export const UncompleteTodos = (props) => {
  const { uncompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className="uncomplete-area">
      <p className="title">未完了のTO DO</p>
      <ul>
        {uncompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
