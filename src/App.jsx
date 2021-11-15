import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // 定義ここから
  // 追加state
  const [todoText, setTodoText] = useState("");
  // 未完了リストstate
  const [uncompleteTodos, setUncompleteTodos] = useState([]);
  // 完了リストstate
  const [completeTodos, setCompleteTodos] = useState([]);

  // 関数
  // 入力する
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // 追加ボタン押して未完了リストに追加
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...uncompleteTodos, todoText]; // 今ある未完了リストに追加したtodoを加え新しい配列を作る
    setUncompleteTodos(newTodos); // 未完了リストのstateを新しい配列に変える
    setTodoText(""); // 入力欄を空に戻す
  };
  // 削除ボタン押して未完了リストからtodoを消す
  const onClickDelete = (index) => {
    const newTodos = [...uncompleteTodos]; // 今ある未完了リスト
    newTodos.splice(index, 1); // 今ある未完了リストからindexに応じた場所から１つ削除
    setUncompleteTodos(newTodos); // 未完了リストのstateを新しい配列に変える
  };
  // 完了ボタン押してtodoを未完了リストから完了リストに移動する
  const onClickComplete = (index) => {
    const newUncompleteTodos = [...uncompleteTodos]; // 今ある未完了リスト
    newUncompleteTodos.splice(index, 1); // 今ある未完了リストからindexに応じた場所から１つ削除
    const newCompleteTodos = [...completeTodos, uncompleteTodos[index]]; //今ある完了リストに未完了リストから削除したものを加える
    setUncompleteTodos(newUncompleteTodos); // 未完了リストのstateを新しい配列に変える
    setCompleteTodos(newCompleteTodos); // 完了リストのstateを新しい配列に変える
  };
  // 戻すボタン押してtodoを完了リストから未完了リストに戻す
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos]; // 今ある完了リスト
    newCompleteTodos.splice(index, 1); // 今ある完了リストからindexに応じた場所から１つ削除
    const newUncompleteTodos = [...uncompleteTodos, completeTodos[index]]; //今ある未完了リストに完了リストから削除したものを加える
    setUncompleteTodos(newUncompleteTodos); // 未完了リストのstateを新しい配列に変える
    setCompleteTodos(newCompleteTodos); // 完了リストのstateを新しい配列に変える
  };
  // 定義ここまで

  // 表示
  return (
    <>
      <div className="input-area">
        <input
          placeholder="TO DOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
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
      <div className="complete-area">
        <p className="title">完了のTO DO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button
                  onClick={() => {
                    onClickBack(index);
                  }}
                >
                  戻す
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
