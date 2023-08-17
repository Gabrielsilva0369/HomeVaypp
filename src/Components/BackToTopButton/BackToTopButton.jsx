
import React, { useState, useEffect } from 'react';
import styles from './BackToTopButton.module.scss';

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`${styles.backToTopButton} ${isVisible ? styles.visible : ''}`} onClick={scrollToTop}>
      <span>&#8593;</span>
    </div>
  );
}

export default BackToTopButton;
