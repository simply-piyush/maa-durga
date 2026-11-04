"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  FilterFn,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChemicalProduct } from "@/lib/constants";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
  X,
} from "lucide-react";

interface DataTableProps<TData extends ChemicalProduct, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onSelectChemical?: (chemical: ChemicalProduct) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

// Multi-field fuzzy search filter function
const chemicalSearchFilter: FilterFn<ChemicalProduct> = (
  row,
  columnId,
  filterValue: string
) => {
  if (!filterValue) return true;
  const item = row.original;
  const q = String(filterValue).toLowerCase().trim();

  return Boolean(
    item.name.toLowerCase().includes(q) ||
      item.hsnCode.includes(q) ||
      item.chemicalFormula?.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.synonyms?.some((s) => s.toLowerCase().includes(q)) ||
      item.applications.some((app) => app.toLowerCase().includes(q))
  );
};

export function DataTable<TData extends ChemicalProduct, TValue>({
  columns,
  data,
  onSelectChemical,
  onOpenQuoteModal,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([
    { id: "name", desc: false },
  ]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = React.useState<string>("");
  const [chapterFilter, setChapterFilter] = React.useState<"all" | "inorganic" | "organic">("all");
  const [selectedIndustry, setSelectedIndustry] = React.useState<string>("all");

  // Derive unique industries for select filter
  const industriesList = React.useMemo(() => {
    const set = new Set<string>();
    data.forEach((prod) => {
      prod.applications.forEach((app) => set.add(app));
    });
    return Array.from(set).sort();
  }, [data]);

  // Filtered dataset before feeding table
  const filteredData = React.useMemo(() => {
    return data.filter((item) => {
      // Classification filter
      if (chapterFilter === "inorganic" && item.type !== "inorganic") return false;
      if (chapterFilter === "organic" && item.type !== "organic") return false;

      // Industry filter
      if (selectedIndustry !== "all" && !item.applications.includes(selectedIndustry)) {
        return false;
      }

      return true;
    });
  }, [data, chapterFilter, selectedIndustry]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: chemicalSearchFilter as unknown as FilterFn<TData>,
    onGlobalFilterChange: setGlobalFilter,
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
  });

  return (
    <div className="space-y-4">
      {/* Search & Filter Toolbar */}
      <div className="rounded-2xl bg-white p-4 sm:p-5 shadow-xs border border-[#ebdcb2] space-y-4">
        {/* Top Filter Row: Category Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div
            role="tablist"
            aria-label="Filter chemicals by classification"
            className="inline-flex rounded-xl bg-slate-100 p-1"
          >
            <button
              type="button"
              role="tab"
              aria-selected={chapterFilter === "all"}
              onClick={() => setChapterFilter("all")}
              className={`rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                chapterFilter === "all"
                  ? "bg-[#0d3b66] text-white shadow-xs"
                  : "text-slate-600 hover:text-[#0d3b66]"
              }`}
            >
              All Chemicals ({data.length})
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={chapterFilter === "inorganic"}
              onClick={() => setChapterFilter("inorganic")}
              className={`rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                chapterFilter === "inorganic"
                  ? "bg-[#0d3b66] text-white shadow-xs"
                  : "text-slate-600 hover:text-[#0d3b66]"
              }`}
            >
              Inorganic (Ch 28)
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={chapterFilter === "organic"}
              onClick={() => setChapterFilter("organic")}
              className={`rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                chapterFilter === "organic"
                  ? "bg-[#f4d35e] text-[#07223d] font-bold shadow-xs"
                  : "text-slate-600 hover:text-[#07223d]"
              }`}
            >
              Organic (Ch 29)
            </button>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing{" "}
            <span className="font-bold text-slate-900">
              {table.getFilteredRowModel().rows.length}
            </span>{" "}
            of {data.length} verified products
          </div>
        </div>

        {/* Bottom Filter Row: Search Input & Industry Select */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="relative sm:col-span-2">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search chemicals by name, formula, HSN code (e.g. 2815, NaOH, Caustic Soda)..."
              value={globalFilter ?? ""}
              onChange={(event) => setGlobalFilter(event.target.value)}
              className="pl-9 pr-9 py-2.5 h-10 rounded-xl text-sm"
            />
            {globalFilter && (
              <button
                type="button"
                onClick={() => setGlobalFilter("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full h-10 rounded-xl border border-slate-300 bg-white px-3 text-xs sm:text-sm text-slate-900 focus:border-[#0d3b66] focus:outline-none focus:ring-2 focus:ring-[#0d3b66]/20 cursor-pointer"
            >
              <option value="all">All Industries & Applications</option>
              {industriesList.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Shadcn Data Table Container */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="hover:bg-transparent">
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
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="hover:bg-amber-50/40 transition-colors"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        onClick={() => {
                          if (cell.column.id !== "actions") {
                            onSelectChemical?.(row.original);
                          }
                        }}
                        className={cell.column.id !== "actions" ? "cursor-pointer" : undefined}
                      >
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
                    className="h-40 text-center text-slate-500"
                  >
                    <div className="max-w-md mx-auto py-8">
                      <p className="text-base font-bold text-slate-900">
                        No chemical products matched your filters
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Try clearing your search term or select &ldquo;All Chemicals&rdquo;.
                      </p>
                      <div className="mt-4 flex justify-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setGlobalFilter("");
                            setChapterFilter("all");
                            setSelectedIndustry("all");
                          }}
                        >
                          Reset Filters
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => onOpenQuoteModal(globalFilter || undefined)}
                        >
                          Inquire Trade Desk
                        </Button>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Shadcn Table Pagination Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 px-4 py-3 bg-slate-50/60 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span>
              Page{" "}
              <strong className="text-slate-900">
                {table.getState().pagination.pageIndex + 1}
              </strong>{" "}
              of{" "}
              <strong className="text-slate-900">
                {Math.max(1, table.getPageCount())}
              </strong>
            </span>
            <span className="text-slate-300">|</span>
            <span>
              Showing{" "}
              {table.getRowModel().rows.length > 0
                ? table.getState().pagination.pageIndex *
                    table.getState().pagination.pageSize +
                  1
                : 0}
              -
              {Math.min(
                (table.getState().pagination.pageIndex + 1) *
                  table.getState().pagination.pageSize,
                table.getFilteredRowModel().rows.length
              )}{" "}
              of {table.getFilteredRowModel().rows.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="text-slate-500 hidden sm:inline">Rows per page:</span>
              <select
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                }}
                className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-800"
              >
                {[10, 20, 30].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              title="First Page"
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="h-8"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="h-8"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
              title="Last Page"
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
