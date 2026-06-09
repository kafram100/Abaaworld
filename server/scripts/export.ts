import 'dotenv/config';
import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';

const config = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'abaa_db',
};

function escapeValue(val: any): string {
  if (val === null || val === undefined) {
    return 'NULL';
  }
  if (typeof val === 'number') {
    return val.toString();
  }
  if (val instanceof Date) {
    return `'${val.toISOString().slice(0, 19).replace('T', ' ')}'`;
  }
  if (typeof val === 'boolean') {
    return val ? '1' : '0';
  }
  if (val instanceof Buffer) {
    return `X'${val.toString('hex')}'`;
  }
  
  // Escape string characters for MySQL
  const str = String(val);
  const escaped = str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\0/g, '\\0')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\x1a/g, '\\Z');
  return `'${escaped}'`;
}

async function exportDatabase() {
  let connection;
  try {
    console.log(`📦 Starting database export for database: "${config.database}"...`);
    
    // Connect to MySQL
    connection = await mysql.createConnection({
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.password,
      database: config.database
    });

    console.log('✅ Connected to MySQL server successfully.');

    let sqlDump = `-- MySQL Database Backup\n`;
    sqlDump += `-- Generated: ${new Date().toISOString()}\n`;
    sqlDump += `-- Database: ${config.database}\n\n`;
    sqlDump += `CREATE DATABASE IF NOT EXISTS \`${config.database}\` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\n`;
    sqlDump += `USE \`${config.database}\`;\n\n`;

    // Get all tables in the database
    const [tablesResult] = await connection.query('SHOW TABLES');
    const tables = (tablesResult as any[]).map(row => Object.values(row)[0] as string);

    if (tables.length === 0) {
      console.log('⚠️  No tables found in the database.');
    }

    for (const table of tables) {
      console.log(`🔍 Exporting table: ${table}...`);
      sqlDump += `-- ------------------------------------------------------\n`;
      sqlDump += `-- Table structure for table \`${table}\`\n`;
      sqlDump += `-- ------------------------------------------------------\n`;
      sqlDump += `DROP TABLE IF EXISTS \`${table}\`;\n`;

      // Get SHOW CREATE TABLE definition
      const [createTableResult] = await connection.query(`SHOW CREATE TABLE \`${table}\``);
      const createTableSql = (createTableResult as any[])[0]['Create Table'] as string;
      sqlDump += `${createTableSql};\n\n`;

      // Get Table Rows
      const [rowsResult] = await connection.query(`SELECT * FROM \`${table}\``);
      const rows = rowsResult as any[];

      if (rows.length > 0) {
        sqlDump += `-- Dumping data for table \`${table}\`\n`;
        const columns = Object.keys(rows[0]).map(col => `\`${col}\``).join(', ');
        
        sqlDump += `INSERT INTO \`${table}\` (${columns}) VALUES\n`;

        const valuesSql = rows.map(row => {
          const rowValues = Object.values(row).map(val => escapeValue(val)).join(', ');
          return `(${rowValues})`;
        }).join(',\n');

        sqlDump += `${valuesSql};\n\n`;
      }
      console.log(`✅ Exported structure and ${rows.length} rows for table: ${table}`);
    }

    // Write to root of workspace
    const outputPath = path.join(import.meta.dirname, '../../abaa_db_backup.sql');
    fs.writeFileSync(outputPath, sqlDump, 'utf8');

    console.log(`\n🎉 Database exported successfully!`);
    console.log(`📁 File saved to: abaa_db_backup.sql`);
  } catch (error) {
    console.error('❌ Database export failed:', error);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

exportDatabase();
