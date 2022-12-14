import { useState } from 'react';
import FontSizeMenu from '@/components/FontSizeMenu';
import ChangeColorMenu from './components/ChangeColorMenu';

const App = () => {
  let [changeBgColor, setChangeColor] = useState('#000');
  let [changeTextColor, setChangeTextColor] = useState('#fff');
  let [changeDeepColor, setDropdownColor] = useState('');
  let [dropDownCircle, setDropDownCircle] = useState('white');
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
        dropDownCircle = 'white';
      } else {
        // text is red
        changeDeepColor = 'black-red';
        dropDownCircle = 'red';
      }
    } else if (changeBgColor === '#E24523') {
      // bg is red
      if (changeTextColor === '#fff') {
        // text is white
        changeDeepColor = 'red-white';
        dropDownCircle = 'white';
      } else {
        // text is black
        changeDeepColor = 'red-black';
        dropDownCircle = 'black';
      }
    } else if (changeBgColor === '#4B4E54') {
      // bg is grey
      if (changeTextColor === '#fff') {
        // text is white
        changeDeepColor = 'grey-white';
        dropDownCircle = 'white';
      } else {
        // text is black
        changeDeepColor = 'grey-black';
        dropDownCircle = 'black';
      }
    } else {
      // bg is white
      if (changeTextColor === '#000') {
        // text is black
        changeDeepColor = 'white-black';
        dropDownCircle = 'black';
      } else {
        // text is red
        changeDeepColor = 'white-red';
        dropDownCircle = 'red';
      }
    }
    setDropdownColor(changeDeepColor);
    setDropDownCircle(dropDownCircle);
  };
  const [size, setSize] = useState(230);
  const [spacing, setLetterSpacing] = useState(-18);
  const [leading, setLineHeight] = useState(200);
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

  return (
    <div className="flex flex-col h-screen">
      <nav
        style={{
          backgroundColor: changeBgColor,
          color: changeTextColor,
        }}
        className="w-full py-1 sticky top-0 bg-black"
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
            <FontSizeMenu className={changeDeepColor} weight={weight} toggleWeight={toggleWeight} />
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
              className="flex flex-col tablet:flex-row w-full px-4 py-2 tablet:px-0 fixed bottom-0 left-0 tablet:relative tablet:top-0 bg-black"
            >
              <li className="tablet:!pl-0 flex">
                <label
                  htmlFor="size"
                  className="flex w-full max-w-[85px] min-w-[95px] tablet:max-w-full"
                >
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
              <li className="flex ml-0 tablet:ml-7">
                <label
                  htmlFor="kern"
                  className="flex w-full max-w-[80px] min-w-[95px] tablet:min-w-[90px]"
                >
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
              <li className="flex ml-0 tablet:ml-7">
                <label
                  htmlFor="leading"
                  className="flex w-full max-w-[110px] min-w-[120px] tablet:min-w-[120px]"
                >
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
          <ChangeColorMenu
            handleBgColor={handleBgColor}
            changeBgColor={changeBgColor}
            dropDownCircle={dropDownCircle}
          />
        </div>
      </nav>
      <main
        style={{
          backgroundColor: changeBgColor,
          color: changeTextColor,
        }}
        className="text-white flex-1 overflow-y-scroll"
      >
        <textarea
          spellCheck="false"
          className={`max-w-[300px] min-h-full sm:max-w-full px-4 ${weight}`}
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
    </div>
  );
};

export default App;
