import z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { MemberType, useMembers } from "./context";

const registerForm = z.object({
  name: z.string().trim().nonempty({ message: "Please enter your name" }),
  email: z
    .string()
    .trim()
    .nonempty({ message: "Please enter your email" })
    .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
      message: "Please enter a valid email.",
    }),
  gender: z.enum(["male", "female", "other"], {
    message: "Gender is require",
  }),

  address: z.string().trim().nonempty({ message: "Please enter your address" }),
  dateOfBirth: z.string().nonempty({ message: "Date of birth is require" }),
});

function FormRegister({
  handleOpenFormRegister,
  data,
}: {
  handleOpenFormRegister: () => void;
  data?: MemberType;
}) {
  const { add, update } = useMembers();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof registerForm>>({
    resolver: zodResolver(registerForm),
    defaultValues: data && {
      name: data.name,
      email: data.email,
      address: data.address,
      gender: data.gender,
      dateOfBirth: data.dateOfBirth,
    },
  });
  const onSubmit = (dataForm: z.infer<typeof registerForm>) => {
    if (data) {
      update(data.id, dataForm);
    } else {
      add(dataForm);
    }
    handleOpenFormRegister();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-3">
        <label className=" ">
          <p>Name</p>
          <Input
            type="text"
            id="name"
            className="mt-1 outline-none focus-visible:outline-none focus-visible:ring-0  "
            placeholder="Name"
            {...register("name")}
          />
          {errors.name && (
            <p className=" text-red-500 text-[14px]">{errors.name.message}</p>
          )}
        </label>
        <label className=" ">
          <p>Email</p>
          <Input
            type="text"
            id="email"
            className="mt-1 outline-none focus-visible:outline-none focus-visible:ring-0  "
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <p className=" text-red-500 text-[14px]">{errors.email.message}</p>
          )}
        </label>
        <label className=" ">
          <p> Address</p>
          <Input
            type="text"
            id="address"
            className="mt-1 outline-none focus-visible:outline-none focus-visible:ring-0  "
            placeholder=" Address"
            {...register("address")}
          />
          {errors.address && (
            <p className=" text-red-500 text-[14px]">
              {errors.address.message}
            </p>
          )}
        </label>
        <div className=" flex gap-4 items-center justify-between">
          <label className=" flex-1">
            <p>Gender</p>

            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className=" w-full">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.gender && (
              <p className=" text-red-500 text-[14px]">
                {errors.gender.message}
              </p>
            )}
          </label>

          <label className="flex-1 ">
            <p>Date of Birth</p>
            <Input
              id="dateOfBirdts"
              type="date"
              className=" outline-none focus-visible:outline-none focus-visible:ring-0  "
              placeholder="Date of Birth"
              {...register("dateOfBirth")}
            />
            {errors.dateOfBirth && (
              <p className=" text-red-500 text-[14px]">
                {errors.dateOfBirth.message}
              </p>
            )}
          </label>
        </div>
        <Button type="submit" className="py-4 cursor-pointer">
          {data ? "Update" : "Submit"}
        </Button>
      </form>
    </div>
  );
}

export default FormRegister;
