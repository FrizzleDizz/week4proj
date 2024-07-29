import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL});

//create the cereals table & seeds
db.query(
`create table if not exists messages (
  id serial primary key,
  name TEXT,
  message TEXT
);

insert into messages (name, message) values
('Admin','Please keep your submissions sensible!')`
);

