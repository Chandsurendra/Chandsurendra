'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BiSun, BiMoon, BiDesktop } from 'react-icons/bi';
const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const options = [
    { icon: <BiSun />, text: 'light' },
    { icon: <BiMoon />, text: 'dark' },
    { icon: <BiDesktop />, text: 'system' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {options?.map((opt) => (
        <button
          type="button"
          title="theme button"
          key={opt.text}
          onClick={() => setTheme(opt.text)}
          className={`m-1 h-8 w-8 rounded-full text-xl leading-9 duration-500 ${
            theme === opt.text && 'rotate-full text-sky-600 '
          } `}
        >
          {opt.icon}
        </button>
      ))}
    </div>
  );
};

export default Theme;