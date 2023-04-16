import { useState } from 'react';
import FontLink from '@/components/FontLink';

const FontSizeMenu = ({ className = '', toggleWeight }) => {
  const [active, setActive] = useState(41);
  const setLinkActive = (id) => {
    setActive(id);
  };
  let [isOpen, setIsOpen] = useState();
  let [text, setText] = useState('');
  const [narrowFonts] = useState([
    {
      id: 1,
      fontTitle: '440, light',
      fontClass: '',
    },
    {
      id: 2,
      fontTitle: '444, light italic',
      fontClass: '',
    },
    {
      id: 3,
      fontTitle: '450, semi-light',
      fontClass: '',
    },
    {
      id: 4,
      fontTitle: '454, semi-light italic',
      fontClass: '',
    },
    {
      id: 5,
      fontTitle: '460, regular',
      fontClass: '',
    },
    {
      id: 6,
      fontTitle: '464, regular italic',
      fontClass: '',
    },
    {
      id: 7,
      fontTitle: '470, medium',
      fontClass: '',
    },
    {
      id: 8,
      fontTitle: '474, medium italic',
      fontClass: '',
    },
    {
      id: 9,
      fontTitle: '480, semi-bold',
      fontClass: '',
    },
    {
      id: 10,
      fontTitle: '484, semi-bold italic',
      fontClass: '',
    },
    {
      id: 11,
      fontTitle: '490, bold',
      fontClass: '',
    },
    {
      id: 12,
      fontTitle: '494, bold italic',
      fontClass: '',
    },
  ]);
  const [compactFonts] = useState([
    {
      id: 13,
      fontTitle: '540, light',
      fontClass: '',
    },
    {
      id: 14,
      fontTitle: '544, light italic',
      fontClass: '',
    },
    {
      id: 15,
      fontTitle: '550, semi-light',
      fontClass: '',
    },
    {
      id: 16,
      fontTitle: '554, semi-light italic',
      fontClass: '',
    },
    {
      id: 17,
      fontTitle: '560, regular',
      fontClass: '',
    },
    {
      id: 18,
      fontTitle: '564, regular italic',
      fontClass: '',
    },
    {
      id: 19,
      fontTitle: '570, medium',
      fontClass: '',
    },
    {
      id: 20,
      fontTitle: '574, medium italic',
      fontClass: '',
    },
    {
      id: 21,
      fontTitle: '580, semi-bold',
      fontClass: '',
    },
    {
      id: 22,
      fontTitle: '584, semi-bold italic',
      fontClass: '',
    },
    {
      id: 23,
      fontTitle: '590, bold',
      fontClass: '',
    },
    {
      id: 24,
      fontTitle: '594, bold italic',
      fontClass: '',
    },
  ]);
  const [normalFonts] = useState([
    {
      id: 25,
      fontFull: '640 - light',
      fontNumber: '640, ',
      fontTitle: 'light',
      fontClass: 'PSBasic1200-640Light',
    },
    {
      id: 26,
      fontFull: '644 - light italic',
      fontNumber: '644, ',
      fontTitle: 'light italic',
      fontClass: 'PSBasic1200-644LightItalic',
    },
    {
      id: 27,
      fontFull: '650 - semi-light',
      fontNumber: '650, ',
      fontTitle: 'semi-light',
      fontClass: 'PSBasic1200-650Semi-Light',
    },
    {
      id: 28,
      fontFull: '654 - semi-light italic',
      fontNumber: '654, ',
      fontTitle: 'semi-light italic',
      fontClass: 'PSBasic1200-654Semi-LightItalic',
    },
    {
      id: 29,
      fontFull: '660 - regular',
      fontNumber: '660, ',
      fontTitle: 'regular',
      fontClass: 'PSBasic1200-660Regular',
    },
    {
      id: 30,
      fontFull: '664 - regular italic',
      fontNumber: '664, ',
      fontTitle: 'regular italic',
      fontClass: 'PSBasic1200-664RegularItalic',
    },
    {
      id: 31,
      fontFull: '670 - medium',
      fontNumber: '670, ',
      fontTitle: 'medium',
      fontClass: 'PSBasic1200-670Medium',
    },
    {
      id: 32,
      fontFull: '674 - medium italic',
      fontNumber: '674, ',
      fontTitle: 'medium italic',
      fontClass: 'PSBasic1200-674MediumItalic',
    },
    {
      id: 33,
      fontFull: '680 - semi-bold',
      fontNumber: '680, ',
      fontTitle: 'semi-bold',
      fontClass: 'PSBasic1200-680Semi-Bold',
    },
    {
      id: 34,
      fontFull: '684 - semi-bold italic',
      fontNumber: '684, ',
      fontTitle: 'semi-bold italic',
      fontClass: 'PSBasic1200-684Semi-BoldItalic',
    },
    {
      id: 35,
      fontFull: '690 - bold',
      fontNumber: '690, ',
      fontTitle: 'bold',
      fontClass: 'PSBasic1200-690Bold',
    },
    {
      id: 36,
      fontFull: '694 - bold italic',
      fontNumber: '694, ',
      fontTitle: 'bold italic',
      fontClass: 'PSBasic1200-694BoldItalic',
    },
  ]);
  const [extendedFonts] = useState([
    {
      id: 37,
      fontFull: '740 - light',
      fontNumber: '740, ',
      fontTitle: 'light',
      fontClass: 'PSBasic1200-740Light',
    },
    {
      id: 38,
      fontFull: '744 - light italic',
      fontNumber: '744, ',
      fontTitle: 'light italic',
      fontClass: 'PSBasic1200-744LightItalic',
    },
    {
      id: 39,
      fontFull: '750 - semi-light',
      fontNumber: '750, ',
      fontTitle: 'semi-light',
      fontClass: 'PSBasic1200-750Semi-Light',
    },
    {
      id: 40,
      fontFull: '754 - semi-light italic',
      fontNumber: '754, ',
      fontTitle: 'semi-light italic',
      fontClass: 'PSBasic1200-754Semi-LightItalic',
    },
    {
      id: 41,
      fontFull: '760 - regular',
      fontNumber: '760, ',
      fontTitle: 'regular',
      fontClass: 'PSBasic1200-760Regular',
    },
    {
      id: 42,
      fontFull: '764 - regular italic',
      fontNumber: '764, ',
      fontTitle: 'regular italic',
      fontClass: 'PSBasic1200-764RegularItalic',
    },
    {
      id: 43,
      fontFull: '770 - medium',
      fontNumber: '770, ',
      fontTitle: 'medium',
      fontClass: 'PSBasic1200-770Medium',
    },
    {
      id: 44,
      fontFull: '774 - medium italic',
      fontNumber: '774, ',
      fontTitle: 'medium italic',
      fontClass: 'PSBasic1200-774MediumItalic',
    },
    {
      id: 45,
      fontFull: '780 - semi-bold',
      fontNumber: '780, ',
      fontTitle: 'semi-bold',
      fontClass: 'PSBasic1200-780Semi-Bold',
    },
    {
      id: 46,
      fontFull: '784 - semi-bold italic',
      fontNumber: '784, ',
      fontTitle: 'semi-bold italic',
      fontClass: 'PSBasic1200-784Semi-BoldItalic',
    },
    {
      id: 47,
      fontFull: '790 - bold',
      fontNumber: '790, ',
      fontTitle: 'bold',
      fontClass: 'PSBasic1200-790Bold',
    },
    {
      id: 48,
      fontFull: '794 - bold italic',
      fontNumber: '794, ',
      fontTitle: 'bold italic',
      fontClass: 'PSBasic1200-794BoldItalic',
    },
  ]);
  const [wideFonts] = useState([
    {
      id: 49,
      fontTitle: '840, light',
      fontClass: '',
    },
    {
      id: 50,
      fontTitle: '844, light italic',
      fontClass: '',
    },
    {
      id: 51,
      fontTitle: '850, semi-light',
      fontClass: '',
    },
    {
      id: 52,
      fontTitle: '854, semi-light italic',
      fontClass: '',
    },
    {
      id: 53,
      fontTitle: '860, regular',
      fontClass: '',
    },
    {
      id: 54,
      fontTitle: '864, regular italic',
      fontClass: '',
    },
    {
      id: 55,
      fontTitle: '870, medium',
      fontClass: '',
    },
    {
      id: 56,
      fontTitle: '874, medium italic',
      fontClass: '',
    },
    {
      id: 57,
      fontTitle: '880, semi-bold',
      fontClass: '',
    },
    {
      id: 58,
      fontTitle: '884, semi-bold italic',
      fontClass: '',
    },
    {
      id: 59,
      fontTitle: '890, bold',
      fontClass: '',
    },
    {
      id: 60,
      fontTitle: '894, bold italic',
      fontClass: '',
    },
  ]);
  const [monoFonts] = useState([
    {
      id: 61,
      fontTitle: '940, light',
      fontClass: '',
    },
    {
      id: 62,
      fontTitle: '944, light italic',
      fontClass: '',
    },
    {
      id: 63,
      fontTitle: '960, regular',
      fontClass: '',
    },
    {
      id: 64,
      fontTitle: '964, regular italic',
      fontClass: '',
    },
    {
      id: 65,
      fontTitle: '990, bold',
      fontClass: '',
    },
    {
      id: 66,
      fontTitle: '994, bold italic',
      fontClass: '',
    },
  ]);

  const changeValueAndCloseMenu = (value) => {
    text = value.text;
    setText(text);
  };

  const onToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <details className={className} open={isOpen} onClick={(e) => onToggle(e)}>
      <summary className="absolute left-28 top-1 tablet:top-[12.5px] cursor-pointer">
        {!text ? '760 - regular' : text}
      </summary>
      <div className="font-menu">
        <div className="col pointer-events-none not-available">
          <div className="flex flex-row relative">
            <div className="w-1/4 absolute top-0.5">
              <div>Narrow</div>
              <div>400</div>
            </div>
            <div className="w-3/4 absolute left-[90px]">
              <ul className="mt-1 [&_li]:cursor-pointer">
                {narrowFonts.map((item) => (
                  <li key={item.id}>
                    <FontLink
                      {...item}
                      isActive={active === item.id}
                      setLinkActive={setLinkActive}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col pointer-events-none not-available">
          <div className="grid grid-cols-3 gap-20">
            <div>
              <div>Compact</div>
              <div>500</div>
            </div>
            <div className="col-span-2">
              <ul className="mt-1">
                {compactFonts.map((item) => (
                  <li key={item.id}>
                    <FontLink
                      {...item}
                      isActive={active === item.id}
                      setLinkActive={setLinkActive}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="grid grid-cols-3 gap-20">
            <div>
              <div>Normal</div>
              <div>600</div>
            </div>
            <div className="col-span-2">
              <ul className="mt-1 [&_li]:cursor-pointer">
                {normalFonts.map((item) => (
                  <li
                    onClick={(e) => {
                      toggleWeight(item.fontClass);
                      changeValueAndCloseMenu({ text: item.fontFull });
                      onToggle(e);
                    }}
                    key={item.id}
                  >
                    <FontLink
                      {...item}
                      isActive={active === item.id}
                      setLinkActive={setLinkActive}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="flex flex-row relative">
            <div className="w-1/4 absolute top-0.5">
              <div>Extended</div>
              <div>700</div>
            </div>
            <div className="w-3/4 absolute left-[90px]">
              <ul className="mt-1 [&_li]:cursor-pointer">
                {extendedFonts.map((item) => (
                  <li
                    onClick={(e) => {
                      toggleWeight(item.fontClass);
                      changeValueAndCloseMenu({ text: item.fontFull });
                      onToggle(e);
                    }}
                    key={item.id}
                  >
                    <FontLink
                      {...item}
                      isActive={active === item.id}
                      setLinkActive={setLinkActive}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col pointer-events-none not-available">
          <div className="grid grid-cols-3 gap-20">
            <div>
              <div>Wide</div>
              <div>800</div>
            </div>
            <div className="col-span-2">
              <ul className="mt-1">
                {wideFonts.map((item) => (
                  <li
                    onClick={(e) => {
                      toggleWeight(item.fontClass);
                      changeValueAndCloseMenu({ text: item.fontTitle });
                      onToggle(e);
                    }}
                    key={item.id}
                  >
                    <FontLink
                      {...item}
                      isActive={active === item.id}
                      setLinkActive={setLinkActive}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="grid grid-cols-3 gap-20 ">
            <div className="pointer-events-none not-available">
              <div>Mono</div>
              <div>900</div>
            </div>
            <div className="col-span-2 pointer-events-none not-available">
              <ul className="mt-1">
                {monoFonts.map((item) => (
                  <li
                    onClick={(e) => {
                      toggleWeight(item.fontClass);
                      changeValueAndCloseMenu({ text: item.fontTitle });
                      onToggle(e);
                    }}
                    key={item.id}
                  >
                    <FontLink
                      {...item}
                      isActive={active === item.id}
                      setLinkActive={setLinkActive}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </details>
  );
};

export default FontSizeMenu;
