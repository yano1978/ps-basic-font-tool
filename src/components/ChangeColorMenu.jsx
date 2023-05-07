import { useState, useEffect, useRef } from 'react';
import buttons from '../data/buttons.json';

const ChangeColorMenu = ({ handleBgColor, changeBgColor, dropDownCircle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!btnRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', closeDropDown);
    return () => document.body.removeEventListener('click', closeDropDown);
  }, []);

  return (
    <>
      <button ref={btnRef} onClick={() => setIsOpen((prev) => !prev)}>
        <div className="w-3.5 h-3.5 border rounded-full mr-3.5 relative overflow-hidden">
          <div className={`bg-[${changeBgColor}] absolute right-0 w-1/2 h-full`}></div>
          <div className={`bg-${dropDownCircle} absolute w-1/2 h-full`}></div>
        </div>
      </button>
      <div
        className={`transition-all duration-200 z-10 absolute top-7 right-7 flex flex-col border-[1px] [&_button]:border-b-[1px] ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {buttons.map((item) => (
          <button
            className="w-[30px] last:border-b-0"
            onClick={() => {
              setIsOpen((prev) => !prev);
              handleBgColor({ bg: item.bg, text: item.text });
            }}
            key={item.id}
          >
            <div className={`${item.bgName} ${item.textName}`}>A</div>
          </button>
        ))}
      </div>
    </>
  );
};

export default ChangeColorMenu;
