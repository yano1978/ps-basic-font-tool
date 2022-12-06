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
      fontClicked: false,
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
      fontClicked: false,
    },
    {
      id: 4,
      fontTitle: '454, semi-light italic',
      fontClass: '',
      fontClicked: false,
    },
    {
      id: 5,
      fontTitle: '460, regular',
      fontClass: '',
      fontClicked: false,
    },
    {
      id: 6,
      fontTitle: '464, regular italic',
      fontClass: '',
      fontClicked: false,
    },
    {
      id: 7,
      fontTitle: '470, medium',
      fontClass: '',
      fontClicked: false,
    },
    {
      id: 8,
      fontTitle: '474, medium italic',
      fontClass: '',
      fontClicked: false,
    },
    {
      id: 9,
      fontTitle: '480, semi-bold',
      fontClass: '',
      fontClicked: false,
    },
    {
      id: 10,
      fontTitle: '484, semi-bold italic',
      fontClass: '',
      fontClicked: false,
    },
    {
      id: 11,
      fontTitle: '490, bold',
      fontClass: '',
      fontClicked: false,
    },
    {
      id: 12,
      fontTitle: '494, bold italic',
      fontClass: '',
      fontClicked: false,
    },
  ]);
  const [normalFonts] = useState([
    {
      id: 13,
      fontTitle: '640, light',
      fontClass: 'PSBasic1200-640Light',
    },
    {
      id: 14,
      fontTitle: '644, light italic',
      fontClass: 'PSBasic1200-644LightItalic',
    },
    {
      id: 15,
      fontTitle: '650, semi-light',
      fontClass: 'PSBasic1200-650Semi-Light',
    },
    {
      id: 16,
      fontTitle: '654, semi-light italic',
      fontClass: 'PSBasic1200-654Semi-LightItalic',
    },
    {
      id: 17,
      fontTitle: '660, regular',
      fontClass: 'PSBasic1200-660Regular',
    },
    {
      id: 18,
      fontTitle: '664, regular italic',
      fontClass: 'PSBasic1200-664RegularItalic',
    },
    {
      id: 19,
      fontTitle: '670, medium',
      fontClass: 'PSBasic1200-670Medium',
    },
    {
      id: 20,
      fontTitle: '674, medium italic',
      fontClass: 'PSBasic1200-674MediumItalic',
    },
    {
      id: 21,
      fontTitle: '680, semi-bold',
      fontClass: 'PSBasic1200-680Semi-Bold',
    },
    {
      id: 22,
      fontTitle: '684, semi-bold italic',
      fontClass: 'PSBasic1200-684Semi-BoldItalic',
    },
    {
      id: 23,
      fontTitle: '690, bold',
      fontClass: 'PSBasic1200-690Bold',
    },
    {
      id: 24,
      fontTitle: '694, bold italic',
      fontClass: 'PSBasic1200-694BoldItalic',
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
        <div className="col">
          <div className="grid grid-cols-3 gap-20">
            <div>
              <div>Narrow</div>
              <div>400</div>
            </div>
            <div className="col-span-2">
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
        <div className="col">
          <div className="grid grid-cols-3 gap-20">
            <div>
              <div>Compact</div>
              <div>500</div>
            </div>
            <div className="col-span-2">
              <ul className="mt-1">
                <li>540, light</li>
                <li>544, light italic</li>
                <li>550, semi-light</li>
                <li>554, semi-light italic</li>
                <li>560, regular</li>
                <li>564, regular italic</li>
                <li>570, medium</li>
                <li>574, medium italic</li>
                <li>580, semi-bold</li>
                <li>584, semi-bold italic</li>
                <li>590, bold</li>
                <li>594, bold italic</li>
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
          <div className="grid grid-cols-3 gap-20">
            <div>
              <div>Extended</div>
              <div>700</div>
            </div>
            <div className="col-span-2">
              <ul className="mt-1 [&_li]:cursor-pointer">
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-740Light');
                    changeValueAndCloseMenu({ text: '740 - light' });
                    onToggle(e);
                  }}
                >
                  740, light
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-744LightItalic');
                    changeValueAndCloseMenu({ text: '744 - light italic' });
                    onToggle(e);
                  }}
                >
                  744, light italic
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-750Semi-Light');
                    changeValueAndCloseMenu({ text: '750 - semi-light' });
                    onToggle(e);
                  }}
                >
                  750, semi-light
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-754Semi-LightItalic');
                    changeValueAndCloseMenu({ text: '754 - semi-light italic' });
                    onToggle(e);
                  }}
                >
                  754, semi-light italic
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-760Regular');
                    changeValueAndCloseMenu({ text: '760 - regular' });
                    onToggle(e);
                  }}
                >
                  760, regular
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-764RegularItalic');
                    changeValueAndCloseMenu({ text: '764 - regular italic' });
                    onToggle(e);
                  }}
                >
                  764, regular italic
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-770Medium');
                    changeValueAndCloseMenu({ text: '770 - medium' });
                    onToggle(e);
                  }}
                >
                  770, medium
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-774MediumItalic');
                    changeValueAndCloseMenu({ text: '774 - medium' });
                    onToggle(e);
                  }}
                >
                  774, medium italic
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-780Semi-Bold');
                    changeValueAndCloseMenu({ text: '780 - semi-bold' });
                    onToggle(e);
                  }}
                >
                  780, semi-bold
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-784Semi-BoldItalic');
                    changeValueAndCloseMenu({ text: '784 - semi-bold italic' });
                    onToggle(e);
                  }}
                >
                  784, semi-bold italic
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-790Bold');
                    changeValueAndCloseMenu({ text: '790 - bold' });
                    onToggle(e);
                  }}
                >
                  790, bold
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-794BoldItalic');
                    changeValueAndCloseMenu({ text: '790 - bold italic' });
                    onToggle(e);
                  }}
                >
                  790, bold italic
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="grid grid-cols-3 gap-20">
            <div>
              <div>Wide</div>
              <div>800</div>
            </div>
            <div className="col-span-2">
              <ul className="mt-1">
                <li>840, light</li>
                <li>844, light italic</li>
                <li>850, semi-light</li>
                <li>854, semi-light italic</li>
                <li>860, regular</li>
                <li>864, regular italic</li>
                <li>870, medium</li>
                <li>874, medium italic</li>
                <li>880, semi-bold</li>
                <li>884, semi-bold italic</li>
                <li>890, bold</li>
                <li>894, bold italic</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="grid grid-cols-3 gap-20">
            <div>
              <div>Mono</div>
              <div>900</div>
            </div>
            <div className="col-span-2">
              <ul className="mt-1">
                <li>940, light</li>
                <li>944, light italic</li>
                <li>960, regular</li>
                <li>964, regular italic</li>
                <li>990, bold</li>
                <li>994, bold italic</li>
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
