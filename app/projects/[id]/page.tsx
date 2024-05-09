export default function NewProject() {
  return (
    <div>
      <div>
        <p className="text-sm text-secondary">Client A</p>
        <div className="flex items-center gap-1">
          <h3 className="mb-1 text-xl font-semibold">
            Time & Materials Project
          </h3>
          <div className="relative -top-px flex items-center self-center rounded-lg border border-green-500 px-1.5 py-1 text-green-500 dark:border-green-500 dark:text-green-500">
            <small className="text-[10px] font-black uppercase leading-3 tracking-wider transition-colors">
              Time & Materials
            </small>
          </div>
        </div>
        <div className="mb-6 text-sm text-secondary">
          Time & Materials projects bill by the hour at a specific billable
          rate. The more hours you work, the more you charge. Note: Sample
          projects can be removed from account settings.
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex-1 rounded-2xl border border-separator/10">
          <div className="flex w-full flex-col gap-1 px-4 pb-4 pt-3.5">
            <div className="flex items-center gap-1">
              <p className="font-medium">Total hours</p>
            </div>
            <p className="text-xl font-bold">142.00</p>
            <div className="flex flex-col items-baseline gap-1">
              <div className="flex items-baseline gap-1 font-extrabold">
                <span className="font-medium text-secondary">Billable</span>
                115.25
              </div>
              <div className="flex items-baseline gap-1 font-extrabold">
                <span className="font-medium text-secondary">Non-Billable</span>
                26.75
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-2xl border border-separator/10">
          <div className="flex h-full w-full flex-col gap-1 px-4 pb-4 pt-3.5">
            <div className="flex items-center gap-1">
              <p className="font-medium">Budget remaining</p>
            </div>
            <p className="flex-1 text-xl font-bold">$2,957.00</p>
            <div className="flex flex-row items-center justify-between gap-1">
              <div className="flex items-center gap-1 font-extrabold">
                <span className="font-medium text-secondary">Total budget</span>
                $23,080.00
              </div>
              {/* <div className="flex items-center gap-2">
                <svg
                  fill="none"
                  height="20"
                  strokeWidth="2"
                  viewBox="0 0 100 100"
                  width="20"
                  className="h-5 w-5 flex-shrink-0"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="42.5"
                    strokeWidth="15px"
                    strokeDasharray={"783.298645px, 267.03537px"}
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="rgb(205, 205, 205)"
                  ></circle>
                  <circle
                    cx="50"
                    cy="50"
                    r="42.5"
                    strokeWidth="15px"
                    strokeDashoffset="0"
                    strokeDasharray={"220.301501px, 267.03537px"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="rgb(56, 129, 207)"
                  ></circle>
                </svg>
                <span className="font-extrabold">87%</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
