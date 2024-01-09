import mobileImage from '../assets/images/image-hero-mobile.png';
import desktopImage from '../assets/images/image-hero-desktop.png';

function ResponsiveImages() {
  return (
    <div className="flex">
      <img
        src={mobileImage}
        alt="Mobile image"
        className="block md:hidden h-auto"
      />
      <img
        src={desktopImage}
        alt="Desktop image"
        className="hidden md:block w-72 h-auto"
      />
    </div>
  );
}

export default ResponsiveImages;
