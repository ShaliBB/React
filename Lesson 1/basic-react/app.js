function Hello(){
   return React.createElement('div', null, 'Welcome to ReAct')
}

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Hello));
