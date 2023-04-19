import { useState } from 'react';
import FontLink from '@/components/FontLink';
import { useMediaQuery } from '@/hooks/mobileChecker';

const FontSizeMenu = ({ className = '', toggleWeight }) => {
  const [active, setActive] = useState(41);
  const setLinkActive = (id) => {
    setActive(id);
  };
  let [isOpen, setIsOpen] = useState();
  let [text, setText] = useState('760 - regular');
  let [number, setNumber] = useState(760);
  const isDesktop = useMediaQuery('(min-width: 450px)');

  // Narrow 400
  const [narrowFonts] = useState([
    {
      id: 440,
      fontTitle: '440, light',
      fontClass: '',
    },
    {
      id: 444,
      fontTitle: '444, light italic',
      fontClass: '',
    },
    {
      id: 450,
      fontTitle: '450, semi-light',
      fontClass: '',
    },
    {
      id: 454,
      fontTitle: '454, semi-light italic',
      fontClass: '',
    },
    {
      id: 460,
      fontTitle: '460, regular',
      fontClass: '',
    },
    {
      id: 464,
      fontTitle: '464, regular italic',
      fontClass: '',
    },
    {
      id: 470,
      fontTitle: '470, medium',
      fontClass: '',
    },
    {
      id: 474,
      fontTitle: '474, medium italic',
      fontClass: '',
    },
    {
      id: 480,
      fontTitle: '480, semi-bold',
      fontClass: '',
    },
    {
      id: 484,
      fontTitle: '484, semi-bold italic',
      fontClass: '',
    },
    {
      id: 490,
      fontTitle: '490, bold',
      fontClass: '',
    },
    {
      id: 494,
      fontTitle: '494, bold italic',
      fontClass: '',
    },
  ]);

  // Compact 500
  const [compactFonts] = useState([
    {
      id: 540,
      fontTitle: '540, light',
      fontClass: '',
    },
    {
      id: 544,
      fontTitle: '544, light italic',
      fontClass: '',
    },
    {
      id: 550,
      fontTitle: '550, semi-light',
      fontClass: '',
    },
    {
      id: 554,
      fontTitle: '554, semi-light italic',
      fontClass: '',
    },
    {
      id: 560,
      fontTitle: '560, regular',
      fontClass: '',
    },
    {
      id: 564,
      fontTitle: '564, regular italic',
      fontClass: '',
    },
    {
      id: 570,
      fontTitle: '570, medium',
      fontClass: '',
    },
    {
      id: 574,
      fontTitle: '574, medium italic',
      fontClass: '',
    },
    {
      id: 580,
      fontTitle: '580, semi-bold',
      fontClass: '',
    },
    {
      id: 584,
      fontTitle: '584, semi-bold italic',
      fontClass: '',
    },
    {
      id: 590,
      fontTitle: '590, bold',
      fontClass: '',
    },
    {
      id: 594,
      fontTitle: '594, bold italic',
      fontClass: '',
    },
  ]);

  // Normal 600
  const [normalFonts] = useState([
    {
      id: 640,
      fontFull: '640 - light',
      fontNumber: '640, ',
      fontTitle: 'light',
      fontClass: 'PSBasic1200-640Light',
    },
    {
      id: 644,
      fontFull: '644 - light italic',
      fontNumber: '644, ',
      fontTitle: 'light italic',
      fontClass: 'PSBasic1200-644LightItalic',
    },
    {
      id: 650,
      fontFull: '650 - semi-light',
      fontNumber: '650, ',
      fontTitle: 'semi-light',
      fontClass: 'PSBasic1200-650Semi-Light',
    },
    {
      id: 654,
      fontFull: '654 - semi-light italic',
      fontNumber: '654, ',
      fontTitle: 'semi-light italic',
      fontClass: 'PSBasic1200-654Semi-LightItalic',
    },
    {
      id: 660,
      fontFull: '660 - regular',
      fontNumber: '660, ',
      fontTitle: 'regular',
      fontClass: 'PSBasic1200-660Regular',
    },
    {
      id: 664,
      fontFull: '664 - regular italic',
      fontNumber: '664, ',
      fontTitle: 'regular italic',
      fontClass: 'PSBasic1200-664RegularItalic',
    },
    {
      id: 670,
      fontFull: '670 - medium',
      fontNumber: '670, ',
      fontTitle: 'medium',
      fontClass: 'PSBasic1200-670Medium',
    },
    {
      id: 674,
      fontFull: '674 - medium italic',
      fontNumber: '674, ',
      fontTitle: 'medium italic',
      fontClass: 'PSBasic1200-674MediumItalic',
    },
    {
      id: 680,
      fontFull: '680 - semi-bold',
      fontNumber: '680, ',
      fontTitle: 'semi-bold',
      fontClass: 'PSBasic1200-680Semi-Bold',
    },
    {
      id: 684,
      fontFull: '684 - semi-bold italic',
      fontNumber: '684, ',
      fontTitle: 'semi-bold italic',
      fontClass: 'PSBasic1200-684Semi-BoldItalic',
    },
    {
      id: 690,
      fontFull: '690 - bold',
      fontNumber: '690, ',
      fontTitle: 'bold',
      fontClass: 'PSBasic1200-690Bold',
    },
    {
      id: 694,
      fontFull: '694 - bold italic',
      fontNumber: '694, ',
      fontTitle: 'bold italic',
      fontClass: 'PSBasic1200-694BoldItalic',
    },
  ]);

  // Extended 700
  const [extendedFonts] = useState([
    {
      id: 740,
      fontFull: '740 - light',
      fontNumber: '740, ',
      fontTitle: 'light',
      fontClass: 'PSBasic1200-740Light',
    },
    {
      id: 744,
      fontFull: '744 - light italic',
      fontNumber: '744, ',
      fontTitle: 'light italic',
      fontClass: 'PSBasic1200-744LightItalic',
    },
    {
      id: 750,
      fontFull: '750 - semi-light',
      fontNumber: '750, ',
      fontTitle: 'semi-light',
      fontClass: 'PSBasic1200-750Semi-Light',
    },
    {
      id: 754,
      fontFull: '754 - semi-light italic',
      fontNumber: '754, ',
      fontTitle: 'semi-light italic',
      fontClass: 'PSBasic1200-754Semi-LightItalic',
    },
    {
      id: 760,
      fontFull: '760 - regular',
      fontNumber: '760, ',
      fontTitle: 'regular',
      fontClass: 'PSBasic1200-760Regular',
    },
    {
      id: 764,
      fontFull: '764 - regular italic',
      fontNumber: '764, ',
      fontTitle: 'regular italic',
      fontClass: 'PSBasic1200-764RegularItalic',
    },
    {
      id: 770,
      fontFull: '770 - medium',
      fontNumber: '770, ',
      fontTitle: 'medium',
      fontClass: 'PSBasic1200-770Medium',
    },
    {
      id: 774,
      fontFull: '774 - medium italic',
      fontNumber: '774, ',
      fontTitle: 'medium italic',
      fontClass: 'PSBasic1200-774MediumItalic',
    },
    {
      id: 780,
      fontFull: '780 - semi-bold',
      fontNumber: '780, ',
      fontTitle: 'semi-bold',
      fontClass: 'PSBasic1200-780Semi-Bold',
    },
    {
      id: 784,
      fontFull: '784 - semi-bold italic',
      fontNumber: '784, ',
      fontTitle: 'semi-bold italic',
      fontClass: 'PSBasic1200-784Semi-BoldItalic',
    },
    {
      id: 790,
      fontFull: '790 - bold',
      fontNumber: '790, ',
      fontTitle: 'bold',
      fontClass: 'PSBasic1200-790Bold',
    },
    {
      id: 794,
      fontFull: '794 - bold italic',
      fontNumber: '794, ',
      fontTitle: 'bold italic',
      fontClass: 'PSBasic1200-794BoldItalic',
    },
  ]);

  // Wide 800
  const [wideFonts] = useState([
    {
      id: 840,
      fontTitle: '840, light',
      fontClass: '',
    },
    {
      id: 844,
      fontTitle: '844, light italic',
      fontClass: '',
    },
    {
      id: 850,
      fontTitle: '850, semi-light',
      fontClass: '',
    },
    {
      id: 854,
      fontTitle: '854, semi-light italic',
      fontClass: '',
    },
    {
      id: 860,
      fontTitle: '860, regular',
      fontClass: '',
    },
    {
      id: 864,
      fontTitle: '864, regular italic',
      fontClass: '',
    },
    {
      id: 870,
      fontTitle: '870, medium',
      fontClass: '',
    },
    {
      id: 874,
      fontTitle: '874, medium italic',
      fontClass: '',
    },
    {
      id: 880,
      fontTitle: '880, semi-bold',
      fontClass: '',
    },
    {
      id: 884,
      fontTitle: '884, semi-bold italic',
      fontClass: '',
    },
    {
      id: 890,
      fontTitle: '890, bold',
      fontClass: '',
    },
    {
      id: 894,
      fontTitle: '894, bold italic',
      fontClass: '',
    },
  ]);

  // Mono 900
  const [monoFonts] = useState([
    {
      id: 940,
      fontTitle: '940, light',
      fontClass: '',
    },
    {
      id: 944,
      fontTitle: '944, light italic',
      fontClass: '',
    },
    {
      id: 960,
      fontTitle: '960, regular',
      fontClass: '',
    },
    {
      id: 964,
      fontTitle: '964, regular italic',
      fontClass: '',
    },
    {
      id: 990,
      fontTitle: '990, bold',
      fontClass: '',
    },
    {
      id: 994,
      fontTitle: '994, bold italic',
      fontClass: '',
    },
  ]);

  const changeValueAndCloseMenu = (value) => {
    text = value.text;
    number = value.number;
    setText(text);
    setNumber(number);
  };

  const onToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <details className={className} open={isOpen} onClick={(e) => onToggle(e)}>
      <summary className="absolute left-24 top-1 xl:top-[12.5px] cursor-pointer">
        {isDesktop ? text : number}
      </summary>
      <div
        className={`font-content ${className} z-10 absolute min-h-[750px] h-[100vh] -top-3.5 left-0 my-[3rem] py-[2.5rem] px-[1.25rem] w-full`}
      >
        <div className="max-w-[1200px]">
          <div className="flex flex-col md:flex-row flex-wrap">
            <div className="w-full md:w-[33.333%] not-available pointer-events-none">
              <div className="flex w-full flex-col md:flex-row">
                <div className="md:mr-10 mt-2 md:mt-0 min-w-full md:min-w-[75px]">
                  <div>Narrow</div>
                  <div>400</div>
                </div>
                <div className="mt-2 md:mt-0">
                  <ul className="[&_li]:cursor-pointer">
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
            <div className="w-full md:w-[33.333%] not-available pointer-events-none">
              <div className="flex w-full flex-col md:flex-row">
                <div className="md:mr-10 mt-2 md:mt-0 min-w-full md:min-w-[75px]">
                  <div>Compact</div>
                  <div>500</div>
                </div>
                <div className="mt-2 md:mt-0">
                  <ul>
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
            <div className="w-full md:w-[33.333%]">
              <div className="flex w-full flex-col md:flex-row">
                <div className="md:mr-10 mt-2 md:mt-0 min-w-full md:min-w-[75px]">
                  <div>Normal</div>
                  <div>600</div>
                </div>
                <div className="mt-2 md:mt-0">
                  <ul className="[&_li]:cursor-pointer">
                    {normalFonts.map((item) => (
                      <li
                        onClick={(e) => {
                          toggleWeight(item.fontClass);
                          changeValueAndCloseMenu({ text: item.fontFull, number: item.id });
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
          <div className="flex flex-col md:flex-row flex-wrap mt-0 md:mt-10">
            <div className="w-full md:w-[33.333%]">
              <div className="flex w-full flex-col md:flex-row">
                <div className="md:mr-10 mt-2 md:mt-0 min-w-full md:min-w-[75px]">
                  <div>Extended</div>
                  <div>700</div>
                </div>
                <div className="mt-2 md:mt-0">
                  <ul className="[&_li]:cursor-pointer">
                    {extendedFonts.map((item) => (
                      <li
                        onClick={(e) => {
                          toggleWeight(item.fontClass);
                          changeValueAndCloseMenu({ text: item.fontFull, number: item.id });
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
            <div className="w-full md:w-[33.333%] not-available pointer-events-none">
              <div className="flex w-full flex-col md:flex-row">
                <div className="md:mr-10 mt-2 md:mt-0 min-w-full md:min-w-[75px]">
                  <div>Wide</div>
                  <div>800</div>
                </div>
                <div className="mt-2 md:mt-0">
                  <ul>
                    {wideFonts.map((item) => (
                      <li
                        onClick={(e) => {
                          toggleWeight(item.fontClass);
                          changeValueAndCloseMenu({ text: item.fontTitle, number: item.id });
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
            <div className="w-full md:w-[33.333%] not-available pointer-events-none">
              <div className="flex w-full flex-col md:flex-row">
                <div className="md:mr-10 mt-2 md:mt-0 min-w-full md:min-w-[75px]">
                  <div>Mono</div>
                  <div>900</div>
                </div>
                <div className="mt-2 md:mt-0">
                  <ul>
                    {monoFonts.map((item) => (
                      <li
                        onClick={(e) => {
                          toggleWeight(item.fontClass);
                          changeValueAndCloseMenu({ text: item.fontTitle, number: item.id });
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
        </div>
      </div>
    </details>
  );
};

export default FontSizeMenu;
