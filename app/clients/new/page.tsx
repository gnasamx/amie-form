"use client";

import * as React from "react";
import { Switch } from "@/components/primitives/switch";

export default function NewClientPage() {
  const [on, setOn] = React.useState(false);

  return (
    <div>
      <h3 className="mb-1 text-xl font-semibold">New client</h3>
      <div className="text-secondary mb-6 text-sm">
        To track time and expenses in Harvest, you&apos;ll need to add clients
        to your account. All projects are organized under clients.
      </div>

      <div className="flex flex-col space-y-10">
        {/* Name */}
        <div className="flex flex-col">
          <div className="mb-5 flex flex-col">
            <p className="text-base font-semibold">Add client</p>
            <p className="text-secondary mt-1 text-pretty text-sm">
              A client is a company or person you&apos;re doing work for.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2">
            <span className="text-secondary text-xs font-semibold">
              Name
              <span className="text-sm leading-none text-red-500">*</span>
            </span>
            <div>
              <input
                type="text"
                className="hover:bg-gray-150 focus:bg-gray-150 placeholder:text-placeholder dark:hover:bg-gray-750 dark:focus:bg-gray-750 flex w-full rounded-lg bg-gray-100 px-3 py-3 text-sm outline-none transition-colors dark:bg-gray-800"
                autoComplete="off"
                placeholder="e.g. Design Studio"
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <div className="mb-5 flex flex-col">
            <p className="text-base font-semibold">Address</p>
            <p className="text-secondary mt-1 text-pretty text-sm">
              Optional. The address will appear on your invoices.
            </p>
          </div>
          <div className="w-full">
            <input
              type="text"
              className="hover:bg-gray-150 focus:bg-gray-150 placeholder:text-placeholder dark:hover:bg-gray-750 dark:focus:bg-gray-750 flex w-full rounded-lg bg-gray-100 px-3 py-3 text-sm outline-none transition-colors dark:bg-gray-800"
              autoComplete="off"
              placeholder="e.g. 5-26 46th Ave, Long Island City New York, US"
            />
          </div>
        </div>

        {/* Preferred currency */}
        <div className="flex flex-col">
          <div className="mb-5 flex flex-col">
            <p className="text-base font-semibold">Preferred currency</p>
            <p className="text-secondary mt-1 text-pretty text-sm">
              Optional. Your invoices will automatically bill in the selected
              currency.
            </p>
          </div>
          <div className="flex flex-col space-y-1.5" role="radiogroup">
            <div
              tabIndex={-1}
              className="focus-visible:scale-102 focus-visible:bg-gray-150 hover:bg-gray-150/80 dark:hover:bg-gray-750 relative flex w-full cursor-pointer items-center rounded-lg bg-gray-100 p-3 transition-all duration-300  dark:bg-gray-800"
              aria-checked="false"
              role="radio"
            >
              <div className="flex aspect-square h-5 w-5 items-center justify-center rounded-full border-2 border-gray-300 bg-transparent transition-colors duration-300 dark:border-gray-400">
                <span className="bg-gray-150 flex h-2 w-2 origin-center scale-0 rounded-full transition-transform duration-300 dark:bg-gray-600"></span>
              </div>
              <div className="ml-2.5 flex flex-col text-left">
                <div className="flex">
                  <p className="text-sm font-medium">United States Dollar</p>
                </div>
              </div>
              <div className="ml-auto flex text-left">
                <p className="text-secondary text-xs font-medium">USD</p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="focus-visible:scale-102 focus-visible:bg-gray-150 hover:bg-gray-150/80 dark:hover:bg-gray-750 relative flex w-full cursor-pointer items-center rounded-lg bg-gray-100 p-3 transition-all duration-300  dark:bg-gray-800"
              aria-checked="true"
              role="radio"
            >
              <div className="flex aspect-square h-5 w-5 items-center justify-center rounded-full border-2 border-gray-600 bg-gray-600 transition-colors duration-300 dark:border-gray-300 dark:bg-gray-300">
                <span className="bg-gray-150 flex h-2 w-2 origin-center scale-100 rounded-full transition-transform duration-300 dark:bg-gray-600"></span>
              </div>
              <div className="ml-2.5 flex flex-col text-left">
                <div className="flex">
                  <p className="text-sm font-medium">Indian Rupee</p>
                </div>
              </div>
              <div className="ml-auto flex text-left">
                <p className="text-secondary text-xs font-medium">INR</p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr className="h-px w-full border-0 bg-gray-100 transition-colors dark:bg-gray-800" />
        </div>

        <div
          role="presentation"
          className="group flex cursor-pointer justify-between"
        >
          <div className="flex max-w-lg pr-2">
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <p className="text-base font-semibold">
                  Do you want to add a contact?
                </p>
              </div>
              <p className="text-secondary mt-1 text-pretty text-sm">
                For each client, you can add client contacts so invoices can be
                sent to certain individuals in the company.
              </p>
            </div>
          </div>
          <div>
            <Switch onCheckedChange={setOn} checked={on} />
          </div>
        </div>
      </div>

      {on && (
        <>
          <div className="my-8">
            <hr className="h-px w-full border-0 bg-gray-100 transition-colors dark:bg-gray-800" />
          </div>

          <div className="flex flex-col space-y-10">
            {/* Name and email */}
            <div className="flex flex-col">
              <div className="mb-5 flex flex-col">
                <p className="text-base font-semibold">Contact information</p>
                <p className="text-secondary mt-1 text-pretty text-sm">
                  The following information is required to add a client contact.
                </p>
              </div>
              <div className="flex w-full space-x-2">
                <div className="flex w-6/12 flex-col gap-2">
                  <span className="text-secondary text-xs font-semibold">
                    Name
                    <span className="text-sm leading-none text-red-500">*</span>
                  </span>
                  <div>
                    <input
                      type="text"
                      className="hover:bg-gray-150 focus:bg-gray-150 placeholder:text-placeholder dark:hover:bg-gray-750 dark:focus:bg-gray-750 flex w-full rounded-lg bg-gray-100 px-3 py-3 text-sm outline-none transition-colors dark:bg-gray-800"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="flex w-6/12 flex-col gap-2">
                  <span className="text-secondary text-xs font-semibold">
                    Email
                    <span className="text-sm leading-none text-red-500">*</span>
                  </span>
                  <div>
                    <input
                      type="email"
                      className="hover:bg-gray-150 focus:bg-gray-150 placeholder:text-placeholder dark:hover:bg-gray-750 dark:focus:bg-gray-750 flex w-full rounded-lg bg-gray-100 px-3 py-3 text-sm outline-none transition-colors dark:bg-gray-800"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-baseline">
                <small className="text-xxs font-black uppercase leading-snug tracking-wider text-blue-500 transition-colors dark:text-blue-400">
                  NOTE
                </small>
                <small className="text-secondary text-xs font-medium">
                  : No email is sent when adding a contact. The email address is
                  captured for your own reference.
                </small>
              </div>
            </div>

            {/* Title */}
            <div className="flex flex-col">
              <div className="mb-5 flex flex-col">
                <p className="text-base font-semibold">Title</p>
                <p className="text-secondary mt-1 text-pretty text-sm">
                  Optional. The designation of a contact.
                </p>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="hover:bg-gray-150 focus:bg-gray-150 placeholder:text-placeholder dark:hover:bg-gray-750 dark:focus:bg-gray-750 flex w-full rounded-lg bg-gray-100 px-3 py-3 text-sm outline-none transition-colors dark:bg-gray-800"
                  autoComplete="off"
                  placeholder="e.g. Project manager"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mb-5 flex flex-col">
                <p className="text-base font-semibold">Contact number</p>
                <p className="text-secondary mt-1 text-pretty text-sm">
                  Optional. Office number or contact number.
                </p>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="hover:bg-gray-150 focus:bg-gray-150 placeholder:text-placeholder dark:hover:bg-gray-750 dark:focus:bg-gray-750 flex w-full rounded-lg bg-gray-100 px-3 py-3 text-sm outline-none transition-colors dark:bg-gray-800"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </>
      )}

      <div className="my-8">
        <hr className="h-px w-full border-0 bg-gray-100 transition-colors dark:bg-gray-800" />
      </div>

      <div>
        <button
          type="button"
          className="h-10 scale-100 appearance-none rounded-lg bg-green-600 px-5 text-sm font-semibold leading-snug text-white transition-colors hover:bg-green-500 active:scale-[0.98] dark:bg-green-600 dark:hover:bg-green-500"
        >
          Create client
        </button>
      </div>
    </div>
  );
}
