import mysql from 'mysql2/promise';
import type { Pool, PoolConnection } from 'mysql2/promise';

let pool: Pool | null = null;

export async function initializeDatabase(): Promise<Pool> {
  if (pool) return pool;

  const config = {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'abaa_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  };

  try {
    pool = mysql.createPool(config);
    // Verify the connection is actually reachable (createPool never throws)
    const testConn = await pool.getConnection();
    testConn.release();
    console.log('✅ Database connection verified successfully');
    return pool;
  } catch (error) {
    console.error('❌ Failed to connect to database:', error);
    pool = null;
    throw error;
  }
}

export async function getConnection(): Promise<PoolConnection> {
  if (!pool) {
    throw new Error('Database pool not initialized. Call initializeDatabase() first.');
  }
  return pool.getConnection();
}

export async function executeQuery(
  sql: string,
  values?: (string | number | null | boolean)[]
): Promise<unknown> {
  const connection = await getConnection();
  try {
    const [results] = await connection.execute(sql, values || []);
    return results;
  } finally {
    connection.release();
  }
}

export async function closeDatabase(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
    console.log('✅ Database pool closed');
  }
}
