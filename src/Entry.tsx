import React from 'react';
// @ts-ignore
import Providers from 'mf2/AppProvider';
// @ts-ignore
import Navbar from 'mf2/Navbar'
// import all the stores to keep single instance
// could use a localstore to copy stores instances and ref from there
// @ts-ignore
import { useUtilityStore } from 'mf2/utilities/store/utilityStore';
import App from './components/App';


const StoresProvider = ({ children }: { children: (stores: any) => JSX.Element }) => {
    const utilityStore = useUtilityStore();
    return children({utilityStore});
};


const Entry = () => {
    return (
        <React.StrictMode>
            <StoresProvider>
                {(stores) => (
                    <Providers path={false}>
                        {() => (
                            <>
                                <Navbar />
                                <App stores={stores} />
                            </>
                        )}
                    </Providers>
                )}
            </StoresProvider>
        </React.StrictMode>
    );
};

export default Entry;
