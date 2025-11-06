import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Global store for attendance tracker
 */
export const useAttendanceStore = create(
  persist(
    (set, get) => ({
      // Semester Configuration
      semesterConfig: {
        startDate: null,
        endDate: null,
        isConfigured: false,
      },
      setSemesterConfig: (config) =>
        set((state) => ({
          semesterConfig: { ...state.semesterConfig, ...config, isConfigured: true },
        })),

      // Subjects
      subjects: [],
      setSubjects: (subjects) => set({ subjects }),
      addSubject: (subject) =>
        set((state) => ({
          subjects: [...state.subjects, subject],
        })),
      updateSubject: (id, updatedSubject) =>
        set((state) => ({
          subjects: state.subjects.map((subject) =>
            subject._id === id ? { ...subject, ...updatedSubject } : subject
          ),
        })),
      deleteSubject: (id) =>
        set((state) => ({
          subjects: state.subjects.filter((subject) => subject._id !== id),
        })),

      // Holidays
      holidays: [],
      setHolidays: (holidays) => set({ holidays }),
      addHoliday: (holiday) =>
        set((state) => ({
          holidays: [...state.holidays, holiday],
        })),
      updateHoliday: (id, updatedHoliday) =>
        set((state) => ({
          holidays: state.holidays.map((holiday) =>
            holiday._id === id ? { ...holiday, ...updatedHoliday } : holiday
          ),
        })),
      deleteHoliday: (id) =>
        set((state) => ({
          holidays: state.holidays.filter((holiday) => holiday._id !== id),
        })),

      // Attendance Records
      attendanceRecords: [],
      setAttendanceRecords: (records) => set({ attendanceRecords: records }),
      updateAttendanceRecord: (id, status) =>
        set((state) => ({
          attendanceRecords: state.attendanceRecords.map((record) =>
            record._id === id ? { ...record, status } : record
          ),
        })),

      // Loading States
      loading: {
        subjects: false,
        holidays: false,
        attendance: false,
        generating: false,
      },
      setLoading: (key, value) =>
        set((state) => ({
          loading: { ...state.loading, [key]: value },
        })),

      // Errors
      errors: {},
      setError: (key, error) =>
        set((state) => ({
          errors: { ...state.errors, [key]: error },
        })),
      clearError: (key) =>
        set((state) => {
          const newErrors = { ...state.errors };
          delete newErrors[key];
          return { errors: newErrors };
        }),

      // UI State
      selectedDate: new Date(),
      setSelectedDate: (date) => set({ selectedDate: date }),
      
      selectedSubject: null,
      setSelectedSubject: (subject) => set({ selectedSubject: subject }),

      // Reset all data
      resetAll: () =>
        set({
          subjects: [],
          holidays: [],
          attendanceRecords: [],
          semesterConfig: {
            startDate: null,
            endDate: null,
            isConfigured: false,
          },
          errors: {},
        }),
    }),
    {
      name: 'attendance-store', // LocalStorage key
      partialize: (state) => ({
        // Only persist these fields
        semesterConfig: state.semesterConfig,
        selectedDate: state.selectedDate,
      }),
    }
  )
);
