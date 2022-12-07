import { useState } from 'react';
import FontLink from '@/components/FontLink';

const DropdownMenu = ({ className = '', toggleWeight }) => {
  const [active, setActive] = useState(null);
  const setLinkActive = (id) => {
    setActive(id);
  };
  let [isOpen, setIsOpen] = useState();
  const [alternative, setAlternative] = useState(false);
  const [ligature, setLigature] = useState(false);
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
      fontClicked: false,
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
      fontClicked: false,
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
      fontTitle: '640, light',
      fontClass: 'PSBasic1200-640Light',
    },
    {
      id: 26,
      fontTitle: '644, light italic',
      fontClass: 'PSBasic1200-644LightItalic',
    },
    {
      id: 27,
      fontTitle: '650, semi-light',
      fontClass: 'PSBasic1200-650Semi-Light',
    },
    {
      id: 28,
      fontTitle: '654, semi-light italic',
      fontClass: 'PSBasic1200-654Semi-LightItalic',
    },
    {
      id: 29,
      fontTitle: '660, regular',
      fontClass: 'PSBasic1200-660Regular',
    },
    {
      id: 30,
      fontTitle: '664, regular italic',
      fontClass: 'PSBasic1200-664RegularItalic',
    },
    {
      id: 31,
      fontTitle: '670, medium',
      fontClass: 'PSBasic1200-670Medium',
    },
    {
      id: 32,
      fontTitle: '674, medium italic',
      fontClass: 'PSBasic1200-674MediumItalic',
    },
    {
      id: 33,
      fontTitle: '680, semi-bold',
      fontClass: 'PSBasic1200-680Semi-Bold',
    },
    {
      id: 34,
      fontTitle: '684, semi-bold italic',
      fontClass: 'PSBasic1200-684Semi-BoldItalic',
    },
    {
      id: 35,
      fontTitle: '690, bold',
      fontClass: 'PSBasic1200-690Bold',
    },
    {
      id: 36,
      fontTitle: '694, bold italic',
      fontClass: 'PSBasic1200-694BoldItalic',
    },
  ]);
  const [extendedFonts] = useState([
    {
      id: 37,
      fontTitle: '740, light',
      fontClass: 'PSBasic1200-740Light',
    },
    {
      id: 38,
      fontTitle: '744, light italic',
      fontClass: 'PSBasic1200-744LightItalic',
    },
    {
      id: 39,
      fontTitle: '750, semi-light',
      fontClass: 'PSBasic1200-750Semi-Light',
    },
    {
      id: 40,
      fontTitle: '754, semi-light italic',
      fontClass: 'PSBasic1200-754Semi-LightItalic',
    },
    {
      id: 41,
      fontTitle: '760, regular',
      fontClass: 'PSBasic1200-760Regular',
    },
    {
      id: 42,
      fontTitle: '764, regular italic',
      fontClass: 'PSBasic1200-764RegularItalic',
    },
    {
      id: 43,
      fontTitle: '770, medium',
      fontClass: 'PSBasic1200-770Medium',
    },
    {
      id: 44,
      fontTitle: '774, medium italic',
      fontClass: 'PSBasic1200-774MediumItalic',
    },
    {
      id: 45,
      fontTitle: '780, semi-bold',
      fontClass: 'PSBasic1200-780Semi-Bold',
    },
    {
      id: 46,
      fontTitle: '784, semi-bold italic',
      fontClass: 'PSBasic1200-784Semi-BoldItalic',
    },
    {
      id: 47,
      fontTitle: '790, bold',
      fontClass: 'PSBasic1200-790Bold',
    },
    {
      id: 48,
      fontTitle: '794, bold italic',
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

  const handleAnternative = () => {
    setAlternative(!alternative);
  };
  const handleLigature = () => {
    setLigature(!ligature);
  };

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
        {!text ? '670 - medium' : text}
      </summary>
      <div className="font-menu">
        <div className="col pointer-events-none text-[#6C6C6C]">
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
        <div className="col pointer-events-none text-[#6C6C6C]">
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
        <div className="col pointer-events-none text-[#6C6C6C]">
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
        <div className="col">
          <div className="grid grid-cols-3 gap-20 pointer-events-none text-[#6C6C6C]">
            <div>
              <div>Mono</div>
              <div>900</div>
            </div>
            <div className="col-span-2">
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
          <div className="grid grid-cols-3 gap-20 mt-5">
            <div>Alternative</div>
            <div>
              <input type="checkbox" checked={alternative} onChange={handleAnternative} />
              <label htmlFor="alternative">
                <span className="ml-2.5">{!alternative ? <span>Off</span> : <span>On</span>}</span>
              </label>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-20">
            <div>Ligature</div>
            <div>
              <input type="checkbox" checked={ligature} onChange={handleLigature} />
              <label htmlFor="ligature">
                <span className="ml-2.5">{!ligature ? <span>Off</span> : <span>On</span>}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </details>
  );
};

export default DropdownMenu;
