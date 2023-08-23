exports.seed = async function (knex) {
  await knex("bidding_status").del();
  await knex("bidding_status").insert([
    { name: "Enviado" },
    { name: "Confirmado" },
    { name: "Recusado" },
    { name: "Cadastrado" },
    { name: "Não Encontrado" },
  ]);
};
