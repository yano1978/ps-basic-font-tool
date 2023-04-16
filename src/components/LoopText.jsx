const LoopText = ({ clickCounter, className = '' }) => {
  return (
    <button className="loop mr-5" onClick={clickCounter}>
      <svg
        className={`${className} w-3.5`}
        viewBox="0 0 15 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.0559082 6.50003H1.04162L1.59877 4.95717H3.63448L4.19162 6.50003H5.17734L3.05591 0.885742H2.17734L0.0559082 6.50003ZM1.87734 4.20717L2.60591 1.95717H2.64877L3.37734 4.20717H1.87734ZM15 2H7V1H15V2ZM7 6H15V5H7V6ZM15 10H0V9H15V10ZM0 14H15V13H0V14Z"
        />
      </svg>
    </button>
  );
};
export default LoopText;
