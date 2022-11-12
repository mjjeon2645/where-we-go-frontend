() => {
  const [startDate, setStartDate] = useState(new Date());
  function MyContainer({ className, children }) {
    return (
      <div style={{ padding: '16px', background: '#216ba5', color: '#fff' }}>
        <CalendarContainer className={className}>
          <div style={{ background: '#f0f0f0' }}>
            What is your favorite day?
          </div>
          <div style={{ position: 'relative' }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  }
  return (
    <DatePicker
      selected={date}
      onSelect={handleDateSelect} // when day is clicked
      onChange={handleDateChange}
    />
  );
};
