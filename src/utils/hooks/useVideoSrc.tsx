"use client"
import { useState, useEffect } from 'react';

const useVideoSrc = (url: string): string => {
  const [src, setSrc] = useState<string>('');

  useEffect(() => {
    const fetchVideoSrc = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setSrc(data.src);  
      } catch (error) {
        console.error('Failed to fetch video source:', error);
        setSrc('');  
      }
    };

    fetchVideoSrc();
  }, [url]);

  return src;
};

export default useVideoSrc;
