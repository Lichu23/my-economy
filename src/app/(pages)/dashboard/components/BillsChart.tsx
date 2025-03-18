"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatPrice } from "@/utils/formatPrice";

type Props = {
  chartData: { billType: string; billTotal: number }[];
  totalBillsAmount: number
};

const COLORS = ["#FFA500", "#FFD700", "#008000", "#808080", "#FF0000"]; // Colores para cada categoría



export function BillsChart({ chartData, totalBillsAmount }: Props) {
  return (
    <Card className="flex flex-col  mt-5">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Expense List</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
      <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Tooltip formatter={(value) => `${formatPrice(Number(value))}`} />
            <Pie
              data={chartData}
              dataKey="billTotal"
              nameKey="billType"
              cx="50%"
              cy="50%"
              outerRadius={110}
              fill="#8884d8"
              label={({ name }) => `${name}`}
            >
              {chartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
     
        <div className="leading-none text-muted-foreground">
         <p className="md:text-2xl text-xl font-semibold">Total: {formatPrice(totalBillsAmount)}</p> 
        </div>
      </CardFooter>
    </Card>
  );
}
