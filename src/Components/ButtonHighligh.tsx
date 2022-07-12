import { usePopupWidgetContext } from "../context/PopupContext";

type ButtonProps = {
  text: string;
};

function ButtonHighligh(props: ButtonProps) {
  const popupWidgetContext = usePopupWidgetContext();

  const popupId = "headlessui-disclosure-button-:r2:";
  return (
    <button
      onClick={() => popupWidgetContext.setIsOpen(true)}
      className="bg-yellow-300 hover:bg-yellow-400 py-4 px-6 text-blue-900 text-sm font-bold min-w-[200px] uppercase rounded"
    >
      {props.text}
    </button>
  );
}

export default ButtonHighligh;
