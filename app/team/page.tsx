export default function TeamPage() {
  return (
    <div>
      <h3 className="mb-6 text-xl font-semibold">
        <span className="text-gray-400">This week / </span>29 Apr – 05 May 2024
      </h3>
      <div className="mb-6 flex flex-col">
        <div className="rounded-2xl border border-separator/10 p-6 shadow-feint">
          <div className=" flex w-full flex-col items-center justify-center">
            <p className="text-2xl font-bold">Linear team</p>
            <p className="text-sm text-secondary">The everyday package.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 grid-rows-2 gap-3">
            {/* Card one */}
            <div className="relative flex w-full flex-col rounded-xl border border-black/7 bg-gray-50/90 text-primary dark:border-white/[0.08] dark:bg-gray-800/90">
              <div className="flex w-full flex-col gap-1 px-4 pb-4 pt-3.5">
                <div className="flex items-center">
                  <p className="text-secondary">Total hours</p>
                </div>
                <p className="text-lg font-bold">105</p>
              </div>
            </div>
            {/* Card one */}
            <div className="relative flex w-full flex-col rounded-xl border border-black/7 bg-gray-50/90 text-primary dark:border-white/[0.08] dark:bg-gray-800/90">
              <div className="flex w-full flex-col gap-1 px-4 pb-4 pt-3.5">
                <div className="flex items-center">
                  <p className="text-secondary">Total hours</p>
                </div>
                <p className="text-lg font-bold">105</p>
              </div>
            </div>
            {/* Card one */}
            <div className="relative col-span-2 flex w-full flex-col rounded-xl border border-black/7 bg-gray-50/90 text-primary dark:border-white/[0.08] dark:bg-gray-800/90">
              <div className="flex w-full flex-col gap-1 px-4 pb-4 pt-3.5">
                <div className="flex items-center">
                  <p className="text-secondary">Total hours</p>
                </div>
                <p className="text-lg font-bold">105</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mb-2 flex border-b border-separator/10 pb-3">
          <div className="flex w-6/12">
            <small className="text-xxs font-black uppercase leading-snug tracking-wider text-secondary transition-colors">
              Name
            </small>
          </div>
          <div className="flex w-2/12">
            <small className="text-xxs font-black uppercase leading-snug tracking-wider text-secondary transition-colors">
              Hours
            </small>
          </div>
          <div className="flex w-2/12">
            <small className="text-xxs font-black uppercase leading-snug tracking-wider text-secondary transition-colors">
              Capacity
            </small>
          </div>
          <div className="flex w-2/12">
            <small className="text-xxs font-black uppercase leading-snug tracking-wider text-secondary transition-colors">
              Billable hours
            </small>
          </div>
          <div className="flex w-8 justify-end"></div>
        </div>
        <div className="flex items-center py-3.5">
          <div className="flex w-6/12 items-center gap-2 truncate pr-3">
            <div
              className="relative flex items-center justify-center transition-all"
              style={{ width: "24px", height: "24px" }}
            >
              <div
                className="flex h-full w-full  items-center justify-center rounded-full bg-gray-150 text-gray-550 dark:bg-gray-650 dark:text-gray-200"
                style={{
                  backgroundColor: "rgb(151, 208, 237)",
                  color: "rgb(50, 79, 93)",
                }}
              >
                <span className="text-xs font-black">A</span>
              </div>
            </div>
            <p className="truncate text-sm font-semibold">Amy Smith</p>
            <div className="flex w-[90px] items-center justify-center rounded-full bg-gray-100 px-3.5 py-1.5 text-secondary dark:bg-gray-750">
              <small className="text-xxs font-black uppercase leading-[16px] tracking-wider transition-colors">
                Admin
              </small>
            </div>
          </div>
          <div className="flex w-2/12 items-center truncate pr-3">
            <p className="truncate text-sm font-medium text-secondary">24</p>
          </div>
          <div className="flex w-2/12 items-center gap-0.5">
            <p className="truncate text-sm font-medium text-secondary">35</p>
          </div>
          <div className="flex w-2/12 items-center truncate pr-3">
            <p className="truncate text-sm font-medium text-secondary">5</p>
          </div>
          <div className="flex w-8 items-center justify-end">
            <button
              type="button"
              className="flex scale-100 cursor-pointer appearance-none text-secondary transition-transform active:scale-[0.98]"
              id="radix-:r5e:"
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
        <div className="flex items-center py-3.5">
          <div className="flex w-6/12 items-center gap-2 truncate pr-3">
            <div
              className="relative flex items-center justify-center transition-all"
              style={{ width: "24px", height: "24px" }}
            >
              <div
                className="flex h-full w-full items-center justify-center rounded-full bg-gray-150 text-gray-550 dark:bg-gray-650 dark:text-gray-200"
                style={{
                  backgroundColor: "rgb(235, 213, 255)",
                  color: "rgb(50, 79, 93)",
                }}
              >
                <span className="text-xs font-black">L</span>
              </div>
            </div>
            <p className="truncate text-sm font-semibold">Lisa Price</p>
          </div>
          <div className="flex w-2/12 items-center truncate pr-3">
            <p className="truncate text-sm font-medium text-secondary">44</p>
          </div>
          <div className="flex w-2/12 items-center gap-0.5">
            <p className="truncate text-sm font-medium text-secondary">35</p>
          </div>
          <div className="flex w-2/12 items-center truncate pr-3">
            <p className="truncate text-sm font-medium text-secondary">12</p>
          </div>
          <div className="flex w-8 items-center justify-end">
            <button
              type="button"
              className="flex scale-100 cursor-pointer appearance-none text-secondary transition-transform active:scale-[0.98]"
              id="radix-:r5e:"
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
  );
}
