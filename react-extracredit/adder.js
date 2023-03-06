function Adder() {
  const [count, setCount] = React.useState(0);
  
  return React.createElement(
    'button',
    { onClick: () => setCount(count + 1) },
    `Times Clicked: ${count}`
    );
  }
  
  const rootElement = document.getElementById('root');
  const root = ReactDOM.createRoot(rootElement);
  root.render(React.createElement(Adder));