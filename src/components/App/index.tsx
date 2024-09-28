// @ts-ignore
import AdvancedCamera from 'mf2/AdvancedCamera';
import './App.css';

const App = (
  // destructure the store needed to render less code
    { stores }:
    { stores?: any }
) => (
    <div className="content">
        <AdvancedCamera
            stores={stores}
            handleCameraClick={() => console.logs("handleCameraClick")}
            handleRecordClick={() => console.logs("handleRecordClick")}
            handleSettingsClick={() => console.logs("handleSettingsClick")}
            handleEnvironmentClick={() => console.logs("handleEnvironmentClick")}
        />
        <div>Smarticamera2 mfv 0.0.2 copyright 2024</div>
    </div>
);

export default App;
