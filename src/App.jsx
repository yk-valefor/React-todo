import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TO DOを入力" />
        <button>追加</button>
      </div>
      <div className="uncomplete-area">
        <p className="title">未完了のTO DO</p>
        <ul>
          <div className="list-row">
            <li>あいうえお</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>かきくけこ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTO DO</p>
        <ul>
          <div className="list-row">
            <li>あいうえお</li>
            <button>戻す</button>
          </div>
          <div className="list-row">
            <li>かきくけこ</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
