
import Wrapper from  './components/Wrapper'
import Aside from './components/aside/Aside'
import Main from  './components/Main'

function App() {
    return (
        <div className="App">
            <Wrapper>
                <Aside />
                <Main/>
            </Wrapper>    
        </div>
    );
}



export default App;
