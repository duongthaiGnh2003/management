"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

import { MemberType } from "./context";
import Action from "./Modal";
import { ArrowUpDown } from "lucide-react";
export const columns: ColumnDef<MemberType>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-right">ID</div>,
    cell: ({ row }) => {
      const value: string = row.getValue("id");

      return <p className="text-right font-medium">{value}</p>;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "dateOfBirth",
    header: () => <div className="text-right">Date of Birth</div>,
    cell: ({ row }) => {
      const value: string = row.getValue("dateOfBirth");
      return <div className="text-right font-medium">{value}</div>;
    },
  },
  {
    accessorKey: "gender",
    header: () => <div className="text-right">Gender</div>,
    cell: ({ row }) => {
      const value: string = row.getValue("gender");
      return <div className="text-right font-medium">{value}</div>;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "address",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Address
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const value: string = row.getValue("address");
      return <div className="text-right font-medium">{value}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const value = row.original;

      return <Action value={value} />;
    },
  },
];
