const AlternativeToggle = ({ setAlternative, enabled }) => {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="flex">
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input type="checkbox" className="sr-only peer" checked={enabled} readOnly />
          <div
            onClick={() => {
              setAlternative((enabled) => !enabled);
            }}
            className={`bg-black w-[30px] h-[18px] rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-600`}
          ></div>
        </label>
      </div>
    </div>
  );
};

export default AlternativeToggle;
