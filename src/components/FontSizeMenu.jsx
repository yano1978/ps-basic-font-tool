import { useState } from 'react';

const DropdownMenu = ({ className = '', toggleWeight }) => {
  const [alternative, setAlternative] = useState(false);
  const [ligature, setLigature] = useState(false);

  const handleAnternative = () => {
    setAlternative(!alternative);
  };
  const handleLigature = () => {
    setLigature(!ligature);
  };

  return (
    <details className={className}>
      <summary className="absolute left-28 top-[20px] cursor-pointer">760 - regular</summary>
      <div className="font-menu">
        <div className="col">
          <div className="grid grid-cols-3 gap-20">
            <div>
              <div>Narrow</div>
              <div>400</div>
            </div>
            <div className="col-span-2">
              <ul className="mt-1 [&_li]:cursor-pointer">
                <li onClick={toggleWeight}>440, light</li>
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
              <ul className="mt-1">
                <li>640, light</li>
                <li>644, light italic</li>
                <li>650, semi-light</li>
                <li>654, semi-light italic</li>
                <li>660, regular</li>
                <li>664, regular italic</li>
                <li>670, medium</li>
                <li>674, medium italic</li>
                <li>680, semi-bold</li>
                <li>684, semi-bold italic</li>
                <li>690, bold</li>
                <li>694, bold italic</li>
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
              <ul className="mt-1">
                <li>740, light</li>
                <li>744, light italic</li>
                <li>750, semi-light</li>
                <li>754, semi-light italic</li>
                <li>760, regular</li>
                <li>764, regular italic</li>
                <li>770, medium</li>
                <li>774, medium italic</li>
                <li>780, semi-bold</li>
                <li>784, semi-bold italic</li>
                <li>790, bold</li>
                <li>794, bold italic</li>
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
