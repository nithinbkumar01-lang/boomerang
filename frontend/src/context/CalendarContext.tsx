import React, { createContext, useContext, useState, ReactNode } from "react";
import { PopupModal } from "react-calendly";

interface CalendarContextType {
  openCalendar: () => void;
  closeCalendar: () => void;
}

const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendar must be used within a CalendarProvider");
  }
  return context;
};

export const CalendarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Replace with actual Calendly URL later or use a generic one for demo
  const CALENDLY_URL = "https://calendly.com/acme-demo/30min";

  const openCalendar = () => setIsOpen(true);
  const closeCalendar = () => setIsOpen(false);

  return (
    <CalendarContext.Provider value={{ openCalendar, closeCalendar }}>
      {children}
      {isOpen && (
        <PopupModal
          url={CALENDLY_URL}
          onModalClose={closeCalendar}
          open={isOpen}
          rootElement={document.getElementById("root")!}
        />
      )}
    </CalendarContext.Provider>
  );
};
