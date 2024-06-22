import "dotenv/config";
import pkg from "pg";

const { Pool } = pkg;

const usuarioPG = process.env.PGUSER;
const hostPG = process.env.PGHOST;
const passwordPG = process.env.PGPASSWORD;
const databasePG = process.env.PGDATABASE;
const portPG = process.env.PGPORT;

// Configuración de la conexión usando variables de entorno
const poolConfig = {
  connectionString: `postgresql://${usuarioPG}:${passwordPG}@${hostPG}:${portPG}/${databasePG}`,
  ssl: false, // Desactivar SSL
  allowExitOnIdle: true,
};

export const pool = new Pool(poolConfig);

const connectToPostgres = async () => {
  try {
    await pool.query("SELECT NOW()");
    console.log("Connected to Postgres");
  } catch (error) {
    console.log("Connection error:", error);
  }
};

// Llamar a la función para conectarse a Postgres
connectToPostgres();
