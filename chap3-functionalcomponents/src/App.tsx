import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import './css/style.css'

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
