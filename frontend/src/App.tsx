// import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import TopBanner from './Home';

function App() {
  return (
    <div className="App">
      <TopBanner />
    </div>
  );
}

export default App;

// function GoButton(props: any) {
//   return (
//     <div>
//       <button onClick={() => setCount(props.count + 1)}>Go</button>
//       <br />
//       <label>{props.count}</label>
//     </div>
//   );
// }

// function AmountofGo(props: any) {
//   return <label>{props.count}</label>;
// }

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <GoButton />
//       <AmountofGo count={count} />
//     </div>
//   );
// }

// export default App;
