import React from 'react';
// @ts-ignore
import Providers from 'mf2/AppProvider';
// @ts-ignore
import Navbar from 'mf2/Navbar'
// @ts-ignore
import Logs from 'mf2/utilities/Logs';
// import all the stores to keep single instance
// could use a localstore to copy stores instances and ref from there
// @ts-ignore
import { useUtilityStore } from 'mf2/utilities/store/utilityStore';
import App from './components/App';


const logs = new Logs('smarticamera:3005', 'background: #222; color: #107ff0');
logs.log('Hello and welcome! This is a test: ', 'Additional info', 123);

console.logs = logs.log;
// custom.d.ts
declare global {
    interface Console {
        logs: (...args: any[]) => void;
    }
}

const StoresProvider = ({ children }: { children: (stores: any) => JSX.Element }) => {
    const utilityStore = useUtilityStore();
    return children({ utilityStore });
};

const Entry = () => {
    return (
        <React.StrictMode>
            <StoresProvider>
                {(stores) => (
                    <Providers path={false}>
                        {() => <App stores={stores} />}
                    </Providers>
                )}
            </StoresProvider>
        </React.StrictMode>
    );
};

export default Entry;
