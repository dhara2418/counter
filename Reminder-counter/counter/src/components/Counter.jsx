// React aur hooks import kar rahe hain
import React, { useState, useEffect } from "react";

function ReminderCounter() {

  // count state banayi hai, initial value 0 hai
  const [count, setCount] = useState(0);

  // Ye wo limit hai jaha reminder show hoga
  const limit = 10;

  // useEffect timer handle karega
  useEffect(() => {

    // setInterval har 1 second me count increase karega
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Agar count limit tak pahunch gaya to timer stop kar do
    if (count === limit) {
      clearInterval(timer);
    }

    // Cleanup function
    // Component re-render hone ya unmount hone pe timer clear hoga
    return () => clearInterval(timer);

  }, [count]); // Jab bhi count change hoga tab ye effect chalega

  return (
    <div className="counter-container">

      {/* Heading */}
      <h1>Reminder Counter</h1>

      {/* Counter display */}
      <h2>Counter: {count}</h2>

      {/* Conditional Rendering:
          Sirf tab show hoga jab count limit ke equal hoga */}
      {count === limit && (
        <p className="reminder-message">
          Reminder: Time is up!
        </p>
      )}

    </div>
  );
}

// Component export kar rahe hain
export default ReminderCounter;
