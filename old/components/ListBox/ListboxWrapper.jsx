import React from "react";
export const ListboxWrapper = ({children}) => (
  <div className="w-full max-w-100% border-small px-7 py-7 border-default-200 dark:border-default-100 bg-white p-8 grid grid-cols-2 gap-4">
    {children}
  </div>
);
