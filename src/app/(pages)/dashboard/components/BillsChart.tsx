"use client";

import { TrendingUp } from "lucide-react";
import { Cell, LabelList, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type Props = {
  chartData: { billType: string; billTotal: number }[];
};

const COLORS = ["#FFA500", "#FFD700", "#008000", "#808080", "#FF0000"]; // Colores para cada categoría

// const chartData = [
//   { browser: "food", visitors: 275, fill: "orange" },
//   { browser: "transport", visitors: 200, fill: "yellow" },
//   { browser: "health", visitors: 187, fill: "green" },
//   { browser: "entreteinment", visitors: 173, fill: "gray" },
//   { browser: "other", visitors: 90, fill: "red" },
// ];

// const chartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
//   food: {
//     label: "food",
//     color: "hsl(var(--chart-1))",
//   },
//   transport: {
//     label: "transport",
//     color: "hsl(var(--chart-2))",
//   },
//   health: {
//     label: "health",
//     color: "hsl(var(--chart-3))",
//   },
//   entreteinment: {
//     label: "entreteinment",
//     color: "hsl(var(--chart-4))",
//   },
//   other: {
//     label: "other",
//     color: "hsl(var(--chart-5))",
//   },
// } satisfies ChartConfig;

export function BillsChart({ chartData }: Props) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Label List</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
      <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Tooltip formatter={(value) => `$${value}`} />
            <Pie
              data={chartData}
              dataKey="billTotal"
              nameKey="billType"
              cx="50%"
              cy="50%"
              outerRadius={100}
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
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
