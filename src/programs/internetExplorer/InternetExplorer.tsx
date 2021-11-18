import "./InternetExplorer.scss";

const InternetExplorer = () => {
  return (
    <div className="internetExplorer-main">
      <div className="internetExplorer-main__tools"></div>
      <iframe
        className="internetExplorer-main__window"
        src="https://bing.com"
        frameBorder="0"
        title="Internet Explorer"
        height="100%"
        width="100%"
      ></iframe>
    </div>
  );
};

export default InternetExplorer;
