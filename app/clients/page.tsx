export default function ClientsPage() {
  return (
    <div>
      <h3 className="mb-1 text-xl font-semibold">Clients</h3>
      <div className="mb-6 text-sm text-secondary">
        A client is a company or person you&apos;re doing work for.
      </div>
      <div className="mb-6 flex justify-between gap-3">
        <div className="relative flex grow">
          <div className="text-tertiary absolute flex h-full w-8 items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.97168 11.4224C6.94287 11.4224 7.85693 11.1431 8.63135 10.6606L11.2466 13.2759C11.4561 13.4854 11.7417 13.5869 12.0337 13.5869C12.6494 13.5869 13.1128 13.1108 13.1128 12.4951C13.1128 12.2158 13.0176 11.9365 12.8018 11.7271L10.2119 9.13086C10.7451 8.32471 11.0498 7.36621 11.0498 6.33789C11.0498 3.54492 8.76465 1.25342 5.97168 1.25342C3.17871 1.25342 0.887207 3.53857 0.887207 6.33789C0.887207 9.13086 3.17871 11.4224 5.97168 11.4224ZM5.97168 9.87354C4.02295 9.87354 2.42969 8.28027 2.42969 6.33789C2.42969 4.39551 4.02295 2.80225 5.97168 2.80225C7.91406 2.80225 9.50732 4.39551 9.50732 6.33789C9.50732 8.28027 7.91406 9.87354 5.97168 9.87354Z"
                fill="currentColor"
                stroke-width="0"
                stroke="white"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            className="flex rounded-lg bg-gray-100 py-3 pl-8 pr-3 text-sm outline-none transition-colors placeholder:text-placeholder hover:bg-gray-150 focus:bg-gray-150 dark:bg-gray-800 dark:hover:bg-gray-750 dark:focus:bg-gray-750"
            autoComplete="off"
            placeholder="Filter by client or contact"
          />
        </div>
        <button
          type="button"
          className="flex scale-100 appearance-none items-center gap-1.5 rounded-lg bg-gray-900 pl-2.5 pr-3 font-semibold text-white transition-colors hover:bg-gray-850 active:scale-[0.98] dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="none"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M6 2v8M10 6H2"
            ></path>
          </svg>
          New client
        </button>
      </div>

      <div className="flex flex-col gap-5">
        <span className="text-sm font-semibold text-gray-500">
          Pinned clients
        </span>
        <div className="grid grid-cols-1 gap-3">
          {/* Linear */}
          <div
            role="presentation"
            className="border-black/7 flex items-center justify-between gap-3.5 rounded-xl border bg-white p-4 dark:bg-gray-740"
          >
            <div className="flex w-full items-start gap-3.5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg">
                <div className="flex h-full w-full items-center justify-center bg-gray-75 p-3 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h2A1.5 1.5 0 0 1 7 3.5v2A1.5 1.5 0 0 1 5.5 7h-2A1.5 1.5 0 0 1 2 5.5v-2ZM2 10.5A1.5 1.5 0 0 1 3.5 9h2A1.5 1.5 0 0 1 7 10.5v2A1.5 1.5 0 0 1 5.5 14h-2A1.5 1.5 0 0 1 2 12.5v-2ZM10.5 2A1.5 1.5 0 0 0 9 3.5v2A1.5 1.5 0 0 0 10.5 7h2A1.5 1.5 0 0 0 14 5.5v-2A1.5 1.5 0 0 0 12.5 2h-2ZM11.5 9a.75.75 0 0 1 .75.75v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0v-1h-1a.75.75 0 0 1 0-1.5h1v-1A.75.75 0 0 1 11.5 9Z"></path>
                  </svg>
                </div>
              </div>
              <div className="h-fit-content flex flex-col">
                <p className="flex-grow whitespace-nowrap text-base font-semibold">
                  Linear
                </p>
                <p className="w-full text-balance text-sm text-secondary">
                  Long Island City New York, US
                </p>
              </div>
            </div>
            <div className="ml-auto flex flex-col">
              <div className="flex items-center space-x-1">
                <button
                  aria-label="connection-menu"
                  type="button"
                  className="ui-open:bg-gray-150 ui-open:text-gray-800 dark:ui-open:bg-gray-750 dark:ui-open:text-gray-100 state-open:bg-gray-150 state-open:text-gray-800 dark:state-open:bg-gray-750 dark:state-open:text-gray-100 flex h-7 min-w-[28px] shrink-0 scale-100 appearance-none items-center justify-center rounded-lg font-medium text-secondary transition-colors hover:bg-gray-100 hover:text-gray-800 focus-visible:ring-2 active:scale-[0.98] aria-expanded:bg-gray-150 aria-expanded:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:aria-expanded:bg-gray-750 dark:aria-expanded:text-gray-100"
                  id="radix-:r1fo:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                  data-dropdownstate="closed"
                >
                  <svg
                    className="h-5 w-5 rotate-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <span className="text-sm font-semibold text-gray-500">
          Other clients
        </span>
        <div className="grid grid-cols-1 gap-3">
          {/* Other client 1 */}
          <div
            role="presentation"
            className="border-black/7 flex items-center justify-between gap-3.5 rounded-xl border bg-white p-4 dark:bg-gray-740"
          >
            <div className="flex w-full items-start gap-3.5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg">
                <div className="flex h-full w-full items-center justify-center bg-gray-75 p-3 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h2A1.5 1.5 0 0 1 7 3.5v2A1.5 1.5 0 0 1 5.5 7h-2A1.5 1.5 0 0 1 2 5.5v-2ZM2 10.5A1.5 1.5 0 0 1 3.5 9h2A1.5 1.5 0 0 1 7 10.5v2A1.5 1.5 0 0 1 5.5 14h-2A1.5 1.5 0 0 1 2 12.5v-2ZM10.5 2A1.5 1.5 0 0 0 9 3.5v2A1.5 1.5 0 0 0 10.5 7h2A1.5 1.5 0 0 0 14 5.5v-2A1.5 1.5 0 0 0 12.5 2h-2ZM11.5 9a.75.75 0 0 1 .75.75v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0v-1h-1a.75.75 0 0 1 0-1.5h1v-1A.75.75 0 0 1 11.5 9Z"></path>
                  </svg>
                </div>
              </div>
              <div className="h-fit-content flex flex-col">
                <p className="flex-grow whitespace-nowrap text-base font-semibold">
                  VShift
                </p>
                <p className="w-full text-balance text-sm text-secondary">
                  1250 Broadway, New York, NY 10001, United States
                </p>
              </div>
            </div>
            <div className="ml-auto flex flex-col">
              <div className="flex items-center space-x-1">
                <button
                  aria-label="connection-menu"
                  type="button"
                  className="ui-open:bg-gray-150 ui-open:text-gray-800 dark:ui-open:bg-gray-750 dark:ui-open:text-gray-100 state-open:bg-gray-150 state-open:text-gray-800 dark:state-open:bg-gray-750 dark:state-open:text-gray-100 flex h-7 min-w-[28px] shrink-0 scale-100 appearance-none items-center justify-center rounded-lg font-medium text-secondary transition-colors hover:bg-gray-100 hover:text-gray-800 focus-visible:ring-2 active:scale-[0.98] aria-expanded:bg-gray-150 aria-expanded:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:aria-expanded:bg-gray-750 dark:aria-expanded:text-gray-100"
                  id="radix-:r1fo:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                  data-dropdownstate="closed"
                >
                  <svg
                    className="h-5 w-5 rotate-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Other client 2 */}
          <div
            role="presentation"
            className="border-black/7 flex items-center justify-between gap-3.5 rounded-xl border bg-white p-4 dark:bg-gray-740"
          >
            <div className="flex w-full items-start gap-3.5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg">
                <div className="flex h-full w-full items-center justify-center bg-gray-75 p-3 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h2A1.5 1.5 0 0 1 7 3.5v2A1.5 1.5 0 0 1 5.5 7h-2A1.5 1.5 0 0 1 2 5.5v-2ZM2 10.5A1.5 1.5 0 0 1 3.5 9h2A1.5 1.5 0 0 1 7 10.5v2A1.5 1.5 0 0 1 5.5 14h-2A1.5 1.5 0 0 1 2 12.5v-2ZM10.5 2A1.5 1.5 0 0 0 9 3.5v2A1.5 1.5 0 0 0 10.5 7h2A1.5 1.5 0 0 0 14 5.5v-2A1.5 1.5 0 0 0 12.5 2h-2ZM11.5 9a.75.75 0 0 1 .75.75v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0v-1h-1a.75.75 0 0 1 0-1.5h1v-1A.75.75 0 0 1 11.5 9Z"></path>
                  </svg>
                </div>
              </div>
              <div className="h-fit-content flex flex-col">
                <p className="flex-grow whitespace-nowrap text-base font-semibold">
                  Contentful
                </p>
                <p className="w-full text-balance text-sm text-secondary">
                  Berlin, Germany
                </p>
              </div>
            </div>
            <div className="ml-auto flex flex-col">
              <div className="flex items-center space-x-1">
                <button
                  aria-label="connection-menu"
                  type="button"
                  className="ui-open:bg-gray-150 ui-open:text-gray-800 dark:ui-open:bg-gray-750 dark:ui-open:text-gray-100 state-open:bg-gray-150 state-open:text-gray-800 dark:state-open:bg-gray-750 dark:state-open:text-gray-100 flex h-7 min-w-[28px] shrink-0 scale-100 appearance-none items-center justify-center rounded-lg font-medium text-secondary transition-colors hover:bg-gray-100 hover:text-gray-800 focus-visible:ring-2 active:scale-[0.98] aria-expanded:bg-gray-150 aria-expanded:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:aria-expanded:bg-gray-750 dark:aria-expanded:text-gray-100"
                  id="radix-:r1fo:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                  data-dropdownstate="closed"
                >
                  <svg
                    className="h-5 w-5 rotate-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
