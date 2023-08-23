exports.seed = async function (knex) {
  await knex("modalities").del();
  await knex("modalities").insert([
    { name: "Chamada Pública" },
    { name: "Concorrência Pública" },
    { name: "Concurso" },
    { name: "Concurso de Projetos" },
    { name: "Convite" },
    { name: "Credenciamento" },
    { name: "Diálogo Competitivo" },
    { name: "Dispensa de Licitação" },
    { name: "Inexigibilidade de Licitação" },
    { name: "Leilão" },
    { name: "Pregão Eletrônico" },
    { name: "Pregão Presencial" },
    { name: "RDC - Regime Diferenciado de Contratações" },
    { name: "Registro de Preços" },
    { name: "Tomada de Preços" },
  ]);
};
