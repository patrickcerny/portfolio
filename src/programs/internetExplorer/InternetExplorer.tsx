import { useState } from 'react';
import './InternetExplorer.scss';

const InternetExplorer = () => {
  const [location, setLocation] = useState('https://bing.com');

  return (
    <div className='internetExplorer-main'>
      <div className='internetExplorer-main__tools'>
        <div className='internetExplorer-main__tools'></div>
      </div>
      <iframe
        className='internetExplorer-main__window'
        src={location}
        frameBorder='0'
        title='Internet Explorer'
        height='100%'
        width='100%'
      ></iframe>
    </div>
  );
};

export default InternetExplorer;
