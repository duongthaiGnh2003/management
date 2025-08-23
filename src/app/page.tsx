import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import Image from "next/image";
export type Payment = {
  id: string;
  name: string;
  dateOfBird: string;
  gender: "male" | "female";
  email: string;
  address: string;
};

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      name: "Nguyen Van An",
      dateOfBird: "20/08/2003",
      gender: "male",
      email: "an.nguyen@example.com",
      address: "Tokyo, Japan",
    },
    {
      id: "2",
      name: "Tran Thi Mai",
      dateOfBird: "15/03/2001",
      gender: "female",
      email: "mai.tran@example.com",
      address: "Seoul, Korea",
    },
    {
      id: "3",
      name: "John Smith",
      dateOfBird: "07/11/1999",
      gender: "male",
      email: "john.smith@example.com",
      address: "New York, USA",
    },
    {
      id: "4",
      name: "Le Hoang Phuc",
      dateOfBird: "02/06/2005",
      gender: "male",
      email: "phuc.le@example.com",
      address: "Ho Chi Minh City, Vietnam",
    },
    {
      id: "5",
      name: "Aiko Tanaka",
      dateOfBird: "12/12/2000",
      gender: "female",
      email: "aiko.tanaka@example.com",
      address: "Osaka, Japan",
    },
  ];
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="font-sans  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
