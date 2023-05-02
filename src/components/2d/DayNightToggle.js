import "./DayNightToggle.css";
export default function DayNightToggle({ dayMode, setDayMode }) {
  return (
    <div className="day-night-toggle">
      <input
        type="checkbox"
        id="toggle"
        class="toggle--checkbox"
        defaultChecked={true}
        onChange={() => {
          setDayMode(!dayMode);
        }}
      />
      <label for="toggle" class="toggle--label">
        <span class="toggle--label-background"></span>
      </label>
    </div>
  );
}
