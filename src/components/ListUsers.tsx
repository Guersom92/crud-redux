import {
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import User from "./User";
import { useAppSelector } from "../hooks/store";

export function ListUsers() {
  const users = useAppSelector((state) => state.users);

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Id</TableHeadCell>
            <TableHeadCell>Nombre</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Acciones</TableHeadCell>
            <TableHeadCell>
              <span className="sr-only">Edit</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ListUsers;
