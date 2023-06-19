import { useState, FormEvent } from 'react';
import ColorContainer from './components/ColorContainer';
import ColorInput from './components/ColorInput';

import './css/style.css';

const App = () => {
  const [color, setColor] = useState<string>('');
  const [hexColor, setHexColor] = useState<string>('');
  const [isDarkText, setIsDarkText] = useState<boolean>(true);

  const handleSubmitColor = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log('color submitted...');
  };

  return (
    <>
      <main>
        <section className="section">
          <ColorContainer
            color={color}
            hexColor={hexColor}
            isDarkText={isDarkText}
          />
        </section>
        <section>
          <ColorInput
            color={color}
            setColor={setColor}
            setHexColor={setHexColor}
            isDarkText={isDarkText}
            setIsDarkText={setIsDarkText}
            handleSubmitColor={handleSubmitColor}
          />
        </section>
      </main>
    </>
  );
};

export default App;
