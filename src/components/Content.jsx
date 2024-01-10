import databiz from '../assets/images/client-databiz.svg';
import audio from '../assets/images/client-audiophile.svg';
import maker from '../assets/images/client-maker.svg';
import meet from '../assets/images/client-meet.svg';
import ResponsiveImages from './ResponsiveImages';

function Content() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-around p-2 md:p-14">
      <div className="">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left">
            Make <br className="hidden md:block" /> remote work
          </h1>
        </div>
        <div className="mb-8 text-center md:text-left">
          <p className="text-mediumGray text-sm">
            Get your team in sync, no matter your the location. <br />
            Streamline processes, create team rituals, and <br /> watch
            productivity soar.
          </p>
        </div>
        <div className="md:flex md:justify-end w-72 md:w-fit border rounded-lg text-center bg-almostBlack hover:bg-mediumGray py-2 px-4 m-12 md:mb-12 md:ml-0">
          <button
            type="button"
            className="text-almostWhite hover:text-almostBlack font-bold text-xs"
          >
            Learn more
          </button>
        </div>

        <div className="flex flex-wrap justify-between items-center">
          <img src={databiz} alt="databiz" className="pr-2 md:pr-4 w-24" />
          <img src={audio} alt="audiophile" className="pr-2 md:pr-4 w-16" />
          <img src={meet} alt="meet" className="pr-2 md:pr-4 w-24" />
          <img src={maker} alt="maker" className="pr-2 md:pr-4 w-24" />
        </div>
      </div>
      <ResponsiveImages />
    </div>
  );
}

export default Content;
