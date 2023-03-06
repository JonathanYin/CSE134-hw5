function Adder() {
  const [count, setCount] = React.useState(0);
  
  return React.createElement(
    'button',
    { onClick: () => setCount(count + 1) },
    `Times Clicked: ${count}`
    );
  }
  
  ReactDOM.render(
    React.createElement(Adder),
    document.getElementById('root')
    );
    