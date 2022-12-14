import { useState } from 'react';

const ChangeColorMenu = ({ handleBgColor, changeBgColor, dropDownCircle }) => {
  const [show, setShowColors] = useState(false);
  const handleMenuShowing = () => {
    setShowColors(!show);
  };
  const [buttons] = useState([
    {
      id: 1,
      bg: '#E24523',
      text: '#000',
      border: 'border-black',
      bgName: 'bg-red',
      textName: 'bg-black',
    },
    {
      id: 2,
      bg: '#fff',
      text: '#000',
      border: 'border-black',
      bgName: 'bg-black',
      textName: 'bg-white',
    },
    {
      id: 3,
      bg: '#000',
      text: '#fff',
      border: 'border-white',
      bgName: 'bg-white',
      textName: 'bg-black',
    },
    {
      id: 4,
      bg: '#4B4E54',
      text: '#000',
      border: 'border-black',
      bgName: 'bg-grey',
      textName: 'bg-black',
    },
    {
      id: 5,
      bg: '#E24523',
      text: '#fff',
      border: 'border-white',
      bgName: 'bg-red',
      textName: 'bg-white',
    },
    {
      id: 6,
      bg: '#fff',
      text: '#E24523',
      border: 'border-red',
      bgName: 'bg-white',
      textName: 'bg-red',
    },
    {
      id: 7,
      bg: '#000',
      text: '#E24523',
      border: 'border-red',
      bgName: 'bg-black',
      textName: 'bg-red',
    },
    {
      id: 8,
      bg: '#4B4E54',
      text: '#fff',
      border: 'border-white',
      bgName: 'bg-grey',
      textName: 'bg-white',
    },
  ]);

  return (
    <div className="flex absolute right-5 tablet:right-0 tablet:relative">
      <button onClick={handleMenuShowing}>
        <div className="w-4 h-4 border border-1 rounded-full mr-3.5 mt-1 relative overflow-hidden">
          <div className={`bg-[${changeBgColor}] absolute right-0 w-1/2 h-full`}></div>
          <div className={`bg-${dropDownCircle} absolute w-1/2 h-full`}></div>
        </div>
      </button>
      <div
        className={`transition-all duration-200 z-10 absolute top-7 flex flex-col ${
          show ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {buttons.map((item) => (
          <button
            onClick={() => {
              handleMenuShowing();
              handleBgColor({ bg: item.bg, text: item.text });
            }}
            key={item.id}
          >
            <div
              className={`w-4 h-4 border border-1 ${item.border} rounded-full mr-3.5 mt-2 relative overflow-hidden`}
            >
              <div className={`${item.bgName} absolute right-0 w-1/2 h-full`}></div>
              <div className={`${item.textName} absolute w-1/2 h-full`}></div>
            </div>
          </button>
        ))}
      </div>
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-7 h-7 mt-1"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      </a>
    </div>
  );
};

export default ChangeColorMenu;
