import 'dotenv/config';
import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';

const config = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
};

async function runMigrations(): Promise<void> {
  let connection;
  try {
    console.log('🔄 Running migrations...\n');

    // Connect to MySQL server (without specifying database)
    connection = await mysql.createConnection(config);
    console.log('✅ Connected to MySQL server');

    // Get all migration files
    const migrationsDir = path.join(import.meta.dirname, '../migrations');
    const files = fs.readdirSync(migrationsDir).filter((f) => f.endsWith('.sql'));

    if (files.length === 0) {
      console.log('⚠️  No migration files found');
      return;
    }

    // Execute each migration
    for (const file of files) {
      const filePath = path.join(migrationsDir, file);
      const sql = fs.readFileSync(filePath, 'utf-8');

      console.log(`📝 Running migration: ${file}`);
      
      // Split by semicolon to handle multiple statements
      const statements = sql
        .split(';')
        .map((stmt) => stmt.trim())
        .filter((stmt) => stmt.length > 0);

      for (const statement of statements) {
        try {
          await connection.execute(statement);
        } catch (err: unknown) {
          if (err instanceof Error && 'code' in err && (err as { code: unknown }).code === 'ER_UNSUPPORTED_PS') {
            await connection.query(statement);
          } else {
            throw err;
          }
        }
      }

      console.log(`✅ Migration complete: ${file}\n`);
    }

    console.log('✅ All migrations completed successfully!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

runMigrations();
