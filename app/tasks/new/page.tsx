import { Switch } from "@/components/primitives/switch";

export default function NewTaskPage() {
  return (
    <div>
      <h3 className="mb-1 text-xl font-semibold">Tasks</h3>
      <div className="mb-6 text-sm text-secondary">
        Once an task is added to your workspace, it can be added to any project
        and members can track time to it.
      </div>

      <div className="flex flex-col space-y-10">
        {/* Name */}
        <div className="flex flex-col">
          <div className="mb-5 flex flex-col">
            <p className="text-base font-semibold">Add task</p>
            <p className="mt-1 text-pretty text-sm text-secondary">
              A specific type of work you&apos;ll do for a project.
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
                placeholder="e.g. Design"
              />
            </div>
          </div>
        </div>

        {/* Billable rate */}
        <div className="flex flex-col">
          <div className="mb-5 flex flex-col">
            <p className="text-base font-semibold">Default billable rate</p>
            <p className="mt-1 text-pretty text-sm text-secondary">
              Adding a default billable rate will improve the accuracy of your
              reports.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="text-xs font-semibold text-secondary">Rate</span>
            <div className="inline">
              <div className="relative">
                <div className="absolute flex h-full w-8 items-center justify-center text-secondary">
                  <p>$</p>
                </div>
                <div>
                  <input
                    type="text"
                    className="flex w-40 rounded-lg bg-gray-100 py-3 pl-7 pr-20 text-sm outline-none transition-colors placeholder:text-placeholder hover:bg-gray-150 focus:bg-gray-150 dark:bg-gray-800 dark:hover:bg-gray-750 dark:focus:bg-gray-750"
                    autoComplete="off"
                    maxLength={4}
                  />
                </div>
                <div className="absolute right-0 top-0 flex h-full w-20 items-center justify-center text-secondary">
                  <p>Per hour</p>
                </div>
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
                  This task is billable by default
                </p>
              </div>
              <p className="mt-1 text-pretty text-sm text-secondary">
                Check This task is billable by default if the task is always
                billable. You&apos;ll still be able to change the billable
                status of the task per project, if necessary.
              </p>
            </div>
          </div>
          <div>
            <Switch />
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
                This is a common task, and should be added to all future
                projects
              </p>
            </div>
            <p className="mt-1 text-pretty text-sm text-secondary">
              Select This is a common task if you want it to be automatically
              added to all future projects.
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

      <div
        role="presentation"
        className="group flex cursor-pointer justify-between"
      >
        <div className="flex max-w-lg pr-2">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <p className="text-base font-semibold">
                Add this task to all existing projects
              </p>
            </div>
            <p className="mt-1 text-pretty text-sm text-secondary">
              Check Add this task to all existing projects if the task should
              also be assigned to your account’s existing projects.
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
          Create task
        </button>
      </div>
    </div>
  );
}
