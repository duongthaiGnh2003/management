"use client";
import React, { createContext, useCallback, useContext, useState } from "react";

export type MemberType = {
  id: string;
  name: string;
  gender: "male" | "female" | "other";
  email: string;
  address: string;
  dateOfBirth: string;
};

type Ctx = {
  data: MemberType[];
  add: (item: Omit<MemberType, "id">) => void;
  update: (id: string, patch: Partial<Omit<MemberType, "id">>) => void;
  remove: (id: string) => void;
  setAll: React.Dispatch<React.SetStateAction<MemberType[]>>;
};
export const initArraydata: MemberType[] = [
  {
    id: "1",
    name: "Nguyen Van An",
    dateOfBirth: "2003-08-20",
    gender: "male",
    email: "an.nguyen@example.com",
    address: "Tokyo, Japan",
  },
  {
    id: "2",
    name: "Tran Thi Mai",
    dateOfBirth: "1994-05-21",
    gender: "female",
    email: "mai.tran@example.com",
    address: "Seoul, Korea",
  },
  {
    id: "3",
    name: "John Smith",
    dateOfBirth: "2000-04-12",
    gender: "male",
    email: "john.smith@example.com",
    address: "New York, USA",
  },
  {
    id: "4",
    name: "Le Hoang Phuc",
    dateOfBirth: "2005-09-06",
    gender: "male",
    email: "phuc.le@example.com",
    address: "Ho Chi Minh City, Vietnam",
  },
  {
    id: "5",
    name: "Aiko Tanaka",
    dateOfBirth: "2009-09-22",
    gender: "female",
    email: "aiko.tanaka@example.com",
    address: "Osaka, Japan",
  },
];

const MembersContext = createContext<Ctx | undefined>(undefined);

export function MembersProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<MemberType[]>(initArraydata);

  const add = useCallback((item: Omit<MemberType, "id">) => {
    setData((prev) => {
      const lastIdNum = prev.length ? Number(prev[prev.length - 1].id) : 0;
      const newId = String(isNaN(lastIdNum) ? prev.length + 1 : lastIdNum + 1);
      return [...prev, { id: newId, ...item }];
    });
  }, []);

  const update = useCallback(
    (id: string, patch: Partial<Omit<MemberType, "id">>) => {
      setData((prev) =>
        prev.map((m) => (m.id === id ? { ...m, ...patch } : m))
      );
    },
    []
  );

  const remove = useCallback((id: string) => {
    setData((prev) => prev.filter((m) => m.id !== id));
  }, []);

  return (
    <MembersContext.Provider
      value={{ data, add, update, remove, setAll: setData }}
    >
      {children}
    </MembersContext.Provider>
  );
}

export function useMembers() {
  const ctx = useContext(MembersContext);
  if (!ctx) throw new Error("useMembers must be used within MembersProvider");
  return ctx;
}
