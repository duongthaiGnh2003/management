import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
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
} from "@/components/ui/alert-dialog";
import { MemberType, useMembers } from "./context";
import { useState } from "react";
import { Button } from "./ui/button";
import FormRegister from "./Form";
function Action({ value }: { value: MemberType }) {
  const { remove } = useMembers();
  const [isOpenFormRegister, setIsOpenFormRegister] = useState<boolean>(false);
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
      <Dialog open={isOpenFormRegister} onOpenChange={setIsOpenFormRegister}>
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
              Remove <span className="font-bold">{value.name}</span> from this
              list?
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
}

export default Action;
