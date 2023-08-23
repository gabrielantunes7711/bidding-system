exports.up = (knex) =>
  knex.schema.createTable("modalities", (table) => {
    table.increments("id").primary();
    table.text("name");
  });

exports.down = (knex) => knex.schema.dropTable("modalities");
