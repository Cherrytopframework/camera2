import './App.css';

const App = (
  // destructure the store needed to render less code
    { stores: { utilityStore } }:
    { stores?: any }
) => (
    <div className="content">
        {console.log("App.utilityStore: ", utilityStore) as any}
        <h1>SmartCamera mf</h1>
        <p>Start building amazing things with Rsbuild.</p>
        <h1>SmartCamera mfe</h1>
        <p>SmartCamera</p>
        
    </div>
);

export default App;
