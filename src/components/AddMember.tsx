import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import FormRegister from "./Form";
function AddMember({ title }: { title: String }) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className=" py-2 px-4 bg-black rounded-[10px] hover:bg-[#2e2e2e] text-white cursor-pointer">
          {title}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle />
        </DialogHeader>
        <FormRegister />
      </DialogContent>
    </Dialog>
  );
}

export default AddMember;
