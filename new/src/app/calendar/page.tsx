import React from 'react';

const CalendarScreen = () => {
  return (
    <div>
      <h1>Calendar</h1>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Your_Time_Zone"
        style={{ border: 0, width: '100%', height: '600px' }}
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default CalendarScreen;