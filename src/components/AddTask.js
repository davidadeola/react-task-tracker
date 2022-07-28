import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task, Thank you.");
      return;
    }

    onAddTask({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form onSubmit={onSubmit} className="add-form">
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          name="task"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="task">Day & Time</label>
        <input
          type="text"
          name="day-time "
          placeholder="Add Day & TIme"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control-check">
        <label htmlFor="task">Set Reminder</label>
        <input
          type="checkbox"
          name="reminder"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
