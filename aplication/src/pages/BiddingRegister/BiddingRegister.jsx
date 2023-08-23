import React from "react";
import Container from "./style";
import Input from "../../components/Form/Input/Input";
import Textarea from "../../components/Form/Textarea/Textarea";
import BtnPrimary from "../../components/Buttons/PrimaryBtn/BtnPrimary";
import Select from "../../components/Form/Select/Select";
import Swal from "sweetalert2";

const BiddingRegister = () => {
  const dataBody = {
    modality_id: "",
    bidding_number: "",
    bidding_entity_id: "",
    date: "",
    time: "",
    client_id: "",
    status_id: "",
    observations: "",
  };

  const [data, setData] = React.useState(dataBody);
  const [biddingStatus, setBiddingStatus] = React.useState({});
  const [modalities, setModalities] = React.useState({});
  const [biddingEntities, setBiddingEntities] = React.useState({});
  const [clients, setClients] = React.useState({});

  async function getSelectRows(url, callback) {
    const dataPromise = await fetch(url);
    const dataJson = await dataPromise.json();
    const dataTreated = dataJson.map(({ id, name }) => {
      return {
        value: id,
        label: name,
      };
    });
    callback(dataTreated);
  }

  async function sendData() {
    try {
      console.log(data);
      const response = await fetch("http://localhost:3333/biddings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();

      if (response.ok) {
        Swal.fire(json, "", "success");
      } else {
        Swal.fire(json.message, "", "error");
      }
    } catch (error) {
      Swal.fire(error.message, "", "error");
    }
  }

  React.useEffect(() => {
    getSelectRows("http://localhost:3333/bidding_status", setBiddingStatus);
    getSelectRows("http://localhost:3333/modalities", setModalities);
    getSelectRows("http://localhost:3333/bidding_entities", setBiddingEntities);
    getSelectRows("http://localhost:3333/clients", setClients);
  }, []);

  return (
    <Container
      onSubmit={(event) => {
        event.preventDefault();
        console.log(event.target.checkValidity());

        sendData();
      }}
    >
      <Select
        options={modalities}
        setValue={setData}
        id="modality_id"
        label="Modalidade"
        required
      />

      <Input
        label="N° do Edital"
        id="bidding_number"
        setValue={setData}
        required
      />

      <Select
        options={biddingEntities}
        setValue={setData}
        id="bidding_entity_id"
        label="Órgão"
        required
      />

      <Input type="date" label="Data" id="date" setValue={setData} required />

      <Input type="time" label="Hora" id="time" setValue={setData} required />

      <Select
        options={clients}
        setValue={setData}
        id="client_id"
        label="Cliente"
        required
      />

      <Select
        options={biddingStatus}
        setValue={setData}
        id="status_id"
        label="Status"
        required
      />

      <Textarea label="Obervações" id="observations" setValue={setData} />
      <BtnPrimary label="REGISTRAR" />
    </Container>
  );
};

export default BiddingRegister;
