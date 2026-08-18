import { Client } from 'pg'

export const client = new Client({
    user: 'postgresdb_dnls_user',
    database: 'postgresdb_dnls',
    port: '5432',
    host: 'dpg-da13ku1t0dsc73aufpe0-a.frankfurt-postgres.render.com',
    password: 'bvq63QTh9NZaH6SvsnCtjMgYkOKoZDCg',
    ssl: { rejectUnauthorized: false }
})

export async function connectDB() {
  
try {
  await client.connect()
  console.log("Connected to PostgreSQL")  
} catch (error) {
  console.error("Failed to connect", error);
  throw error
}
}