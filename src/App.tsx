import { DarkThemeToggle } from "flowbite-react";
import ListUsers from "./components/ListUsers";
import { CreateNewUser } from "./components/CreateNewUser";

export default function App() {
  return (
    <>
      <main className="bg-white px-4 py-10 dark:bg-gray-900">
        <div className="m-auto flex min-h-screen max-w-2xl flex-col items-center">
          <div className="absolute top-4 right-4">
            <DarkThemeToggle />
          </div>
          <CreateNewUser />
          <ListUsers />
        </div>
      </main>
    </>
  );
}
