import './App.css';
import Header from './Components/Header/Header';
import SeminarSummary from './Components/Seminar_Summary/SeminarSummary';
import AskQuestion from './Components/Ask_question/AskQuestion';
import Footer from './Components/Footer/Footer';

const App = () => {
    return (
        <div className='App'>
            <Header />  {/* Header contain two components */}
            <SeminarSummary />
            <AskQuestion />
            <Footer />
        </div>
    )
}

export default App;