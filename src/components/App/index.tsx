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
            handleCameraClick={() => console.log("handleCameraClick")}
            handleRecordClick={() => console.log("handleRecordClick")}
            handleSettingsClick={() => console.log("handleSettingsClick")}
            handleEnvironmentClick={() => console.log("handleEnvironmentClick")}
        />
        <div>Smarticamera2 mfv 0.0.2 copyright 2024</div>
    </div>
);

export default App;
