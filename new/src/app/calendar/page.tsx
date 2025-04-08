import React from 'react';
import NavBar from '../../../components/nav';

const CalendarScreen = () => {
  return (
    <div>
      <NavBar />
      <div style={{ padding: '20px' }}>
        <h1>Calendar</h1>
        <iframe
        src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Your_Time_Zone"
        style={{ border: 0, width: '100%', height: '600px' }}
        frameBorder="0"
        scrolling="no"
      ></iframe>
      </div>
    </div>
  );
};

export default CalendarScreen;