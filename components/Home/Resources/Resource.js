import React from 'react';
import Link from 'next/link';

export default function Resource({ resource }) {
  return (
    <>
      <div className="flex items-center w-full justify-center p-4 min-h-[200px]">
        <div className="max-w-sm rounded shadow bg-white dark:bg-gray-800">
          <div className="flex">
            <div className="px-6 py-5">
              <p className="text-base font-medium leading-none text-gray-800 dark:text-gray-100">
                {resource.name}
              </p>
              <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-2">
                {resource.document.fileName}
              </p>

              <div className="pt-4">
                <Link href={resource.document.url}>
                  <button className="py-2 px-4 text-xs font-semibold leading-3 bg-indigo-700 rounded hover:bg-indigo-600 focus:outline-none text-white">
                    Download
                  </button>
                </Link>
              </div>
            </div>
            <div className="px-3">
              <img src="https://i.ibb.co/34gPtCT/bg.png" alt="medal" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
