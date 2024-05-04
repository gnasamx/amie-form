export default function Home() {
  return (
    <main className="flex h-screen w-full">
      <div className="flex flex-col">
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
            className="hover:bg-gray-150 focus:bg-gray-150 placeholder:text-placeholder flex w-full rounded-lg bg-gray-100 px-3 py-3 text-sm outline-none transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600"
            autoComplete="off"
            placeholder="e.g Berlin, Germany"
          />
        </div>
      </div>
    </main>
  );
}
