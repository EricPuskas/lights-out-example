import { useState, useEffect, useRef } from "react";

/**
 * Defines the useStopwatch hook
 */
export const useStopwatch = () => {
  /**
   * Initializes the elapsed time state
   */
  const [elapsedTime, setElapsedTime] = useState(0);

  /**
   * Initializes the interval reference
   */
  const intervalRef = useRef<number | null>(null);

  /**
   * Defines the seconds
   */
  const seconds = Math.floor((elapsedTime / 1000) % 60);

  /**
   * Defines the minutes
   */
  const minutes = Math.floor((elapsedTime / 60000) % 60);

  /**
   * Resets the timer
   */
  const reset = () => {
    setElapsedTime(0);
  };

  /**
   * Handles updating the elapsed time
   */
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1000);
    }, 1000);

    /**
     * Clears the interval
     */
    return () => clearInterval(intervalRef.current as number);
    // eslint-disable-next-line
  }, []);

  return {
    minutes,
    seconds,
    reset
  };
};
