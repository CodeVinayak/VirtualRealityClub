import Layout from "../src/layout/Layout";
import { useEffect, useState } from "react";

const ComingSoon = ({ days, hours, minutes, seconds }) => {
  // State to hold the time remaining
  const [timeRemaining, setTimeRemaining] = useState({ days, hours, minutes, seconds });

  // Update the time remaining every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        const newTime = calculateTimeRemaining("Februrary 25, 2024 12:30:00");
        return { ...prevTime, ...newTime };
      });
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  // Function to calculate the time remaining until the specified date
  const calculateTimeRemaining = (dueDate) => {
    const now = new Date();
    const endDate = new Date(dueDate);
    const timeRemaining = endDate - now;

    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  return (
    <Layout pageTitle={"Coming Soon"}>
      <div className="metaportal_fn_coming_soon">
        <div className="container">
          <div className="soon_countdown center">
            {/* Display the dynamically calculated time remaining */}
            <h3 className="metaportal_fn_countdown boxed">
              {`${timeRemaining.days}d: ${timeRemaining.hours}h: ${timeRemaining.minutes}m: ${timeRemaining.seconds}s`}
            </h3>
          </div>
          <div className="soon_title">
            <h3 className="fn__maintitle" data-text="Coming Soon" data-align="center">
              Coming Soon
            </h3>
            <p>We are currently working on our website.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .center {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      `}</style>
    </Layout>
  );
};

export default ComingSoon;
