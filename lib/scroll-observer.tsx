'use client';
import { createContext, useEffect, useState } from 'react';

interface ActiveSectionValue {
  activeSection: string;
}

interface ScrollObserverProps {
  children: React.ReactNode;
}

export const ScrollContext = createContext<ActiveSectionValue>({
  activeSection: '',
});

const ScrollObserver: React.FC<ScrollObserverProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ activeSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollObserver;
