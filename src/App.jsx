import { useState } from 'react';
import FontSizeMenu from '@/components/FontSizeMenu';
import ChangeColorMenu from './components/ChangeColorMenu';
import InfoDetailsMenu from '@/components/InfoDetailsMenu';
import LoopText from './components/LoopText';

const App = () => {
  const defaulText = `Google, Nike, 
Youtube, Apple, 
Netflix, Nintendo, 
McDonald's...
↓

Hello there, 
Let's play :) ...
↓
  
You can start
typing to edit this
text and change
the colour above.
↓

Change the font
style, and edit the
size, kerning and
leading using the
range sliders^

3,2,1 = Go!

P.S.
Keep in touch =
@programme.
studio

<3`;

  let [changeBgColor, setChangeColor] = useState('#E24523');
  let [changeTextColor, setChangeTextColor] = useState('#000');
  let [changeDeepColor, setDropdownColor] = useState('');
  let [dropDownCircle, setDropDownCircle] = useState('black');
  const [textValue, setTextValue] = useState(defaulText);
  const [size, setSize] = useState(200);
  const [spacing, setLetterSpacing] = useState(-18);
  const [leading, setLineHeight] = useState(200);
  const [fakeLeading, setFakeLineHeight] = useState(200);
  const [fakeKerning, setFakeLetterSpacing] = useState(200);
  let [weight, setWeight] = useState('');
  let [counter, setCounter] = useState(0);

  const clickCounter = () => {
    setCounter(counter + 1);
    if (counter == 0) {
      let newValue = `Dieter Rams, 
Emil Ruder,
Karl Gerstner,
Massimo Vignelli,
Armin Hofmann,
Adrian Frutiger,
Max Huber,
Piet Mondrian,
Massimo Vignelli,
Ettore Sottsass,
Josef Albers,
Le Corbusier,
Max Bill...`;
      setTextValue(newValue);
    } else if (counter == 1) {
      let newValue = `AaBbCcDdEe
FfGgHhIiJjKk
LlMmNnOoPp
QqRrSsTtUu
VvWwXxYyZz
+0123456789`;
      setTextValue(newValue);
    } else if (counter == 2) {
      let newValue = `Basel +
Zurich =
Basic`;
      setTextValue(newValue);
    } else if (counter == 3) {
      let newValue = defaulText;
      setTextValue(newValue);
      setCounter(0);
    }
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

  const injectDetailsText = () => {
    let newValue = `PS Basic; a structural type system drawn on a rigid grid of twelve hundred square units, divided into twenty three vertical paths (12 columns and 11 intervals). Consisting of  60 styles, 5 widths and 6 weights, from light to bold, narrow to wide, including italics. Also containing alternative character sets.
Its name is derived from its meaning, the concept is an experiment to align two subtly opposing modernist teachings in Switzerland  circa 1957, one in Basel, the other in Zurich. When the release of both Helvetica and Univers occurred, modernist values and education was at its height. In Basil, Emil Ruder, teacher at Allgemeine Gewerbeschule Basel often proclaimed Univers to be the superior (and only necessary) font, designed by Adrian Frutiger.
However, many modernist graphic designers in Zurich at the time opted to use Helvetica, such as Josef Muller Brockmann. Hence the name ‘Bas’ from ‘Basel’, and ‘ic’ from’Zurich’, the name ‘Basic’ contains ethos and mantras of both similar, yet subtly different views. Old style characters such as the lowercase ‘g’, the tail on the lowercase ‘l’ etc give reference to the pre-and-post war era, while appearing classical yet enhancing readability through their differentiation.
The design of this font is aimed at combining elements of both fonts, systematically created as a homage to both. Subtle details in the vector paths, all characters drawn individually (no interpolation). The incremental increase in width variants reference the golden ratio. The detail also includes precise three units ink traps, giving the font a constructed, industrial appearance.`;
    setTextValue(newValue);
  };

  const injectCopyright = () => {
    const copyright = String.fromCodePoint('0169');
    const year = new Date().getFullYear();
    let newValue = `${copyright}${year} - Alistair Cooper`;
    setTextValue(newValue);
  };
  const injectContact = () => {
    let newValue = 'helloacooper@gmail.com';
    setTextValue(newValue);
  };

  const toggleWeight = (value) => {
    weight = value;
    setWeight(weight);
  };

  const fontSizeChange = (e) => {
    // console.log('setting font size', e.target.value);
    setSize(parseInt(e.target.value));
    setLineHeight(parseInt(e.target.value));
    setLetterSpacing(parseInt(e.target.value) / 4);
  };

  const letterSpacingChange = (e) => {
    // console.log('setting letter spacing', e.target.value);
    setLetterSpacing(parseInt(e.target.value));
    setFakeLetterSpacing(parseInt(e.target.value));
  };

  const lineHeightChange = (e) => {
    // console.log('setting line height', e.target.value);
    setLineHeight(parseInt(e.target.value));
    setFakeLineHeight(parseInt(e.target.value));
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
                  onChange={fontSizeChange}
                  type="range"
                  id="size"
                  name="size"
                  min="16"
                  max="900"
                />
              </li>
              <li className="flex ml-0 tablet:ml-7">
                <label
                  htmlFor="kern"
                  className="flex w-full max-w-[80px] min-w-[95px] tablet:min-w-[90px]"
                >
                  Kern {fakeKerning + 'px'}
                </label>
                <input
                  className={changeDeepColor}
                  onChange={letterSpacingChange}
                  type="range"
                  id="kern"
                  name="kern"
                  min="-90"
                  max="90"
                />
              </li>
              <li className="flex ml-0 tablet:ml-7">
                <label
                  htmlFor="leading"
                  className="flex w-full max-w-[110px] min-w-[120px] tablet:min-w-[120px]"
                >
                  Leading {fakeLeading + 'px'}
                </label>
                <input
                  className={changeDeepColor}
                  onChange={lineHeightChange}
                  type="range"
                  id="leading"
                  name="leading"
                  min="-16"
                  max="900"
                />
              </li>
            </ul>
          </div>
          <div className="flex absolute right-5 tablet:right-0 tablet:relative">
            <LoopText clickCounter={clickCounter} />
            <ChangeColorMenu
              handleBgColor={handleBgColor}
              changeBgColor={changeBgColor}
              dropDownCircle={dropDownCircle}
            />
            <InfoDetailsMenu
              injectDetailsText={injectDetailsText}
              injectCopyright={injectCopyright}
              injectContact={injectContact}
            />
          </div>
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
          placeholder="Type here..."
          value={textValue}
          onChange={({ target }) => setTextValue(target.textValue)}
        ></textarea>
      </main>
    </div>
  );
};

export default App;
