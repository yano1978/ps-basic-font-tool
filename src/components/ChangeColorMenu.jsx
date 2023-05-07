import { useState, useEffect, useRef } from 'react';

const ChangeColorMenu = ({ handleBgColor, changeBgColor, dropDownCircle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef();
  const [buttons] = useState([
    {
      id: 1,
      bg: '#E24523',
      text: '#000',
      border: 'border-black',
      bgName: 'bg-red',
      textName: 'text-black',
    },
    {
      id: 2,
      bg: '#fff',
      text: '#000',
      border: 'border-white',
      bgName: 'bg-white',
      textName: 'text-black',
    },
    {
      id: 3,
      bg: '#000',
      text: '#fff',
      border: 'border-black',
      bgName: 'bg-black',
      textName: 'text-white',
    },
    {
      id: 4,
      bg: '#4B4E54',
      text: '#000',
      border: 'border-black',
      bgName: 'bg-grey',
      textName: 'text-black',
    },
    {
      id: 5,
      bg: '#E24523',
      text: '#fff',
      border: 'border-white',
      bgName: 'bg-red',
      textName: 'text-white',
    },
    {
      id: 6,
      bg: '#fff',
      text: '#E24523',
      border: 'border-red',
      bgName: 'bg-white',
      textName: 'text-red',
    },
    {
      id: 7,
      bg: '#000',
      text: '#E24523',
      border: 'border-red',
      bgName: 'bg-black',
      textName: 'text-red',
    },
    {
      id: 8,
      bg: '#4B4E54',
      text: '#fff',
      border: 'border-white',
      bgName: 'bg-grey',
      textName: 'text-white',
    },
  ]);

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
