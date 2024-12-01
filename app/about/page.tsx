import React from 'react';

const About = () => {
  return (
    <div className="container">
      <h1 className="add-post-title ">О сайте</h1>
      <p className="about-text">
        Небольшой новостной сайт сделанный в учебных целях.
      </p>
      <p className="about-text mb-4">
        Чувствуешь себя счастливчиком? Сканируй QR-код!
      </p>
      <div className='img-container'>
        <img src='/got_ya.png' height='250' width='250' alt="QR Code"/>
      </div>
    </div>
  );
};

export default About;
