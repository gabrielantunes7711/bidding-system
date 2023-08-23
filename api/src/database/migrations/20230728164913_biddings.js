exports.up = (knex) =>
  knex.schema.createTable("biddings", (table) => {
    table.increments("id").primary();
    table
      .integer("modality_id")
      .unsigned()
      .references("id")
      .inTable("modalities");
    table.text("bidding_number");
    table
      .integer("bidding_entity_id")
      .unsigned()
      .references("id")
      .inTable("bidding_entities");
    table.date("date");
    table.time("time", { precision: 6 });
    table.integer("client_id").unsigned().references("id").inTable("clients");
    table
      .integer("status_id")
      .unsigned()
      .references("id")
      .inTable("bidding_status");
    table.text("observations");
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("biddings");
