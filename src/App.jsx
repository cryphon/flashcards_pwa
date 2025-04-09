import { useState } from 'react';
import './App.css';

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      front: 'What is React?',
      back: 'A JS library for building UIs',
      flipped: false,
    },
    {
      id: 2,
      front: 'What is a hook?',
      back: 'A way to use state/lifecycle in functional components',
      flipped: false,
    },
  ]);

  const flipCard = (id) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, flipped: !card.flipped } : card
      )
    );
  };

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4'>
      <h1 className='text-3xl font-bold text-center mb-4'>📚 Flashcards</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {cards.map((card) => (
          <div
            key={card.id}
            className='cursor-pointer bg-white dark:bg-gray-800 shadow rounded-2xl p-6 transition-transform duration-300 hover:scale-105'
            onClick={() => flipCard(card.id)}
          >
            <p className='text-lg text-center'>
              {card.flipped ? card.back : card.front}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
