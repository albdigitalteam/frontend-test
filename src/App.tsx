import { useStore } from './stores/hooks/useStore';

function App() {
    const store = useStore();

    console.log('111', store?.isApplicationInitializing);

    return (
        <div className="App">
            <header className="App-header">
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
