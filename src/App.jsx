//アロー関数
// function App() {
//   return <h1>JSXの基本</h1>;
// }
// export default App;

// const App = () => {
//   return <h1>JSXの基本</h1>;
// };
// export default App;

// function App() {
//   return (
//     <>
//       <h1>JSXの基本</h1>
//       <p>JSXのルート要素</p>
//     </>
//   );
// }
// export default App;

// const App = () => {
//   return (
//     <>
//       <h1>JSXの基本</h1>
//       <p>JSXのルート要素</p>
//     </>
//   );
// };
// export default App;

//Reactフラグメント
// import { Fragment } from "react";
// const App = () => {
//   return (
//     <Fragment>
//       <h1>JSXの基本</h1>
//       <p>JSXのルート要素</p>
//     </Fragment>
//   );
// };
// export default App;

//className属性
// const App = () => {
//   return (
//     <>
//       <h1 className="font-normal">JSXの基本</h1>
//     </>
//   );
// };
// export default App;

// function App() {
//   return (
//     <>
//       <h1 className="font-normal">JSXの基本２</h1>
//     </>
//   );
// }
// export default App;

//JSX内ではJSが記述可能
// function App() {
//   const text = "aiueo";
//   return (
//     <>
//       <h1>{text}</h1>
//     </>
//   );
// }
// export default App;

// function App() {
//   const h1className = "font-normal";
//   return (
//     <>
//       <h1 className={h1className}>aiueo</h1>
//     </>
//   );
// }
// export default App;

//スプレッド構文を利用した属性値の指定
// function App() {
//   const attributes = {
//     id: "hoge",
//     className: "piyo",
//   };
//   return (
//     <>
//       <h1 {...attributes}>poyopoyo</h1>
//     </>
//   );
// }
// export default App;

//&&演算子を利用した条件分岐
// function App() {
//   const hasLead = true;
//   return (
//     <>
//       <h1>piyo</h1>
//       {hasLead && <p>JavaScript</p>}
//     </>
//   );
// }
// export default App;

//三項演算子を利用した条件分岐
//条件式　?　正しいときの処理　：　正しくないときの処理
//isDeletdがtrueのときが<del>
//falseだと<p>

// function App() {
//   const isDsleted = true;
//   return (
//     <>
//       <h1>poyopoyo</h1>
//       {isDsleted ? <del>JavaScript</del> : <p>JavaScript</p>}
//     </>
//   );
// }
// export default App;

//map()を利用した繰り返し処理
// function App() {
//   const fruits = ["apple", "banana", "peach", "orange"];
//   return (
//     <ul>
//       {fruits.map((fruits) => {
//         return <li>{fruits}</li>;
//       })}
//     </ul>
//   );
// }
// export default App;

//条件文と繰り返し
function App() {
  const myfavoriteFruits = "orange";
  const fruits = ["apple", "banana", "orange", "peach"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>
          {fruit === myfavoriteFruits ? <strong>{fruit}</strong> : fruit}
        </li>
      ))}
    </ul>
  );
}
export default App;
