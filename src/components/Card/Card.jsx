import { useEffect, useState } from 'react';
import svgLogo from '../../images/logo.svg';
import './Card.css';

export const Card = ({  tweets, followers, avatar }) => {
  const [follower, setFollower] = useState(() => {
    return JSON.parse(localStorage.getItem('follower')) ?? followers;
  });
  const [isFollowing, setIsFollowing] = useState(() => {
    return JSON.parse(localStorage.getItem('isFollowing')) ?? false;
  });

  useEffect(() => {
    localStorage.setItem('followers', JSON.stringify(follower));
    localStorage.setItem('isFollowing', JSON.stringify(isFollowing));
  }, [follower, isFollowing]);

  const onHandlerClickFollow = () => {
    switch (isFollowing) {
      case false:
        setFollower(follower + 1);
        setIsFollowing(true);
        break;
      case true:
        setFollower(follower - 1);
        setIsFollowing(false);
        break;

      default:
        return;
    }
  };
  return (
    <li className="hero">
      <img
        src={svgLogo}
        alt="User"
        className="hero__logo"
        width="76"
        height="22"
      />
      <div className="hero__card">
        <img
          src={avatar}
          alt="User"
          className="hero__image"
          width="62"
          height="62"
        />
        <div className="hero__info">
          <p className="hero__tweets">{tweets} tweets</p>
          <p className="hero__followers">
            {follower.toLocaleString('en-US', { maximumFractionDigits: 0 })}{' '}
            Followers
          </p>
          <button
            className="hero__btn"
            style={{
              backgroundColor: !isFollowing ? '#EBD8FF' : '#5CD3A8',
            }}
            type="button"
            onClick={onHandlerClickFollow}
          >
            {!isFollowing ? 'Follow' : 'Following'}
          </button>
        </div>
      </div>
    </li>
  );
};
