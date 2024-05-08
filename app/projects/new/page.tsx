export default function NewProject() {
  return (
    <div>
      <div>
        <h3 className="mb-1 text-xl font-semibold">New project</h3>
        <div className="mb-6 text-sm text-secondary">
          Any planned work you&apos;ll do for a client.
        </div>
      </div>
      <div className="mb-6 flex flex-col rounded-xl border border-gray-100  dark:border-gray-850 dark:bg-gray-850">
        <div className="flex w-full flex-col p-5">
          {/* Name and email */}
          <div className="flex flex-col">
            <div className="mb-5 flex flex-col">
              <p className="text-base font-semibold">Project metadata</p>
              <p className="mt-1 text-pretty text-sm text-secondary">
                The following information is required to add a client contact.
              </p>
            </div>
            <div className="flex w-full space-x-2">
              <div className="flex flex-auto flex-col gap-2">
                <span className="text-xs font-semibold text-secondary">
                  Name
                  <span className="text-sm leading-none text-red-500">*</span>
                </span>
                <div>
                  <input
                    type="text"
                    className="flex w-full rounded-lg bg-gray-100 px-3 py-3 text-sm outline-none transition-colors placeholder:text-placeholder hover:bg-gray-150 focus:bg-gray-150 dark:bg-gray-800 dark:hover:bg-gray-750 dark:focus:bg-gray-750"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <span className="text-xs font-semibold text-secondary">
                  Code
                  <span className="text-sm leading-none text-red-500">*</span>
                </span>
                <div>
                  <input
                    type="text"
                    className="flex w-full rounded-lg bg-gray-100 px-3 py-3 text-sm outline-none transition-colors placeholder:text-placeholder hover:bg-gray-150 focus:bg-gray-150 dark:bg-gray-800 dark:hover:bg-gray-750 dark:focus:bg-gray-750"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-baseline">
              <small className="text-xxs font-black uppercase leading-snug tracking-wider text-blue-500 transition-colors dark:text-blue-400">
                NOTE
              </small>
              <small className="text-xs font-medium text-secondary">
                : A code can help identify your project. You can use any
                combination of numbers or letters
              </small>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col p-5">
          <div className="mb-5 flex flex-col">
            <p className="text-base font-semibold">Description</p>
            <p className="mt-1 text-pretty text-sm text-secondary">
              Optional. Notes are great for anything you need to reference
              later.
              {/* like invoice schedules, which you can see when creating an
              invoice for Fixed Fee projects. Notes can only be seen by
              Administrators. Administrators can control access to notes in
              Settings. */}
            </p>
          </div>
          <textarea
            className="min-h-[120px] w-full min-w-0 flex-1 resize-none rounded-xl bg-gray-100 px-4 pb-12 pt-4 text-sm text-primary placeholder-gray-400 outline-none dark:bg-gray-750 dark:placeholder-gray-400"
            placeholder="Optional description about the project"
          />
        </div>
        {/* Client */}
        <div className="flex flex-col p-5">
          <div className="mb-5 flex flex-col">
            <p className="text-base font-semibold">Client</p>
            <p className="mt-1 text-pretty text-sm text-secondary">
              The client is the person or company for whom you’re completing
              this work.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2">
            <span className="text-xs font-semibold text-secondary">
              Name
              <span className="text-sm leading-none text-red-500">*</span>
            </span>
            <div>
              <input
                type="text"
                className="flex w-full rounded-lg bg-gray-100 px-3 py-3 text-sm outline-none transition-colors placeholder:text-placeholder hover:bg-gray-150 focus:bg-gray-150 dark:bg-gray-800 dark:hover:bg-gray-750 dark:focus:bg-gray-750"
                autoComplete="off"
                placeholder="e.g. Design Studio"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="my-8">
        <hr className="h-px w-full border-0 bg-gray-100 transition-colors dark:bg-gray-800" />
      </div> */}

      {/* Permissions */}
      {/* <div className="flex flex-col">
        <div className="mb-5 flex flex-col">
          <p className="text-base font-semibold">Permissions</p>
          <p className="mt-1 text-pretty text-sm text-secondary">
            Optional. Your invoices will automatically bill in the selected
            currency.
          </p>
        </div>
        <div className="flex flex-col space-y-1.5" role="radiogroup">
          <div
            tabIndex={-1}
            className="focus-visible:scale-102 relative flex w-full cursor-pointer items-center rounded-lg bg-gray-100 p-3 transition-all duration-300 hover:bg-gray-150/80 focus-visible:bg-gray-150 dark:bg-gray-800  dark:hover:bg-gray-750"
            aria-checked="false"
            role="radio"
          >
            <div className="bg-transparent flex aspect-square h-5 w-5 items-center justify-center rounded-full border-2 border-gray-300 transition-colors duration-300 dark:border-gray-400">
              <span className="flex h-2 w-2 origin-center scale-0 rounded-full bg-gray-150 transition-transform duration-300 dark:bg-gray-600"></span>
            </div>
            <div className="ml-2.5 flex flex-col text-left">
              <div className="flex">
                <p className="text-sm font-medium">
                  Show project report to Administrators and people who manage
                  this project
                </p>
              </div>
            </div>
          </div>
          <div
            tabIndex={0}
            className="focus-visible:scale-102 relative flex w-full cursor-pointer items-center rounded-lg bg-gray-100 p-3 transition-all duration-300 hover:bg-gray-150/80 focus-visible:bg-gray-150 dark:bg-gray-800  dark:hover:bg-gray-750"
            aria-checked="true"
            role="radio"
          >
            <div className="flex aspect-square h-5 w-5 items-center justify-center rounded-full border-2 border-gray-600 bg-gray-600 transition-colors duration-300 dark:border-gray-300 dark:bg-gray-300">
              <span className="flex h-2 w-2 origin-center scale-100 rounded-full bg-gray-150 transition-transform duration-300 dark:bg-gray-600"></span>
            </div>
            <div className="ml-2.5 flex flex-col text-left">
              <div className="flex">
                <p className="text-sm font-medium">
                  Show project report to everyone on this project
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8">
        <hr className="h-px w-full border-0 bg-gray-100 transition-colors dark:bg-gray-800" />
      </div>
       */}

      {/* Project type */}
      {/* <div className="mb-6 flex flex-col">
        <div className="mb-5 flex flex-col">
          <p className="text-base font-semibold">Project type</p>
          <p className="mt-1 text-pretty text-sm text-secondary">
            The project type drives how you’ll report on your projects and bill
            for the work you’ve done.
          </p>
        </div>
        <div className="flex flex-col space-y-1.5" role="radiogroup">
          <div
            className="focus-visible:scale-102 relative flex w-full cursor-pointer items-center rounded-lg bg-gray-100 p-3 transition-colors duration-300 hover:bg-gray-150/80 focus-visible:bg-gray-150 dark:bg-gray-700  dark:hover:bg-gray-600/80 dark:focus-visible:bg-gray-500/70"
            aria-checked="false"
            role="radio"
          >
            <div className="flex aspect-square h-5 w-5 items-center justify-center rounded-full border-2 border-gray-600 bg-gray-600 transition-colors duration-300 dark:border-gray-300 dark:bg-gray-300">
              <span className="flex h-2 w-2 origin-center scale-100 rounded-full bg-gray-150 transition-transform duration-300 dark:bg-gray-600"></span>
            </div>
            <div className="ml-2.5 flex flex-col text-left">
              <div className="flex">
                <p className="text-sm font-medium">Time & Materials</p>
              </div>
              <p className="mb-1 mt-0.5 text-xs text-secondary">
                Bill by the hour, with billable rates
              </p>
            </div>
          </div>
          <div
            className="focus-visible:scale-102 relative flex w-full cursor-pointer items-center rounded-lg bg-gray-100 p-3 transition-colors duration-300 hover:bg-gray-150/80 focus-visible:bg-gray-150 dark:bg-gray-700  dark:hover:bg-gray-600/80 dark:focus-visible:bg-gray-500/70"
            aria-checked="false"
            role="radio"
          >
            <div className="bg-transparent flex aspect-square h-5 w-5 items-center justify-center rounded-full border-2 border-gray-300 transition-colors duration-300 dark:border-gray-400">
              <span className="flex h-2 w-2 origin-center scale-0 rounded-full bg-gray-150 transition-transform duration-300 dark:bg-gray-600"></span>
            </div>
            <div className="ml-2.5 flex flex-col text-left">
              <div className="flex">
                <p className="text-sm font-medium">Fixed fee</p>
              </div>
              <p className="mb-1 mt-0.5 text-xs text-secondary">
                Bill a set price, regardless of time tracked
              </p>
            </div>
          </div>
          <div
            className="focus-visible:scale-102 relative flex w-full cursor-pointer items-center rounded-lg bg-gray-100 p-3 transition-colors duration-300 hover:bg-gray-150/80 focus-visible:bg-gray-150 dark:bg-gray-700  dark:hover:bg-gray-600/80 dark:focus-visible:bg-gray-500/70"
            aria-checked="false"
            role="radio"
          >
            <div className="bg-transparent flex aspect-square h-5 w-5 items-center justify-center rounded-full border-2 border-gray-300 transition-colors duration-300 dark:border-gray-400">
              <span className="flex h-2 w-2 origin-center scale-0 rounded-full bg-gray-150 transition-transform duration-300 dark:bg-gray-600"></span>
            </div>
            <div className="ml-2.5 flex flex-col text-left">
              <div className="flex">
                <p className="text-sm font-medium">Non-Billable</p>
              </div>
              <p className="mb-1 mt-0.5 text-xs text-secondary">
                Not billed to a client
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col">
        <div className="mb-5 flex flex-col">
          <p className="text-base font-semibold">Tasks</p>
          <p className="mt-1 text-pretty text-sm text-secondary">
            The project type drives how you’ll report on your projects and bill
            for the work you’ve done.
          </p>
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
                    Billable
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-3">
                    <p>Business development</p>
                  </td>

                  <td className="px-5 py-3 text-center">
                    <input type="checkbox" className="" />
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3">
                    <p>Design</p>
                  </td>

                  <td className="px-5 py-3 text-center">
                    <input type="checkbox" className="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
