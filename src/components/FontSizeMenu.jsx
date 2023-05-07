import { useState } from 'react';
import FontLink from '@/components/FontLink';
import { useMediaQuery } from '@/hooks/mobileChecker';
import narrowFonts from '../data/narrowFonts.json';
import compactFonts from '../data/compactFonts.json';
import normalFonts from '../data/normalFonts.json';
import extendedFonts from '../data/extendedFonts.json';
import wideFonts from '../data/wideFonts.json';
import monoFonts from '../data/monoFonts.json';

const FontSizeMenu = ({ className = '', toggleWeight }) => {
  const [active, setActive] = useState(41);
  const setLinkActive = (id) => {
    setActive(id);
  };
  let [isOpen, setIsOpen] = useState();
  let [text, setText] = useState('760 - regular');
  let [number, setNumber] = useState(760);
  const isDesktop = useMediaQuery('(min-width: 450px)');

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
      <summary className="absolute left-[100px] xs:left-28 top-1 xl:top-[12.5px] cursor-pointer">
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
