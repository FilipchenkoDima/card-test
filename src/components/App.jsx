import { getUsers } from 'services/user-api';
import { Card } from './Card/Card';
import { useEffect, useState } from 'react';
import { Button } from './Button/Button';
import './App.css'

export const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers().then(state => {
      const newState = state.slice(0, 3);
      setIsLoading(false);
      return setUsers(newState);
    });
  }, []);

  const loadMoreBtn = () => {
    setIsLoading(true);
    getUsers().then(state => setUsers(state));
  };

  return (
    <div className='wrapper'>
      {users.map(({ tweets, followers, avatar, id }) => {
        return (
          <Card
            tweets={tweets}
            followers={followers}
            avatar={avatar}
            key={id}
          />
        );
      })}

      {!isLoading && <Button onClick={loadMoreBtn} />}
    </div>
  );
};
