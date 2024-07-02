import clsx from "clsx"
import React from "react"


const TableItem = React.forwardRef<HTMLTableCellElement, React.ComponentPropsWithoutRef<'td'>>(({ className, ...props }, ref) =>
    <td
        ref={ref}
        className={clsx('flex gap-2 items-center w-[220px] text-sm py-1.5 px-2', className)}
        {...props}
    />
)
TableItem.displayName = 'TableItem'

const TableRow = React.forwardRef<HTMLTableRowElement, React.ComponentPropsWithoutRef<'tr'>>(({ className, ...props }, ref) =>
    <tr
        ref={ref}
        className={clsx('hover:bg-gray-100 flex items-center justify-between duration-150 text-gray-700', className)}
        {...props}
    />
)
TableRow.displayName = 'TableRow'

const TableHeader = React.forwardRef<HTMLTableRowElement, React.ComponentPropsWithoutRef<'tr'>>(({ className, ...props }, ref) =>
    <tr
    >
        <div
            ref={ref}
            className={clsx('bg-gray-100 rounded-lg flex items-center justify-between text-gray-500', className)}
            {...props}
        />
    </tr>
)
TableHeader.displayName = 'TableHeader'

const TableBody = React.forwardRef<HTMLTableSectionElement, React.ComponentPropsWithoutRef<'tbody'>>(({ className, ...props }, ref) =>
    <tbody
        ref={ref}
        className={clsx('space-y-2 divide-y', className)}
        {...props}
    />
)
TableBody.displayName = 'TableBody'

const Table = React.forwardRef<HTMLTableElement, React.ComponentPropsWithoutRef<'table'>>(({ className, ...props }, ref) =>
    <table
        ref={ref}
        className={clsx('w-full overflow-x-auto text-sm rounded-md', className)}
        {...props}
    />
)
Table.displayName = 'Table'


export { Table, TableRow, TableHeader, TableItem, TableBody }