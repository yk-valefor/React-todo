import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { UncompleteTodos } from "./components/UncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={uncompleteTodos.length >= 5}
      />
      {uncompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>これ以上追加できません。</p>
      )}

      <UncompleteTodos
        uncompleteTodos={uncompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
