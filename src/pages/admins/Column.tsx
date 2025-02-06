import { useMemo } from "react";

// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { type IAdmin } from "./Admins";

const useColumns = () => {
  const columns: ColumnDef<IAdmin, unknown>[] = useMemo(
    () => [
      //   {
      //     id: "select",
      //     header: ({ table }) => (
      //       <Checkbox
      //         checked={
      //           table.getIsAllPageRowsSelected() ||
      //           (table.getIsSomePageRowsSelected() && "indeterminate")
      //         }
      //         onCheckedChange={(value) =>
      //           table.toggleAllPageRowsSelected(!!value)
      //         }
      //         aria-label="Select all"
      //       />
      //     ),
      //     cell: ({ row }) => (
      //       <Checkbox
      //         checked={row.getIsSelected()}
      //         onCheckedChange={(value) => row.toggleSelected(!!value)}
      //         aria-label="Select row"
      //       />
      //     ),
      //     enableSorting: false,
      //     enableHiding: false,
      //   },

      {
        accessorKey: "fullName",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Full Name
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }) => (
          <div className="px-4 capitalize">{row.getValue("fullName")}</div>
        ),
      },

      {
        accessorKey: "email",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Email
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }) => (
          <div className="lowercase">{row.getValue("email")}</div>
        ),
      },
      {
        accessorKey: "phoneNumber",
        header: () => <div className="w-32">Phone Number</div>,
        cell: ({ row }) => {
          return <div>0{row.getValue("phoneNumber")}</div>;
        },
      },
      {
        accessorKey: "role",
        header: () => <div>Role</div>,
        cell: ({ row }) => {
          return <div className="font-medium">{row.getValue("role")}</div>;
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
          <div
            className={`font-semibold ${row.getValue("status") === "Active" ? "text-green-600" : "text-red-600"} font-semibold`}
          >
            {row.getValue("status")}
          </div>
        ),
      },
      // {
      //   id: "actions",
      //   enableHiding: false,
      //   cell: ({ row }) => {
      //     const admin = row.original;

      //     return (
      //       <DropdownMenu>
      //         <DropdownMenuTrigger asChild>
      //           <Button variant="ghost" className="h-8 w-8 p-0">
      //             <span className="sr-only">Open menu</span>
      //             <MoreHorizontal className="h-4 w-4" />
      //           </Button>
      //         </DropdownMenuTrigger>
      //         <DropdownMenuContent align="end">
      //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
      //           <DropdownMenuItem
      //             onClick={() => navigator.clipboard.writeText(admin.id)}
      //           >
      //             Copy admin Email
      //           </DropdownMenuItem>
      //           <DropdownMenuSeparator />
      //           <DropdownMenuItem>View Admin</DropdownMenuItem>
      //           <DropdownMenuItem>Deactivate Admin</DropdownMenuItem>
      //         </DropdownMenuContent>
      //       </DropdownMenu>
      //     );
      //   },
      // },
    ],
    [],
  );
  return columns;
};

export default useColumns;
