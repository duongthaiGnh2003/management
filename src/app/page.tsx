"use client";
import { columns } from "@/components/columns";
import { useMembers } from "@/components/context";
import { DataTable } from "@/components/data-table";

export default function Home() {
  const { data } = useMembers();

  return (
    <div className="font-sans m-auto max-w-[1200px]  min-h-screen p-8 pb-20  sm:p-20">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
