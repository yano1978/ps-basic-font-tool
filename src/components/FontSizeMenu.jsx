import { useState } from 'react';

const DropdownMenu = ({ className = '', toggleWeight }) => {
  let [isOpen, setIsOpen] = useState();
  const [alternative, setAlternative] = useState(false);
  const [ligature, setLigature] = useState(false);
  let [text, setText] = useState('');

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
        {!text ? '640 - regular' : text}
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
                <li>440, light</li>
                <li>444, light italic</li>
                <li>450, semi-light</li>
                <li>454, semi-light italic</li>
                <li>460, regular</li>
                <li>464, regular italic</li>
                <li>470, medium</li>
                <li>474, medium italic</li>
                <li>480, semi-bold</li>
                <li>484, semi-bold italic</li>
                <li>490, bold</li>
                <li>494, bold italic</li>
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
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-640Light');
                    changeValueAndCloseMenu({ text: '640 - light' });
                    onToggle(e);
                  }}
                >
                  640, light
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-644LightItalic');
                    changeValueAndCloseMenu({ text: '644 - light italic' });
                    onToggle(e);
                  }}
                >
                  644, light italic
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-650Semi-Light');
                    changeValueAndCloseMenu({ text: '650 - semi-light' });
                    onToggle(e);
                  }}
                >
                  650, semi-light
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-654Semi-LightItalic');
                    changeValueAndCloseMenu({ text: '654 - semi-light italic' });
                    onToggle(e);
                  }}
                >
                  654, semi-light italic
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-660Regular');
                    changeValueAndCloseMenu({ text: '660 - regular' });
                    onToggle(e);
                  }}
                >
                  660, regular
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-664RegularItalic');
                    changeValueAndCloseMenu({ text: '664 - regular italic' });
                    onToggle(e);
                  }}
                >
                  664, regular italic
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-670Medium');
                    changeValueAndCloseMenu({ text: '670 - medium' });
                    onToggle(e);
                  }}
                >
                  670, medium
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-674MediumItalic');
                    changeValueAndCloseMenu({ text: '674 - medium italic' });
                    onToggle(e);
                  }}
                >
                  674, medium italic
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-680Semi-Bold');
                    changeValueAndCloseMenu({ text: '680 - semi-bold' });
                    onToggle(e);
                  }}
                >
                  680, semi-bold
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-684Semi-BoldItalic');
                    changeValueAndCloseMenu({ text: '684 - semi-bold italic' });
                    onToggle(e);
                  }}
                >
                  684, semi-bold italic
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-690Bold');
                    changeValueAndCloseMenu({ text: '690 - bold' });
                    onToggle(e);
                  }}
                >
                  690, bold
                </li>
                <li
                  onClick={(e) => {
                    toggleWeight('PSBasic1200-694BoldItalic');
                    changeValueAndCloseMenu({ text: '694 - bold italic' });
                    onToggle(e);
                  }}
                >
                  694, bold italic
                </li>
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
