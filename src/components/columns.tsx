"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import FormRegister from "./Form";
import { MemberType, useMembers } from "./context";
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
      const { remove } = useMembers();
      const [isOpenFormRegister, setIsOpenFormRegister] =
        useState<boolean>(false);
      const [isDelete, setIsDelete] = useState<boolean>(false);
      const handleOpenUpdateForm = () => {
        if (isOpenFormRegister) {
          setIsOpenFormRegister(false);
        } else {
          setIsOpenFormRegister(true);
        }
      };
      const handleDelete = () => {
        remove(value.id);
      };
      return (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => {
                  setIsOpenFormRegister(true);
                }}
              >
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  setIsDelete(true);
                }}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Dialog
            open={isOpenFormRegister}
            onOpenChange={setIsOpenFormRegister}
          >
            <DialogHeader>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <DialogContent>
              <DialogHeader>
                <DialogTitle />
              </DialogHeader>
              <FormRegister
                data={value}
                handleOpenFormRegister={handleOpenUpdateForm}
              />
            </DialogContent>
          </Dialog>
          <AlertDialog open={isDelete} onOpenChange={setIsDelete}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle />
                <AlertDialogDescription className="  text-black text-xl">
                  Remove <span className="font-bold">{value.name}</span> from
                  this list?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className=" cursor-pointer">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  className=" cursor-pointer"
                  onClick={handleDelete}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
