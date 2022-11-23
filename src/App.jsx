import { useState } from 'react';
import DropdownMenu from '@/components/FontSizeMenu';

const App = () => {
  let [changeBgColor, setChangeColor] = useState('');
  let [changeTextColor, setChangeTextColor] = useState('');
  let [changeDeepColor, setDropdownColor] = useState('');
  const [size, setSize] = useState(230);
  const [spacing, setLetterSpacing] = useState(-18);
  const [leading, setLineHeight] = useState(200);
  const [show, setShowColors] = useState(false);
  let [weight, setWeight] = useState('');

  const toggleWeight = (value) => {
    weight = value;
    setWeight(weight);
  };

  const fontsizeChange = (e) => {
    // console.log('setting font size', e.target.value);
    setSize(parseInt(e.target.value));
  };

  const letterSpacingChange = (e) => {
    // console.log('setting letter spacing', e.target.value);
    setLetterSpacing(parseInt(e.target.value));
  };

  const lineHeightChange = (e) => {
    // console.log('setting line height', e.target.value);
    setLineHeight(parseInt(e.target.value));
  };

  const handleMenuShowing = () => {
    setShowColors(!show);
  };

  const handleBgColor = (value) => {
    changeBgColor = value.bg;
    changeTextColor = value.text;
    setChangeColor(changeBgColor);
    setChangeTextColor(changeTextColor);
    // console.log('bg:', changeBgColor, 'text:', changeTextColor);
    // Colors combination available
    if (changeBgColor === '#000') {
      // bg is black
      if (changeTextColor === '#fff') {
        // text is white
        changeDeepColor = 'black-white';
      } else {
        // text is red
        changeDeepColor = 'black-red';
      }
    } else if (changeBgColor === '#E24523') {
      // bg is red
      if (changeTextColor === '#fff') {
        // text is white
        changeDeepColor = 'red-white';
      } else {
        // text is black
        changeDeepColor = 'red-black';
      }
    } else if (changeBgColor === '#4B4E54') {
      // bg is grey
      if (changeTextColor === '#fff') {
        // text is white
        changeDeepColor = 'grey-white';
      } else {
        // text is black
        changeDeepColor = 'grey-black';
      }
    } else {
      // bg is white
      if (changeTextColor === '#000') {
        // text is black
        changeDeepColor = 'white-black';
      } else {
        // text is red
        changeDeepColor = 'white-red';
      }
    }
    setDropdownColor(changeDeepColor);
  };

  return (
    <>
      <nav
        style={{
          backgroundColor: changeBgColor,
          color: changeTextColor,
        }}
        className="py-4"
      >
        <div
          style={{
            backgroundColor: changeBgColor,
            color: changeTextColor,
          }}
          className="mx-5 flex flex-wrap justify-start tablet:justify-between items-center text-white"
        >
          <a href="/">PS Basic</a>
          <div className="ml-20 tablet:ml-5">
            <DropdownMenu className={changeDeepColor} weight={weight} toggleWeight={toggleWeight} />
          </div>
          <div
            style={{
              backgroundColor: changeBgColor,
              color: changeTextColor,
            }}
            className="flex w-full tablet:w-auto"
          >
            <ul
              style={{
                backgroundColor: changeBgColor,
                color: changeTextColor,
              }}
              className="flex flex-col tablet:flex-row w-full [&_li]:px-1.5 lg:[&_li]:px-5 p-3.5 tablet:p-0 fixed bottom-0 left-0 tablet:relative tablet:top-0 bg-black"
            >
              <li className="!pl-0 flex">
                <label htmlFor="size" className="flex w-full lg:min-w-[100px]">
                  Size: {size + 'px'}
                </label>
                <input
                  className={changeDeepColor}
                  onChange={fontsizeChange}
                  type="range"
                  id="size"
                  name="size"
                  min="0"
                  max="230"
                />
              </li>
              <li className="flex">
                <label htmlFor="kern" className="flex w-full lg:min-w-[100px]">
                  Kern {spacing + 'px'}
                </label>
                <input
                  className={changeDeepColor}
                  onChange={letterSpacingChange}
                  type="range"
                  id="kern"
                  name="kern"
                  min="-18"
                  max="100"
                />
              </li>
              <li className="flex">
                <label htmlFor="leading" className="flex w-full lg:min-w-[100px]">
                  Leading {leading + 'px'}
                </label>
                <input
                  className={changeDeepColor}
                  onChange={lineHeightChange}
                  type="range"
                  id="leading"
                  name="leading"
                  min="-200"
                  max="500"
                />
              </li>
            </ul>
          </div>
          <div className="flex absolute right-5 tablet:right-0 tablet:relative">
            <button onClick={handleMenuShowing}>
              <div
                className={`w-4 h-4 border !border-${
                  changeTextColor == '#fff' ||
                  (changeTextColor == '#E24523' && changeBgColor != '#fff')
                    ? 'white'
                    : 'black'
                } rounded-full mr-3.5 mt-1 relative overflow-hidden`}
              >
                <div className="bg-black absolute right-0 w-1/2 h-full"></div>
                <div className="bg-white absolute w-1/2 h-full"></div>
              </div>
            </button>
            <div
              className={`transition-all duration-200 z-10 absolute top-7 flex flex-col ${
                show ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <button onClick={() => handleBgColor({ bg: '#E24523', text: '#000' })}>
                <div
                  className={`w-4 h-4 border !border-${
                    changeTextColor == '#fff' ||
                    (changeTextColor == '#E24523' && changeBgColor != '#fff')
                      ? 'white'
                      : 'black'
                  } rounded-full mr-3.5 mt-1 relative overflow-hidden`}
                >
                  <div className="bg-[#E24523] absolute w-1/2 h-full"></div>
                  <div className="bg-black absolute right-0 w-1/2 h-full"></div>
                </div>
              </button>
              <button onClick={() => handleBgColor({ bg: '#fff', text: '#000' })} className="pt-1">
                <div
                  className={`w-4 h-4 border !border-${
                    changeTextColor == '#fff' ||
                    (changeTextColor == '#E24523' && changeBgColor != '#fff')
                      ? 'white'
                      : 'black'
                  } rounded-full mr-3.5 mt-1 relative overflow-hidden`}
                >
                  <div className="bg-white absolute w-1/2 h-full"></div>
                  <div className="bg-black absolute right-0 w-1/2 h-full"></div>
                </div>
              </button>
              <button onClick={() => handleBgColor({ bg: '#000', text: '#fff' })} className="pt-1">
                <div
                  className={`w-4 h-4 border !border-${
                    changeTextColor == '#fff' ||
                    (changeTextColor == '#E24523' && changeBgColor != '#fff')
                      ? 'white'
                      : 'black'
                  } rounded-full mr-3.5 mt-1 relative overflow-hidden`}
                >
                  <div className="bg-black absolute w-1/2 h-full"></div>
                  <div className="bg-white absolute right-0 w-1/2 h-full"></div>
                </div>
              </button>
              <button
                onClick={() => handleBgColor({ bg: '#4B4E54', text: '#000' })}
                className="pt-1"
              >
                <div
                  className={`w-4 h-4 border !border-${
                    changeTextColor == '#fff' ||
                    (changeTextColor == '#E24523' && changeBgColor != '#fff')
                      ? 'white'
                      : 'black'
                  } rounded-full mr-3.5 mt-1 relative overflow-hidden`}
                >
                  <div className="bg-[#4B4E54] absolute w-1/2 h-full"></div>
                  <div className="bg-black absolute right-0 w-1/2 h-full"></div>
                </div>
              </button>
              <button
                onClick={() => handleBgColor({ bg: '#E24523', text: '#fff' })}
                className="pt-1"
              >
                <div
                  className={`w-4 h-4 border !border-${
                    changeTextColor == '#fff' ||
                    (changeTextColor == '#E24523' && changeBgColor != '#fff')
                      ? 'white'
                      : 'black'
                  } rounded-full mr-3.5 mt-1 relative overflow-hidden`}
                >
                  <div className="bg-[#E24523] absolute w-1/2 h-full"></div>
                  <div className="bg-white absolute right-0 w-1/2 h-full"></div>
                </div>
              </button>
              <button
                onClick={() => handleBgColor({ bg: '#fff', text: '#E24523' })}
                className="pt-1"
              >
                <div
                  className={`w-4 h-4 border !border-${
                    changeTextColor == '#fff' ||
                    (changeTextColor == '#E24523' && changeBgColor != '#fff')
                      ? 'white'
                      : 'black'
                  } rounded-full mr-3.5 mt-1 relative overflow-hidden`}
                >
                  <div className="bg-white absolute w-1/2 h-full"></div>
                  <div className="bg-[#E24523] absolute right-0 w-1/2 h-full"></div>
                </div>
              </button>
              <button
                onClick={() => handleBgColor({ bg: '#000', text: '#E24523' })}
                className="pt-1"
              >
                <div
                  className={`w-4 h-4 border !border-${
                    changeTextColor == '#fff' ||
                    (changeTextColor == '#E24523' && changeBgColor != '#fff')
                      ? 'white'
                      : 'black'
                  } rounded-full mr-3.5 mt-1 relative overflow-hidden`}
                >
                  <div className="bg-black absolute w-1/2 h-full"></div>
                  <div className="bg-[#E24523] absolute right-0 w-1/2 h-full"></div>
                </div>
              </button>
              <button
                onClick={() => handleBgColor({ bg: '#4B4E54', text: '#fff' })}
                className="pt-1"
              >
                <div
                  className={`w-4 h-4 border !border-${
                    changeTextColor == '#fff' ||
                    (changeTextColor == '#E24523' && changeBgColor != '#fff')
                      ? 'white'
                      : 'black'
                  } rounded-full mr-3.5 mt-1 relative overflow-hidden`}
                >
                  <div className="bg-[#4B4E54] absolute w-1/2 h-full"></div>
                  <div className="bg-white absolute right-0 w-1/2 h-full"></div>
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
        </div>
      </nav>
      <main
        style={{
          backgroundColor: changeBgColor,
          color: changeTextColor,
        }}
        className="text-white p-3.5 h-full"
      >
        <textarea
          className={weight}
          style={{
            fontSize: size + 'px',
            letterSpacing: spacing + 'px',
            lineHeight: leading + 'px',
          }}
          name="description"
          id="description"
          cols="30"
          rows="10"
          defaultValue="Type here..."
          placeholder="Type here..."
        ></textarea>
      </main>
    </>
  );
};

export default App;
