'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  className?: string;
}

export default function TypewriterText({ className }: TypewriterTextProps) {
  const texts = [
    {
      line1: "Graphic Designer & Faith-Based Content Creator",
      line2: "I create clean, meaningful visuals for Islamic",
      line3: "organizations, education, and community."
    },
    {
      line1: "مصمم جرافيك وصانع محتوى إسلامي",
      line2: "أصمم محتوى بصرياً هادفاً للمنظمات الإسلامية",
      line3: "والتعليم والمجتمعات المسلمة"
    }
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState({ line1: '', line2: '', line3: '' });
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState(1);

  useEffect(() => {
    const currentText = texts[textIndex];
    const typingSpeed = isDeleting ? 30 : 80;
    const pauseBeforeDelete = 2000;
    const pauseBeforeType = 500;

    if (!isDeleting) {
      // Typing phase
      if (currentLine === 1) {
        if (charIndex < currentText.line1.length) {
          const timer = setTimeout(() => {
            setDisplayedText(prev => ({
              ...prev,
              line1: currentText.line1.substring(0, charIndex + 1)
            }));
            setCharIndex(charIndex + 1);
          }, typingSpeed);
          return () => clearTimeout(timer);
        } else {
          const timer = setTimeout(() => {
            setCurrentLine(2);
            setCharIndex(0);
          }, 100);
          return () => clearTimeout(timer);
        }
      } else if (currentLine === 2) {
        if (charIndex < currentText.line2.length) {
          const timer = setTimeout(() => {
            setDisplayedText(prev => ({
              ...prev,
              line2: currentText.line2.substring(0, charIndex + 1)
            }));
            setCharIndex(charIndex + 1);
          }, typingSpeed);
          return () => clearTimeout(timer);
        } else {
          const timer = setTimeout(() => {
            setCurrentLine(3);
            setCharIndex(0);
          }, 100);
          return () => clearTimeout(timer);
        }
      } else if (currentLine === 3) {
        if (charIndex < currentText.line3.length) {
          const timer = setTimeout(() => {
            setDisplayedText(prev => ({
              ...prev,
              line3: currentText.line3.substring(0, charIndex + 1)
            }));
            setCharIndex(charIndex + 1);
          }, typingSpeed);
          return () => clearTimeout(timer);
        } else {
          // Finished typing all lines, pause then start deleting
          const timer = setTimeout(() => {
            setIsDeleting(true);
            setCurrentLine(3);
            setCharIndex(currentText.line3.length);
          }, pauseBeforeDelete);
          return () => clearTimeout(timer);
        }
      }
    } else {
      // Deleting phase
      if (currentLine === 3) {
        if (displayedText.line3.length > 0) {
          const timer = setTimeout(() => {
            setDisplayedText(prev => ({
              ...prev,
              line3: prev.line3.substring(0, prev.line3.length - 1)
            }));
          }, typingSpeed);
          return () => clearTimeout(timer);
        } else {
          setCurrentLine(2);
        }
      } else if (currentLine === 2) {
        if (displayedText.line2.length > 0) {
          const timer = setTimeout(() => {
            setDisplayedText(prev => ({
              ...prev,
              line2: prev.line2.substring(0, prev.line2.length - 1)
            }));
          }, typingSpeed);
          return () => clearTimeout(timer);
        } else {
          setCurrentLine(1);
        }
      } else if (currentLine === 1) {
        if (displayedText.line1.length > 0) {
          const timer = setTimeout(() => {
            setDisplayedText(prev => ({
              ...prev,
              line1: prev.line1.substring(0, prev.line1.length - 1)
            }));
          }, typingSpeed);
          return () => clearTimeout(timer);
        } else {
          // Finished deleting, switch to next text
          const timer = setTimeout(() => {
            setTextIndex((textIndex + 1) % texts.length);
            setIsDeleting(false);
            setCurrentLine(1);
            setCharIndex(0);
          }, pauseBeforeType);
          return () => clearTimeout(timer);
        }
      }
    }
  }, [charIndex, currentLine, isDeleting, textIndex, displayedText]);

  return (
    <h1 className={className} dir="ltr">
      {displayedText.line1 && (
        <>
          {displayedText.line1}
          {currentLine === 1 && !isDeleting && <span className="cursor">|</span>}
          <br />
        </>
      )}
      {displayedText.line2 && (
        <>
          {displayedText.line2}
          {currentLine === 2 && !isDeleting && <span className="cursor">|</span>}
          <br />
        </>
      )}
      {displayedText.line3 && (
        <>
          {displayedText.line3}
          {currentLine === 3 && !isDeleting && <span className="cursor">|</span>}
        </>
      )}
    </h1>
  );
}

