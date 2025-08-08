import { useState } from "react";

const ToggleSwitch = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div onClick={() => setEnabled(!enabled)} className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer duration-300 ${enabled ? 'bg-[#0075FF] border border-[#0075FF]' : 'bg-red-600 border border-red-600'}`}>
      <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${enabled ? 'translate-x-6' : ''}`}/>
    </div>
  );
};

export default ToggleSwitch;
