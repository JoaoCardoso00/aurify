"use client";

const activityItems = [
  {
    id: 1,
    identifier: "AU_1234BR",
    description: "Em rota para unidade de refino",
    date: "1h",
    dateTime: "2023-01-23T11:00",
  },
  // More items...
];

const statuses = {
  inactive: "text-gray-500 bg-gray-100/10",
  ok: "text-green-400 bg-green-400/10",
  error: "text-rose-400 bg-rose-400/10",
};

const deployments = [
  {
    id: 1,
    href: "/dashboard/1",
    alias: "AU_1234BR",
    status: "ok",
    statusText: "Em rota para unidade de refino",
    description: "4a2d1137-d9a2-4171-a21a-20d8ac6c5f31",
    environment: "Ouro",
  },
];

import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  TruckIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const navigation = [
  { name: "Inicio", href: "#", icon: HomeIcon, current: true },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="lg:pr-96">
      <div>
        <ul role="list" className="divide-y divide-white/5">
          {deployments.map((deployment) => (
            <li
              key={deployment.id}
              className="relative flex items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="min-w-0 flex-auto">
                <div className="flex items-center gap-x-3">
                  <div
                    className={classNames(
                      //@ts-expect-error
                      statuses[deployment.status],
                      "flex-none rounded-full p-1"
                    )}
                  >
                    <div className="h-2 w-2 rounded-full bg-current" />
                  </div>
                  <h2 className="min-w-0 text-sm font-semibold leading-6 text-gray-700">
                    <Link href={deployment.href} className="flex gap-x-2">
                      <span className="whitespace-nowrap">
                        {deployment.alias}
                      </span>
                      <span className="absolute inset-0" />
                    </Link>
                  </h2>
                </div>
                <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
                  <p className="truncate">{deployment.description}</p>
                  <svg
                    viewBox="0 0 2 2"
                    className="h-0.5 w-0.5 flex-none fill-gray-300"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <p className="whitespace-nowrap">{deployment.statusText}</p>
                </div>
              </div>
              {/* <div
            className={classNames(
              environments[deployment.environment],
              "rounded-full flex-none py-1 px-2 text-xs font-medium ring-1 ring-inset"
            )}
          >
            {deployment.environment}
          </div> */}
              <ChevronRightIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
      </div>

      <aside className="bg-white lg:fixed lg:bottom-0 lg:right-0 lg:top-16 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-gray-200">
        <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-gray-700">
            Atividades recentes
          </h2>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-indigo-400"
          >
            Ver todas
          </a>
        </header>
        <ul role="list" className="divide-y divide-white/5">
          {activityItems.map((item) => (
            <li key={item.id} className="px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-x-3">
                <TruckIcon className="h-6 w-6 flex-none rounded-full" />

                <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-gray-700">
                  {item.identifier}
                </h3>
                <time
                  dateTime={item.dateTime}
                  className="flex-none text-xs text-gray-600"
                >
                  {item.date}
                </time>
              </div>
              <p className="mt-3 truncate text-sm text-gray-500">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </aside>
    </main>
  );
}
