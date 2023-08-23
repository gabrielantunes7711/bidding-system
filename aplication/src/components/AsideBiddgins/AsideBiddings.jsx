import React from "react";
import Container from "./style";
import { FaChevronRight, FaFilter } from "react-icons/fa";
import Select from "../Form/Select/Select";
import Input from "../Form/Input/Input";
import BtnPrimary from "../Buttons/PrimaryBtn/BtnPrimary";
import addOrUpdateURLParam from "../../utils/addOrUpdateURLParam";

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

function openAndCloseFilterField({ target }) {
  const filterField = target.nextElementSibling;
  const filterFieldScrollHeight = filterField.scrollHeight;
  const filterFieldHeight = filterField.offsetHeight;

  target.classList.toggle("opened");

  if (filterFieldHeight === 0) {
    target.setAttribute("disabled", "true");
    filterField.style.height = `${filterFieldScrollHeight + 10}px`;
    filterField.style.paddingTop = "1rem";

    setTimeout(() => {
      target.removeAttribute("disabled");
      filterField.style.height = "auto";
      filterField.style.overflow = "visible";
    }, 500);
  } else {
    filterField.style.height = `${filterFieldScrollHeight}px`;
    filterField.style.paddingTop = "0rem";

    setTimeout(() => {
      filterField.style.height = `0px`;
      filterField.style.overflow = "hidden";
    }, 10);
  }
}

const AsideBiddings = ({ updateRows, setFilters }) => {
  const [asideVisibility, setAsideVisibility] = React.useState(false);
  const [biddingStatus, setBiddingStatus] = React.useState({});
  const [modalities, setModalities] = React.useState({});
  const [biddingEntities, setBiddingEntities] = React.useState({});
  const [clients, setClients] = React.useState({});

  React.useEffect(() => {
    getSelectRows("http://localhost:3333/bidding_status", setBiddingStatus);
    getSelectRows("http://localhost:3333/modalities", setModalities);
    getSelectRows("http://localhost:3333/bidding_entities", setBiddingEntities);
    getSelectRows("http://localhost:3333/clients", setClients);
  }, []);

  const modalitySelect = React.useRef(null);
  const biddingEntitiesSelect = React.useRef(null);
  const clientsSelect = React.useRef(null);
  const biddingStatusSelect = React.useRef(null);

  return (
    <Container asideVisibility={asideVisibility}>
      <button
        onClick={() => {
          setAsideVisibility(!asideVisibility);
        }}
      >
        <FaFilter />
      </button>

      <div>
        <strong>Filtrar</strong>

        <button
          onClick={({ target }) => {
            setFilters({});
            modalitySelect.current.clearValue();
            biddingEntitiesSelect.current.clearValue();
            clientsSelect.current.clearValue();
            biddingStatusSelect.current.clearValue();
            target.parentNode.nextElementSibling.reset();
          }}
        >
          Limpar Filtro
        </button>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          addOrUpdateURLParam("page", 1);
          updateRows();
        }}
      >
        <div className="filter-wrapper">
          <button type="button" onClick={openAndCloseFilterField}>
            Modalidade <FaChevronRight />
          </button>
          <Select
            options={modalities}
            setValue={setFilters}
            id="modality_id"
            isMulti
            ref={modalitySelect}
          />
        </div>

        <div className="filter-wrapper">
          <button type="button" onClick={openAndCloseFilterField}>
            N° do Edital <FaChevronRight />
          </button>
          <Input id="bidding_number" setValue={setFilters} />
        </div>

        <div className="filter-wrapper">
          <button type="button" onClick={openAndCloseFilterField}>
            Órgão <FaChevronRight />
          </button>
          <Select
            options={biddingEntities}
            setValue={setFilters}
            id="bidding_entity_id"
            isMulti
            ref={biddingEntitiesSelect}
          />
        </div>

        <div className="filter-wrapper">
          <button type="button" onClick={openAndCloseFilterField}>
            Data <FaChevronRight />
          </button>
          <Input id="date" setValue={setFilters} type="date" />
        </div>

        <div className="filter-wrapper">
          <button type="button" onClick={openAndCloseFilterField}>
            Hora <FaChevronRight />
          </button>
          <Input id="time" setValue={setFilters} type="time" />
        </div>

        <div className="filter-wrapper">
          <button type="button" onClick={openAndCloseFilterField}>
            Cliente <FaChevronRight />
          </button>
          <Select
            options={clients}
            setValue={setFilters}
            id="client_id"
            isMulti
            ref={clientsSelect}
          />
        </div>

        <div className="filter-wrapper">
          <button type="button" onClick={openAndCloseFilterField}>
            Status <FaChevronRight />
          </button>
          <Select
            options={biddingStatus}
            setValue={setFilters}
            id="status_id"
            isMulti
            ref={biddingStatusSelect}
          />
        </div>

        <div className="filter-wrapper">
          <button type="button" onClick={openAndCloseFilterField}>
            Obervações <FaChevronRight />
          </button>
          <Input id="observations" setValue={setFilters} />
        </div>

        <BtnPrimary label="Filtrar" />
      </form>
    </Container>
  );
};

export default AsideBiddings;
