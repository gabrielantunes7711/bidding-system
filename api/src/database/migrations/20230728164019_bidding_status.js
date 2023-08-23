exports.up = (knex) =>
  knex.schema.createTable("bidding_status", (table) => {
    table.increments("id").primary();
    table.text("name");
  });

exports.down = (knex) => knex.schema.dropTable("bidding_status");
