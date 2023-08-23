import React from "react";
import Container from "./style";
import Table from "../../components/Table/Table";
import AsideBiddings from "../../components/AsideBiddgins/AsideBiddings";

const Bidding = () => {
  const [biddingRows, setBiddingRows] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState("");
  const [filters, setFilters] = React.useState({});

  async function getBiddingRows() {
    const searchParams = new URLSearchParams(filters);
    const urlParams = new URLSearchParams(document.location.search);
    for (const [key, value] of urlParams.entries()) {
      searchParams.append(key, value);
    }
    const promise = await fetch(
      `http://localhost:3333/biddings?${searchParams}`
    );
    const json = await promise.json();
    const jsonTreated = json.results.map((item) => {
      const { id, created_at, updated_at, ...newItem } = item;
      return newItem;
    });

    setBiddingRows(jsonTreated);
    setTotalPages(json.totalPages);
  }

  React.useEffect(() => {
    getBiddingRows();
  }, [currentPage]);

  const headers = [
    {
      label: "Modalidade",
      field: "modality",
    },
    {
      label: "N° do edital",
      field: "bidding_number",
    },
    {
      label: "Órgão",
      field: "bidding_entity",
    },
    {
      label: "Data",
      field: "date",
    },
    {
      label: "Hora",
      field: "time",
    },
    {
      label: "Cliente",
      field: "client",
    },
    {
      label: "Status",
      field: "status",
    },
    {
      label: "obervações",
      field: "observations",
    },
  ];

  if (!biddingRows) return;

  return (
    <Container>
      <Table
        headers={headers}
        rows={biddingRows}
        updateRows={getBiddingRows}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
        setFilters={setFilters}
      />
      <AsideBiddings updateRows={getBiddingRows} setFilters={setFilters} />
    </Container>
  );
};

export default Bidding;
