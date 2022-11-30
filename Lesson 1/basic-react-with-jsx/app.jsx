function Hello(){
   return (
      <div>
         <div>Welcome to jsx</div>
         <p>What?</p>
      </div>
   );
}

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Hello));
