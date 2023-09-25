import api from './api';

function App() {
    const { isLoading, data } = api.useGetPosts();

    if (isLoading) {
        return <>loading...</>;
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>{JSON.stringify(data)}</p>
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
