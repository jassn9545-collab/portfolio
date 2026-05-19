import { useState, useEffect } from 'react';

export const useTypewriter = (words, speed = 100, deleteSpeed = 50, pauseTime = 1000) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex(prev => (prev + 1) % words.length);
      } else {
        const deleteTimeout = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        }, deleteSpeed);
        return () => clearTimeout(deleteTimeout);
      }
    } else {
      if (currentText === currentWord) {
        setIsPaused(true);
      } else {
        const typeTimeout = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, speed);
        return () => clearTimeout(typeTimeout);
      }
    }
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, speed, deleteSpeed, pauseTime]);

  return currentText;
};
