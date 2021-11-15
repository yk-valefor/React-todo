import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [UncompleteTodos, setUncompleteTodos] = useState([
    "あいうえお",
    "かきくけこ"
  ]);
  const [CompleteTodos, setCompleteTodos] = useState([
    "さしすせそ",
    "たちつてと"
  ]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TO DOを入力" />
        <button>追加</button>
      </div>
      <div className="uncomplete-area">
        <p className="title">未完了のTO DO</p>
        <ul>
          {UncompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTO DO</p>
        <ul>
          {CompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
