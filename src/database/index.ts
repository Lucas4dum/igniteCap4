import "reflect-metadata";
import { DataSource } from "typeorm";
import { Category } from "../modules/cars/entities/Category";
import { Specification } from "../modules/cars/entities/Specification";

const dataSource = new DataSource ({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  synchronize: false,
  logging: false,
  entities: [Category, Specification],
  migrations: ["./src/database/migrations/*.ts"],
  subscribers: [],
})

export function createConnection(host = "database_ignite"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default dataSource;
