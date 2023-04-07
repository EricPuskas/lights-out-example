/**
 * Imports types
 */
import { Timer } from "../../types";

/**
 *  Provides utility functions
 */
export const useUtils = () => {
  /**
   * Handles formatting the time
   */
  const formatTime = (time: Timer) => {
    const { minutes, seconds } = time;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  /**
   * Handles formatting the timestamp
   */
  const formatTimestamp = (timestamp: number) => {
    /**
     * Converts to date
     */
    const date = new Date(timestamp);

    /**
     * Gets the day
     */
    const day = date.getDate().toString().padStart(2, "0");

    /**
     * Gets the month
     */
    const month = (date.getMonth() + 1).toString().padStart(2, "0");

    /**
     * Gets the year
     */
    const year = date.getFullYear();

    /**
     *  Gets the hours
     */
    const hours = date.getHours().toString().padStart(2, "0");

    /**
     * Gets the minutes
     */
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day}-${month}-${year} ${hours}:${minutes}`;
  };

  /**
   * Formats the grid size
   */
  const formatGridSize = (size: number) => `${size}x${size}`;

  /**
   * Handles reversing an array
   */
  const reverseArray = (array: any[]) => {
    const newArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
      newArray.push(array[i]);
    }

    return newArray;
  };

  return {
    formatTime,
    formatTimestamp,
    formatGridSize,
    reverseArray
  };
};
