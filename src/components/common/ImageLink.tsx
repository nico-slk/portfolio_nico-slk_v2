/**
 * 
 * <div>
    <a href="https://vite.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <ImageLink logo={reactLogo} classname="logo react" alt="React logo" href="https://reactjs.org" />
  </div>
 */

const ImageLink = ({
  logo,
  classname,
  alt,
  href,
}: {
  logo: string;
  classname: string;
  alt: string;
  href: string;
}) => {
  return (
    <a href={href} target="_blank">
      <img src={logo} className={classname} alt={alt} />
    </a>
  );
};

export default ImageLink;
