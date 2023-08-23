import React from "react";
import Container from "./style";
import { RxTriangleDown } from "react-icons/rx";
import { Pagination } from "@mui/material";
import addOrUpdateURLParam from "../../utils/addOrUpdateURLParam";

function convertDate(date) {
  const newDate = new Date(date);

  const day = newDate.getUTCDate();
  const month = newDate.getUTCMonth() + 1;
  const year = newDate.getUTCFullYear();

  const treatedDate = `${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year}`;

  return treatedDate;
}

const Table = ({
  headers,
  rows,
  updateRows,
  setCurrentPage,
  currentPage,
  totalPages,
}) => {
  return (
    <Container>
      <div className="header">
        {headers.map(({ label, field }, index) => {
          return (
            <span key={index}>
              {label}
              <button
                href={window.location.href}
                onClick={() => {
                  const urlParams = new URLSearchParams(window.location.search);
                  const orderBy = urlParams.get("orderBy");
                  const order = urlParams.get("order");
                  const ascOrDesc =
                    orderBy !== field || order === "desc" ? "asc" : "desc";

                  addOrUpdateURLParam("orderBy", field);
                  addOrUpdateURLParam("order", ascOrDesc);

                  updateRows();
                }}
              >
                <RxTriangleDown />
              </button>
            </span>
          );
        })}
      </div>

      {rows.map((row, index) => {
        return (
          <div className="row" key={index}>
            {Object.values(row).map((value, index) => {
              const timeRegex =
                /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;

              const isDate = !isNaN(Date.parse(value));
              const isTime = !timeRegex.test(value);

              if (isDate) {
                value = convertDate(value);
              }
              if (isTime) {
                value = value.split(":").slice(0, 2).join(":");
              }
              return <span key={index}>{value}</span>;
            })}
          </div>
        );
      })}

      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, page) => {
            addOrUpdateURLParam("page", page);
            setCurrentPage(page);
          }}
        />
      )}
    </Container>
  );
};

export default Table;
