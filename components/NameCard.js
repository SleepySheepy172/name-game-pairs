import React from 'react';

const NameCard = ({ id, login, avatar_url, fact, imgFact }) => {
  // console.log(id);
  return (
    <div className={'card-' + (fact ? 'fact' : 'name')}>
      <img
        src={imgFact ? imgFact : avatar_url}
        className={imgFact ? 'imgFact' : 'imgAvatar'}
      />
      <h4 className={fact ? 'fact' : 'username'} value={id}>
        {fact ? fact : login}
      </h4>
    </div>
  );
};

export default NameCard;
