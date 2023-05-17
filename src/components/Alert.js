import React from "react";
import { useAppContex } from "../contex/appContext";

const Alert = () => {
  const { alertType, alertText } = useAppContex();
  return alertType === "danger" ? (
    <div
      class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <span class="font-medium">Danger alert!</span> {alertText}
    </div>
  ) : (
    <div
      class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
      role="alert"
    >
      <span class="font-medium">Success alert!</span> Change a few things up and
      try submitting again.
    </div>
  );
};

export default Alert;
