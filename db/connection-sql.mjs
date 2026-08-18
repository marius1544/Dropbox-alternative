import { Client } from 'pg'

export const client = new Client({
    user: 'postgres.hbximkivihfieqewpbff',
    database: 'postgres',
    port: '5432',
    host: 'aws-1-eu-west-1.pooler.supabase.com',
    password: 'HvitSvartSauehode1',
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