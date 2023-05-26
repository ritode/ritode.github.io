import "./DayNightToggle.css";
export default function DayNightToggle({ dayMode, setDayMode }) {
  return (
    <div className="day-night-toggle">
      <input
        type="checkbox"
        id="toggle"
        className="toggle--checkbox"
        defaultChecked={true}
        onChange={() => {
          setDayMode(!dayMode);
        }}
      />
      <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
      </label>
    </div>
  );
}
