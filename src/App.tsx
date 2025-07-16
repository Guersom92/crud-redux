import { DarkThemeToggle } from "flowbite-react";
import ListUsers from "./components/ListUsers";

export default function App() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-white px-4 py-24 dark:bg-gray-900">
        <ListUsers />
        <div className="absolute top-4 right-4">
          <DarkThemeToggle />
        </div>
      </main>
    </>
  );
}
