exports.up = (knex) =>
  knex.schema.createTable("bidding_entities", (table) => {
    table.increments("id").primary();
    table.text("name");
  });

exports.down = (knex) => knex.schema.dropTable("bidding_entities");
