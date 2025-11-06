import { format, parseISO, isWeekend, addDays, differenceInDays } from 'date-fns';

/**
 * Format date to display string
 * @param {Date|string} date - Date to format
 * @param {string} formatStr - Format string (default: 'MMM dd, yyyy')
 * @returns {string} Formatted date
 */
export const formatDate = (date, formatStr = 'MMM dd, yyyy') => {
  if (!date) return '';
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatStr);
};

/**
 * Check if a date is a weekend (Saturday or Sunday)
 * @param {Date|string} date - Date to check
 * @returns {boolean}
 */
export const isWeekendDay = (date) => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return isWeekend(dateObj);
};

/**
 * Get weekday name from date
 * @param {Date|string} date - Date to check
 * @returns {string} Weekday name (e.g., 'Monday')
 */
export const getWeekdayName = (date) => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'EEEE');
};

/**
 * Get all dates between two dates (inclusive)
 * @param {Date|string} startDate
 * @param {Date|string} endDate
 * @returns {Date[]} Array of dates
 */
export const getDateRange = (startDate, endDate) => {
  const start = typeof startDate === 'string' ? parseISO(startDate) : startDate;
  const end = typeof endDate === 'string' ? parseISO(endDate) : endDate;
  
  const days = differenceInDays(end, start);
  const dates = [];
  
  for (let i = 0; i <= days; i++) {
    dates.push(addDays(start, i));
  }
  
  return dates;
};

/**
 * Get weekday number (0 = Sunday, 6 = Saturday)
 * @param {Date|string} date
 * @returns {number}
 */
export const getWeekdayNumber = (date) => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return dateObj.getDay();
};
