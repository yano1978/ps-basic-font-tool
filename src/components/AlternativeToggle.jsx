const AlternativeToggle = ({ setAlternative, enabled, className = '' }) => {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="flex">
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input type="checkbox" className="sr-only peer" checked={enabled} readOnly />
          <div
            onClick={() => {
              setAlternative((enabled) => !enabled);
            }}
            className={`toggle ${className} w-[26px] h-[14px] rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1.75px] after:left-[3px] after:rounded-full after:h-[10px] after:w-[10px] after:transition-all peer-checked:bg-green-600`}
          ></div>
        </label>
      </div>
    </div>
  );
};

export default AlternativeToggle;
