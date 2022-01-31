import React from 'react';
import ReactPlayer from 'react-player';

const Main = () => {
  return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url='https://youtu.be/x7y15qSvxmU'
                width='100%'
                height='100%'
            />
        </div>
  );
};

export default Main;
