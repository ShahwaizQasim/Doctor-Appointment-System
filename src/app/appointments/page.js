"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export const data = [
    {
        user: "John Doe",
        appointmentTime: "9:30 AM",
        status: "Confirmed",
        appointmentDate: "2024-11-01",
        doctor: "Dr. Sarah Johnson",
    },
    {
        user: "Emma Wilson",
        appointmentTime: "2:15 PM",
        status: "Pending",
        appointmentDate: "2024-11-03",
        doctor: "Dr. Robert Smith",
    },
    {
        user: "Michael Brown",
        appointmentTime: "10:45 AM",
        status: "Cancelled",
        appointmentDate: "2024-11-05",
        doctor: "Dr. Emily Davis",
    },
    {
        user: "Sophia Lee",
        appointmentTime: "11:30 AM",
        status: "Confirmed",
        appointmentDate: "2024-11-08",
        doctor: "Dr. Michael Brown",
    },
    {
        user: "Daniel Parker",
        appointmentTime: "3:00 PM",
        status: "Pending",
        appointmentDate: "2024-11-09",
        doctor: "Dr. Lisa Thompson",
    },
    {
        user: "Olivia Garcia",
        appointmentTime: "8:15 AM",
        status: "Confirmed",
        appointmentDate: "2024-11-12",
        doctor: "Dr. Daniel Wilson",
    },
    {
        user: "James Anderson",
        appointmentTime: "2:30 PM",
        status: "Confirmed",
        appointmentDate: "2024-11-15",
        doctor: "Dr. Olivia Martinez",
    },
    {
        user: "Rachel Evans",
        appointmentTime: "9:45 AM",
        status: "Cancelled",
        appointmentDate: "2024-11-18",
        doctor: "Dr. Sophia Lee",
    },
    {
        user: "William Taylor",
        appointmentTime: "1:00 PM",
        status: "Pending",
        appointmentDate: "2024-11-20",
        doctor: "Dr. Christopher King",
    },
    {
        user: "Grace Martin",
        appointmentTime: "11:00 AM",
        status: "Confirmed",
        appointmentDate: "2024-11-23",
        doctor: "Dr. Rachel Evans",
    },
];

export const columns = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "doctor",
        header: "Doctor Name",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("doctor")}</div>
        ),
    },
    {
        accessorKey: "user",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Patient Name
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("user")}</div>,
    },
    {
        accessorKey: "appointmentDate",
        header: "Appointment Date",
        cell: ({ row }) => <div className="lowercase">{row.getValue("appointmentDate")}</div>,
    },
    {
        accessorKey: "appointmentTime",
        header: "Appointment Time",
        cell: ({ row }) => <div className="lowercase">{row.getValue("appointmentTime")}</div>,
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => <div className="lowercase">{row.getValue("status")}</div>,
    },

    {
        id: "actions",
        header: "Actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id)}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

export default function AppointmentsTable() {
    const [sorting, setSorting] = useState([])
    const [columnFilters, setColumnFilters] = useState([])
    const [columnVisibility, setColumnVisibility] = useState({})
    const [rowSelection, setRowSelection] = useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="container mx-auto min-h-screen my-10">
            <div className="w-full">
                <div className="flex items-center py-4 para">
                    <Input
                        placeholder="Search Patient..."
                        value={(table.getColumn("user")?.getFilterValue()) ?? ""}
                        onChange={(event) =>
                            table.getColumn("user")?.setFilterValue(event.target.value)
                        }
                        className="max-w-sm"
                    />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="ml-auto">
                                Columns <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {table
                                .getAllColumns()
                                .filter((column) => column.getCanHide())
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className="capitalize"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) =>
                                                column.toggleVisibility(!!value)
                                            }
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    )
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="rounded-md border mt-5">
                    <Table>
                        <TableHeader className={"para"}>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody className={"para"}>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex items-center justify-end space-x-2 py-4">
                    <div className="flex-1 text-sm text-muted-foreground para">
                        {table.getFilteredSelectedRowModel().rows.length} of{" "}
                        {table.getFilteredRowModel().rows.length} row(s) selected.
                    </div>
                </div>
            </div>
        </div>
    )
}
