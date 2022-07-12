import { createContext, ReactNode, useContext, useState } from "react";

type PopupWidgetProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<any>;
};

type PopupProviderProps = {
  children: ReactNode;
};

export const PopupContext = createContext({} as PopupWidgetProps);

function PopupWidgetProvider(props: PopupProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const popupWidgetContext: PopupWidgetProps = {
    isOpen,
    setIsOpen,
  };

  return (
    <PopupContext.Provider value={popupWidgetContext}>
      {props.children}
    </PopupContext.Provider>
  );
}

const usePopupWidgetContext = (): PopupWidgetProps => useContext(PopupContext);

export { usePopupWidgetContext };

export default PopupWidgetProvider;
