import { useState } from 'react';

const ChangeColorMenu = ({ handleBgColor, changeBgColor, dropDownCircle }) => {
  const [show, setShowColors] = useState(false);
  const handleMenuShowing = () => {
    setShowColors(!show);
  };

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
        <button
          onClick={() => {
            handleMenuShowing();
            handleBgColor({ bg: '#E24523', text: '#000' });
          }}
        >
          <div className="w-4 h-4 border border-1 border-black rounded-full mr-3.5 mt-1 relative overflow-hidden">
            <div className="bg-red absolute right-0 w-1/2 h-full"></div>
            <div className="bg-black absolute w-1/2 h-full"></div>
          </div>
        </button>
        <button
          onClick={() => {
            handleMenuShowing();
            handleBgColor({ bg: '#fff', text: '#000' });
          }}
          className="pt-1"
        >
          <div className="w-4 h-4 border border-1 border-black rounded-full mr-3.5 mt-1 relative overflow-hidden">
            <div className="bg-black absolute w-1/2 h-full"></div>
            <div className="bg-white absolute right-0 w-1/2 h-full"></div>
          </div>
        </button>
        <button
          onClick={() => {
            handleMenuShowing();
            handleBgColor({ bg: '#000', text: '#fff' });
          }}
          className="pt-1"
        >
          <div
            className={`w-4 h-4 border border-1 border-white rounded-full mr-3.5 mt-1 relative overflow-hidden`}
          >
            <div className="bg-black absolute right-0 w-1/2 h-full"></div>
            <div className="bg-white absolute w-1/2 h-full"></div>
          </div>
        </button>
        <button
          onClick={() => {
            handleMenuShowing();
            handleBgColor({ bg: '#4B4E54', text: '#000' });
          }}
          className="pt-1"
        >
          <div className="w-4 h-4 border border-1 border-black rounded-full mr-3.5 mt-1 relative overflow-hidden">
            <div className="bg-black absolute w-1/2 h-full"></div>
            <div className="bg-grey absolute right-0 w-1/2 h-full"></div>
          </div>
        </button>
        <button
          onClick={() => {
            handleMenuShowing();
            handleBgColor({ bg: '#E24523', text: '#fff' });
          }}
          className="pt-1"
        >
          <div className="w-4 h-4 border border-1 border-white rounded-full mr-3.5 mt-1 relative overflow-hidden">
            <div className="bg-white absolute w-1/2 h-full"></div>
            <div className="bg-red absolute right-0 w-1/2 h-full"></div>
          </div>
        </button>
        <button
          onClick={() => {
            handleMenuShowing();
            handleBgColor({ bg: '#fff', text: '#E24523' });
          }}
          className="pt-1"
        >
          <div className="w-4 h-4 border border-1 border-red rounded-full mr-3.5 mt-1 relative overflow-hidden">
            <div className="bg-red absolute w-1/2 h-full"></div>
            <div className="bg-white absolute right-0 w-1/2 h-full"></div>
          </div>
        </button>
        <button
          onClick={() => {
            handleMenuShowing();
            handleBgColor({ bg: '#000', text: '#E24523' });
          }}
          className="pt-1"
        >
          <div className="w-4 h-4 border border-1 border-red rounded-full mr-3.5 mt-1 relative overflow-hidden">
            <div className="bg-red absolute w-1/2 h-full"></div>
            <div className="bg-black absolute right-0 w-1/2 h-full"></div>
          </div>
        </button>
        <button
          onClick={() => {
            handleMenuShowing();
            handleBgColor({ bg: '#4B4E54', text: '#fff' });
          }}
          className="pt-1"
        >
          <div className="w-4 h-4 border border-1 border-white rounded-full mr-3.5 mt-1 relative overflow-hidden">
            <div className="bg-white absolute w-1/2 h-full"></div>
            <div className="bg-grey absolute right-0 w-1/2 h-full"></div>
          </div>
        </button>
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
