import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/index.css";
import ThemeProvider from "@/components/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danbam",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="bg-background relative flex h-screen w-full">
            {/* Sidebar */}
            <div
              className="bg-gray-75 h-full flex-1 overflow-y-scroll px-6 transition-colors dark:bg-gray-900"
              style={{ flexBasis: "320px" }}
            >
              <nav className="ml-auto flex w-44 flex-col py-12">
                <div className="relative">
                  <div className="-mt-1.5 flex flex-col">
                    <span className="text-secondary mb-1.5 mt-2 px-2 text-xs font-semibold">
                      User Settings
                    </span>
                    <div className="text-secondary hover:text-primary group relative my-0.5 flex cursor-pointer items-center rounded-lg px-2 py-1.5 text-left text-sm font-medium transition-colors hover:bg-gray-100 focus-visible:ring-2 dark:hover:bg-gray-800">
                      <div className="mr-2 text-gray-600 transition-colors dark:text-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <span className="flex-1">Profile</span>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            {/* Body */}
            <div
              className="dark:bg-gray-870 relative h-full flex-1 overflow-y-scroll bg-gray-50 transition-colors"
              style={{ flexBasis: "800px" }}
            >
              <div className="flex min-h-full w-full min-w-[520px] max-w-[740px] flex-col px-12 py-12">
                <h3 className="mb-5 text-xl font-semibold">Create project</h3>
                {children}
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
