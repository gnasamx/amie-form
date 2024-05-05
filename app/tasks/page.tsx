export default function TasksPage() {
  return (
    <div>
      <h3 className="mb-1 text-xl font-semibold">Tasks</h3>
      <div className="mb-6 text-sm text-secondary">
        A specific type of work you&apos;ll do for a project. Time is tracked to
        tasks under a specific project.
      </div>
      <div className="mb-6 flex justify-end gap-3">
        <button
          type="button"
          className="flex h-9 scale-100 appearance-none items-center gap-1.5 rounded-lg bg-gray-900 py-3.5 pl-2.5 pr-3 font-semibold text-white transition-colors hover:bg-gray-850 active:scale-[0.98] dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-150"
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
              strokeWidth="2"
              d="M6 2v8M10 6H2"
            ></path>
          </svg>
          New task
        </button>
      </div>
      <div className="flex flex-col">
        <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-s bg-gray-75 px-5 py-4 text-left font-medium text-secondary dark:bg-gray-800/60">
                  Name
                </th>
                <th className="text-s bg-gray-75 px-5 py-4 text-center font-medium text-secondary dark:bg-gray-800/60">
                  Default billable rate
                </th>
                <th className="text-s bg-gray-75 px-5 py-4 text-left font-medium text-secondary dark:bg-gray-800/60"></th>
              </tr>
            </thead>
            <tbody className="my-1">
              <tr>
                <td className="truncate px-3 py-3.5 text-sm font-medium">
                  Business development
                </td>
                <td className="px-3 py-3.5 text-center text-sm font-medium text-secondary">
                  $10
                </td>
                <td className="w-7 px-3 py-3.5">
                  <div className="ml-auto flex flex-col">
                    <button
                      aria-label="connection-menu"
                      type="button"
                      className="ui-open:bg-gray-150 ui-open:text-gray-800 dark:ui-open:bg-gray-750 dark:ui-open:text-gray-100 state-open:bg-gray-150 state-open:text-gray-800 dark:state-open:bg-gray-750 dark:state-open:text-gray-100 flex h-7 min-w-[28px] shrink-0 scale-100 appearance-none items-center justify-center rounded-lg font-medium text-secondary transition-colors hover:bg-gray-100 hover:text-gray-800 focus-visible:ring-2 active:scale-[0.98] aria-expanded:bg-gray-150 aria-expanded:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:aria-expanded:bg-gray-750 dark:aria-expanded:text-gray-100"
                      id="radix-:rdu:"
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
                </td>
              </tr>
              <tr>
                <td className="truncate px-3 py-3.5 text-sm font-medium">
                  Design
                </td>
                <td className=" px-3 py-3.5 text-center text-sm font-medium text-secondary">
                  $15
                </td>
                <td className="w-7 px-3 py-3.5">
                  <div className="ml-auto flex flex-col">
                    <button
                      aria-label="connection-menu"
                      type="button"
                      className="ui-open:bg-gray-150 ui-open:text-gray-800 dark:ui-open:bg-gray-750 dark:ui-open:text-gray-100 state-open:bg-gray-150 state-open:text-gray-800 dark:state-open:bg-gray-750 dark:state-open:text-gray-100 flex h-7 min-w-[28px] shrink-0 scale-100 appearance-none items-center justify-center rounded-lg font-medium text-secondary transition-colors hover:bg-gray-100 hover:text-gray-800 focus-visible:ring-2 active:scale-[0.98] aria-expanded:bg-gray-150 aria-expanded:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:aria-expanded:bg-gray-750 dark:aria-expanded:text-gray-100"
                      id="radix-:rdu:"
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
                </td>
              </tr>
              <tr>
                <td className="truncate px-3 py-3.5 text-sm font-medium">
                  Meeting
                </td>
                <td className=" px-3 py-3.5 text-center text-sm font-medium text-secondary">
                  $5
                </td>
                <td className="w-7 px-3 py-3.5">
                  <div className="ml-auto flex flex-col">
                    <button
                      aria-label="connection-menu"
                      type="button"
                      className="ui-open:bg-gray-150 ui-open:text-gray-800 dark:ui-open:bg-gray-750 dark:ui-open:text-gray-100 state-open:bg-gray-150 state-open:text-gray-800 dark:state-open:bg-gray-750 dark:state-open:text-gray-100 flex h-7 min-w-[28px] shrink-0 scale-100 appearance-none items-center justify-center rounded-lg font-medium text-secondary transition-colors hover:bg-gray-100 hover:text-gray-800 focus-visible:ring-2 active:scale-[0.98] aria-expanded:bg-gray-150 aria-expanded:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:aria-expanded:bg-gray-750 dark:aria-expanded:text-gray-100"
                      id="radix-:rdu:"
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
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
