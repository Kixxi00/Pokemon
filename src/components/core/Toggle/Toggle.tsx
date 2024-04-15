'use client';
import React, { FC, useState, useEffect } from 'react';

export interface ToggleProps {
  text: string;
  checked: boolean;
  onChange: any;
}

const Toggle: FC<ToggleProps> = (props: ToggleProps) => {
  // const [active, setActive] = useState<boolean>(props.checked);

  return (
    <label className="inline-block pl-2 hover:cursor-pointer">
      {props.text}
      <input
        className="ml-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 
        before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none 
        after:bg-neutral-100 after:shadow-[0 0px 3px 0 rgba(0, 0, 0, 0.7), 0 2px 2px 0 rgba(0, 0, 0, 0.4)] after:transition-[background-color 0.2s, transform 0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)] checked:after:transition-[background-color 0.2s, transform 0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-0.12 focus:before:shadow-[3px -1px 0px 13px rgba(0, 0, 0, 0.6)] focus:before:transition-[box-shadow 0.2s, transform 0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px -1px 0px 13px #3b71ca] checked:focus:before:transition-[box-shadow 0.2s, transform 0.2s] dark:bg-neutral-600 dark:after:bg-red-400 dark:checked:bg-primary dark:checked:after:bg-blue-600 dark:focus:before:shadow-[3px -1px 0px 13px rgba(255, 0, 0, 1)] dark:checked:focus:before:shadow-[3px -1px 0px 13px rgba(0, 0, 255, 1)]"
        type="checkbox"
        role="switch"
        checked={props.checked}
        onChange={props.onChange}
      />
    </label>
  );
};

export default Toggle;
