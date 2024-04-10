import { FC, useState, useEffect } from 'react';
import { Clock9Icon, Users } from 'lucide-react';
import io from 'socket.io-client';
import { getDateTime } from '../../helpers/dateFormatter.ts';
import { socketURL } from '../../api/index.ts';

export const HeaderTimeStatus: FC = () => {
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [dateTime, setDateTime] = useState(getDateTime());

  useEffect(() => {
    const socket = io(socketURL);

    socket.on('user count', (count) => {
      setOnlineUsers(count);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getDateTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="time-status">
      <div className="d-flex align-items-center justify-content-between">
        <p className="text mb-2">{dateTime.dayOfWeek}</p>
        <Users className="user-icon" />
        {onlineUsers}
      </div>
      <div className="d-flex align-items-center">
        <p className="text">{dateTime.date}</p>
        <p className="text ml-6 d-block">
          <Clock9Icon strokeWidth={4} className="clock-icon" /> {dateTime.time}
        </p>
      </div>
    </div>
  );
};
