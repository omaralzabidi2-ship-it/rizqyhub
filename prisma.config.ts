import 'dotenv/config'
import { defineConfig } from 'prisma/config'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error('Missing DATABASE_URL in .env file')
}

export default defineConfig({
  datasource: {
    url: process.env.DIRECT_URL || connectionString,
  },
  migrations: {
    seed: 'npx tsx prisma/seed.ts',
  },
})
