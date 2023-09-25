import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  Name: string,
  ScheduledDate: Date,
  Schedule: String,
  Status: string
) {
  return { Name, ScheduledDate, Schedule, Status };
}

const rows = [
  createData("Item 1", new Date(), "Weekly", "Pending"),
  createData("Item 2", new Date(), "Weekly", "Completed"),
  createData("Item 3", new Date(), "Monthly", "Pending"),
  createData("Item 4", new Date(), "Daily", "Completed"),
  createData("Item 5", new Date(), "Weekly", "Pending"),
  createData("Item 6", new Date(), "Monthly", "Completed"),
  createData("Item 7", new Date(), "Daily", "Pending"),
  createData("Item 8", new Date(), "Weekly", "Completed"),
  createData("Item 9", new Date(), "Monthly", "Pending"),
  createData("Item 10", new Date(), "Daily", "Completed"),
];

export default function CalendarList() {
  return (
    <>
      <TableContainer className="shadow-table" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="font-bold">
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Data Marcada</TableCell>
              <TableCell align="center">Horário</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.Name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.Name}
                </TableCell>
                <TableCell align="center">
                  {row.ScheduledDate.toLocaleDateString()}
                </TableCell>
                <TableCell align="center">{row.Schedule}</TableCell>
                <TableCell align="center">{row.Status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      S
    </>
  );
}
