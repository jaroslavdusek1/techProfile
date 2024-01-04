import React, { useState } from 'react';
import InteractiveBackground from './components/featureSpecificComponent/InteractiveBackground';
import LoginModal from './components/LoginForm/LoginForm';

/**
 * Main application component.
 */
const App = () => {
  const [isModalOpen, setModalOpen] = useState(true);

  return (
    <div>
      <InteractiveBackground />
      {isModalOpen && <LoginModal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default App;
