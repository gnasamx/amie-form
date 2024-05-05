import { Switch } from "@/components/primitives/switch";

export default function Home() {
  return (
    <>
      <div>
        <h3 className="mb-1 text-xl font-semibold">Accounts</h3>
        <div className="text-secondary mb-6 text-sm">
          Manage account access and permissions
        </div>
      </div>
      <div className="bg-gray-75 dark:border-gray-850 dark:bg-gray-850 flex flex-col rounded-xl border border-gray-100">
        <div className="flex w-full flex-col p-5">
          <div className="mb-5 flex flex-col">
            <div className="flex items-center space-x-2">
              <p className="text-base font-semibold">Project code</p>
            </div>
            <p className="text-secondary mt-1 text-pretty text-sm">
              A code can help identify your project. You can use any combination
              of numbers or letters
            </p>
          </div>
          <div className="w-full">
            <input
              type="text"
              className="hover:bg-gray-150 focus:bg-gray-150 placeholder:text-placeholder dark:hover:bg-gray-750 dark:focus:bg-gray-750 flex w-full rounded-lg bg-gray-100 px-3 py-3 text-sm outline-none transition-colors dark:bg-gray-800"
              autoComplete="off"
              placeholder="e.g Berlin, Germany"
            />
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
                Display checkboxes on events
              </p>
            </div>
            <p className="text-secondary mt-1 text-pretty text-sm">
              Scheduled events with guests can be marked done in the calendar.
              When disabled, they are displayed as done automatically once they
              are over.
            </p>
          </div>
        </div>
        <div>
          <Switch />
        </div>
      </div>
      <div className="my-8">
        <hr className="h-px w-full border-0 bg-gray-100 transition-colors dark:bg-gray-800" />
      </div>
      <div>
        <button
          type="button"
          className="h-10 scale-100 appearance-none rounded-lg bg-green-600 px-5 text-sm font-semibold leading-snug text-white transition-colors hover:bg-green-500 active:scale-[0.98] dark:bg-green-600 dark:hover:bg-green-500"
        >
          Create project
        </button>
      </div>

      <div className="my-8">
        <hr className="h-px w-full border-0 bg-gray-100 transition-colors dark:bg-gray-800" />
      </div>

      <div className="dark:border-gray-750 flex flex-col rounded-xl border border-gray-100">
        <div className="border-separator/10 flex items-center border-b py-4 pl-4 pr-4">
          <div className="flex grow items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-medium text-green-600 dark:bg-green-900 dark:text-green-400">
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
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-medium">New account</span>
              <span className="text-secondary -mt-0.5 font-medium">
                Select permissions to connect
              </span>
            </div>
          </div>
          <button
            type="button"
            className="ui-open:bg-gray-150 ui-open:text-gray-800 dark:ui-open:bg-gray-750 dark:ui-open:text-gray-100 text-secondary aria-expanded:bg-gray-150 state-open:bg-gray-150 state-open:text-gray-800 dark:aria-expanded:bg-gray-750 dark:state-open:bg-gray-750 dark:state-open:text-gray-100 flex h-7 min-w-[28px] shrink-0 scale-100 appearance-none items-center justify-center rounded-lg font-medium transition-colors hover:bg-gray-100 hover:text-gray-800 focus-visible:ring-2 active:scale-[0.98] aria-expanded:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:aria-expanded:text-gray-100"
            data-state="closed"
          >
            <span className="rotate-45">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M7 0C7.26522 0 7.51957 0.105357 7.70711 0.292893C7.89464 0.48043 8 0.734784 8 1V6H13C13.2652 6 13.5196 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7C14 7.26522 13.8946 7.51957 13.7071 7.70711C13.5196 7.89464 13.2652 8 13 8H8V13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V8H1C0.734784 8 0.48043 7.89464 0.292893 7.70711C0.105357 7.51957 0 7.26522 0 7C0 6.73478 0.105357 6.48043 0.292893 6.29289C0.48043 6.10536 0.734784 6 1 6H6V1C6 0.734784 6.10536 0.48043 6.29289 0.292893C6.48043 0.105357 6.73478 0 7 0Z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div className="flex w-full flex-col p-5">Hello</div>
      </div>
    </>
  );
}
