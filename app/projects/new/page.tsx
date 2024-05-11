import { Switch } from "@/components/primitives/switch";

export default function NewProject() {
  return (
    <div>
      <div>
        <h3 className="mb-1 text-xl font-semibold">New project</h3>
        <div className="mb-6 text-sm text-secondary">
          Any planned work you&apos;ll do for a client.
        </div>
      </div>
      <div className="mb-6 flex flex-col rounded-xl border border-separator/10 dark:bg-gray-850">
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

      <div className="flex flex-col">
        <div className="mb-5 flex flex-col">
          <p className="text-base font-semibold">Add tasks to the project</p>
          <p className="mt-1 text-pretty text-sm text-secondary">
            Don’t forget to mark them as billable (and enter rates) or
            non-billable.
          </p>
        </div>
        <div>
          <div className="rounded-xl border border-separator/10">
            <div className="border-b border-b-separator/10 p-5 last:border-b-0">
              <div className="flex w-full items-center justify-between">
                <div className="flex max-w-lg pr-2">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold">Design</span>
                    <div className="flex items-center gap-1 text-sm text-secondary">
                      <span>View, create, and update events</span>
                    </div>
                  </div>
                </div>
                <Switch />
              </div>
            </div>
            <div className="border-b border-b-separator/10 p-5 last:border-b-0">
              <div className="flex w-full items-center justify-between">
                <div className="flex max-w-lg pr-2">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold">Programming</span>
                    <div className="flex items-center gap-1 text-sm text-secondary">
                      <span>View, create, and update events</span>
                    </div>
                  </div>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
