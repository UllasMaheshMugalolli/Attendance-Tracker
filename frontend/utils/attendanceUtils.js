/**
 * Calculate attendance percentage
 * @param {number} attended - Number of classes attended
 * @param {number} total - Total number of classes
 * @returns {number} Percentage (0-100)
 */
export const calculatePercentage = (attended, total) => {
  if (total === 0) return 0;
  return Math.round((attended / total) * 100 * 100) / 100; // Round to 2 decimal places
};

/**
 * Calculate classes needed to reach target percentage
 * @param {number} attended - Current attended classes
 * @param {number} total - Current total classes
 * @param {number} targetPercentage - Target percentage (default: 75)
 * @returns {number} Number of classes needed
 */
export const calculateClassesNeeded = (attended, total, targetPercentage = 75) => {
  const currentPercentage = calculatePercentage(attended, total);
  
  if (currentPercentage >= targetPercentage) return 0;
  
  // Formula: (attended + x) / (total + x) = targetPercentage / 100
  // Solving for x: x = (targetPercentage * total - 100 * attended) / (100 - targetPercentage)
  const needed = Math.ceil(
    (targetPercentage * total - 100 * attended) / (100 - targetPercentage)
  );
  
  return needed > 0 ? needed : 0;
};

/**
 * Calculate how many classes can be safely missed
 * @param {number} attended - Current attended classes
 * @param {number} total - Current total classes
 * @param {number} targetPercentage - Target percentage (default: 75)
 * @returns {number} Number of classes that can be missed
 */
export const calculateSafeMisses = (attended, total, targetPercentage = 75) => {
  const currentPercentage = calculatePercentage(attended, total);
  
  if (currentPercentage < targetPercentage) return 0;
  
  // Formula: (attended) / (total + x) = targetPercentage / 100
  // Solving for x: x = (100 * attended / targetPercentage) - total
  const safeMisses = Math.floor((100 * attended) / targetPercentage - total);
  
  return safeMisses > 0 ? safeMisses : 0;
};

/**
 * Get attendance status (Safe, Warning, Critical)
 * @param {number} percentage - Current attendance percentage
 * @returns {object} Status object with label and color
 */
export const getAttendanceStatus = (percentage) => {
  if (percentage >= 85) {
    return { label: 'Safe', color: 'green', variant: 'success' };
  } else if (percentage >= 75) {
    return { label: 'Warning', color: 'yellow', variant: 'warning' };
  } else {
    return { label: 'Critical', color: 'red', variant: 'danger' };
  }
};

/**
 * Project future attendance based on hypothetical absences
 * @param {number} attended - Current attended
 * @param {number} total - Current total
 * @param {number} futureTotal - Future total classes
 * @param {number} futureAttended - Future classes to attend
 * @returns {object} Projection data
 */
export const projectAttendance = (attended, total, futureTotal, futureAttended) => {
  const newAttended = attended + futureAttended;
  const newTotal = total + futureTotal;
  const newPercentage = calculatePercentage(newAttended, newTotal);
  
  return {
    attended: newAttended,
    total: newTotal,
    percentage: newPercentage,
    status: getAttendanceStatus(newPercentage),
  };
};
