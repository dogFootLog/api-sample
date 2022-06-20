import React, { useState } from 'react';
import fetcher from './fetcher';

const Main = () => {
  const [msgs, setMsgs] = useState([]);
  const userId = '31';
  const userName = 'suhee';

  const getApi = async () => {
    const msgs = await fetcher('get', '/test');
    console.log(msgs);
    setMsgs((prev) => [...prev, msgs]);
  };

  const postApi = async () => {
    const newMsg = await fetcher('post', '/test', { userId, userName });
    if (!newMsg) throw Error('error!');
    setMsgs((msgs) => [newMsg, ...msgs]);
  };

  return (
    <div>
      <button onClick={getApi}>getApi</button>
      <button onClick={postApi}>postApi</button>
      {msgs.map((msg, idx) => (
        <React.Fragment key={idx}>
          <span>아이디: {msg.userId}</span>
          <span>이름: {msg.userName}</span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Main;
