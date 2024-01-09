import databiz from '../assets/images/client-databiz.svg';
import audio from '../assets/images/client-audiophile.svg';
import maker from '../assets/images/client-maker.svg';
import meet from '../assets/images/client-meet.svg';
import ResponsiveImages from './ResponsiveImages';

function Content() {
  return (
    <div className="h-fit max-w-full bg-almostWhite">
      <div className="flex flex-col-reverse md:flex-row justify-around p-14">
        <div className="">
          <div className="mb-8">
            <h1 className="text-6xl font-bold">
              Make <br /> remote work
            </h1>
          </div>
          <div className="mb-8">
            <p className="text-mediumGray text-sm">
              Get your team in sync, no matter your the location. <br />
              Streamline processes, create team rituals, and <br /> watch
              productivity soar.
            </p>
          </div>
          <div className="flex border rounded-lg text-center items-center w-fit bg-almostBlack py-2 px-4 mb-12">
            <button
              type="button"
              className="text-almostWhite font-bold text-xs"
            >
              Learn more
            </button>
          </div>

          <div className="flex flex-wrap justify-between items-center">
            <img src={databiz} alt="databiz" className="pr-4" />
            <img src={audio} alt="audiophile" className="p-4" />
            <img src={meet} alt="meet" className="p-4" />
            <img src={maker} alt="maker" className="p-4" />
          </div>
        </div>
        <ResponsiveImages />
      </div>
    </div>
  );
}

export default Content;
