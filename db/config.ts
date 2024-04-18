import { column, defineDb, defineTable } from "astro:db";

const Item = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    value: column.text(),
  },
  indexes: {
    unique_value_idx: {
      on: ["value"],
      unique: true,
    },
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Item },
});
