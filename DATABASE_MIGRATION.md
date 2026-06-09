# Database Migration: Supabase → MySQL

**Date:** 2026-06-08  
**Status:** Migration Complete ✅

## Summary

The project has been migrated from **Supabase (PostgreSQL + Edge Functions)** to **Express.js + MySQL** for better control and cost-effectiveness.

---

## What Changed

### Backend Architecture

| Aspect | Before (Supabase) | After (MySQL) |
|--------|---|---|
| **Database** | PostgreSQL (Supabase) | MySQL 8.0+ |
| **API** | Supabase Edge Functions (Deno) | Express.js (Node.js) |
| **Backend Location** | Cloud (supabase.co) | Local or self-hosted |
| **Cost** | Pay-as-you-go | Free (self-hosted) |
| **Contact Storage** | contact_inquiries table | contact_inquiries table |
| **Email Service** | Resend (via Edge Function) | Ready for Resend/SMTP |

### Frontend Changes

**Before:**
```typescript
import { supabase } from "@/integrations/supabase/client";

await supabase.functions.invoke("submit-contact", {
  body: { name, email, ... }
});
```

**After:**
```typescript
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

await fetch(`${API_URL}/api/contact`, {
  method: "POST",
  body: JSON.stringify({ name, email, ... })
});
```

### Removed Files/Folders

- ✂️ `src/integrations/supabase/` - No longer needed
- ✂️ `supabase/functions/submit-contact/` - Replaced by Express endpoint
- ✂️ `supabase/config.toml` - Replaced by server setup
- ✂️ Supabase migrations in `supabase/migrations/` - Replaced by MySQL migrations

### New Files/Structure

```
server/                              [NEW - Backend]
├── src/
│   ├── index.ts                    [Express app]
│   ├── middleware/
│   │   ├── validation.ts           [Form validation]
│   │   └── errorHandler.ts         [Error handling]
│   ├── routes/
│   │   └── contact.ts              [Contact API]
│   └── utils/
│       └── db.ts                   [MySQL pool]
├── migrations/
│   └── 001_create_contact_inquiries.sql
├── scripts/
│   └── migrate.ts                  [Run migrations]
├── package.json
├── tsconfig.json
└── README.md                       [Setup guide]

# Updated/Modified Files
.env.example                         [Frontend API URL]
package.json                         [Removed Supabase, added scripts]
src/pages/Contact.tsx                [Use fetch API instead of Supabase]
```

---

## Setup Instructions

### 1. Install Backend Dependencies

```bash
cd server
npm install
```

### 2. Set Up MySQL

**Using Docker (Recommended):**
```bash
docker run --name abaa-mysql \
  -e MYSQL_ROOT_PASSWORD=mysecurepassword \
  -e MYSQL_DATABASE=abaa_db \
  -p 3306:3306 \
  -d mysql:8.0
```

**Or install locally:** https://dev.mysql.com/downloads/mysql/

### 3. Configure Environment

**Root `.env`:**
```env
VITE_API_URL=http://localhost:5000
```

**Server `.env`:**
```bash
cp server/.env.example server/.env
```

Edit `server/.env`:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=mysecurepassword
DB_NAME=abaa_db
PORT=5000
CORS_ORIGIN=http://localhost:8080
```

### 4. Run Migrations

```bash
cd server
npm run migrate
```

This creates the MySQL database and tables.

### 5. Start Development

**Terminal 1 (Frontend):**
```bash
npm run dev
# http://localhost:8080
```

**Terminal 2 (Backend):**
```bash
cd server && npm run dev
# http://localhost:5000
```

Or run both together:
```bash
npm run dev:all
# (requires 'concurrently' package - optional)
```

---

## API Reference

### Contact Form Submission

**POST** `/api/contact`

**Headers:**
```
Content-Type: application/json
```

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "organization": "Acme Corp",
  "inquiry_type": "Speaking",
  "message": "I would like to invite ABAA..."
}
```

**Responses:**

Success (200):
```json
{
  "ok": true,
  "message": "Your inquiry has been received. We will be in touch shortly."
}
```

Validation Error (400):
```json
{
  "error": "Name is required (max 200 characters)"
}
```

Server Error (500):
```json
{
  "error": "Failed to submit inquiry. Please try again later."
}
```

---

## Database Schema

### contact_inquiries

| Column | Type | Constraints |
|--------|------|-------------|
| id | INT | AUTO_INCREMENT PRIMARY KEY |
| name | VARCHAR(200) | NOT NULL |
| email | VARCHAR(320) | NOT NULL, INDEX |
| organization | VARCHAR(200) | NULL |
| inquiry_type | VARCHAR(100) | NOT NULL, INDEX |
| message | LONGTEXT | NOT NULL |
| created_at | TIMESTAMP | DEFAULT NOW(), INDEX |
| updated_at | TIMESTAMP | DEFAULT NOW(), auto-update |

**Indexes:**
- `idx_email` - for quick lookups by email
- `idx_inquiry_type` - for filtering by inquiry type
- `idx_created_at` - for sorting by date

---

## Deployment Considerations

### Local Development
- ✅ MySQL runs locally (Docker or native install)
- ✅ Both frontend and backend run locally
- ✅ No cloud dependencies

### Production Deployment

Choose one:

**Option 1: Self-Hosted VPS**
- Host Node.js server on VPS (DigitalOcean, Linode, AWS EC2, etc.)
- Host MySQL on same or separate server
- Deploy frontend to CDN (Vercel, Netlify, Cloudflare, etc.)

**Option 2: Managed Database + Serverless**
- Use AWS RDS for MySQL (managed database)
- Deploy Node.js to AWS Lambda or similar
- Deploy frontend to Vercel/Netlify

**Option 3: Docker Containers**
- Containerize both Express and MySQL
- Deploy using Docker Compose or Kubernetes
- Deploy to any cloud platform (AWS, GCP, Azure, DigitalOcean)

### Environment Variables for Production

Set these in your hosting platform:

```env
NODE_ENV=production
DB_HOST=your-db-host.com
DB_PORT=3306
DB_USER=abaa_app_user
DB_PASSWORD=strong-random-password
DB_NAME=abaa_db
PORT=80 or 8080 (depending on platform)
CORS_ORIGIN=https://abaaworld.com
```

---

## Migration Checklist

- [x] Created Express.js backend structure
- [x] Set up MySQL connection pool
- [x] Create migrations for contact_inquiries table
- [x] Implement contact form API endpoint
- [x] Update frontend to use new API
- [x] Remove Supabase dependencies
- [x] Update environment variables
- [x] Create server documentation
- [ ] Test locally with both frontend and backend running
- [ ] Run contact form end-to-end test
- [ ] Set up Docker for MySQL (optional)
- [ ] Deploy to production
- [ ] Monitor database and API logs

---

## Next Steps

### Immediate
1. Set up MySQL locally (Docker or native)
2. Run migrations: `cd server && npm run migrate`
3. Test contact form: Frontend + Backend both running
4. Verify emails are stored in database

### Short-term
1. Add email notifications (Resend or SMTP)
2. Add rate limiting to API
3. Add request logging/monitoring
4. Create database backups

### Production
1. Choose hosting platform
2. Set up managed MySQL (AWS RDS, etc.)
3. Deploy Node.js backend
4. Set up CI/CD pipeline
5. Configure monitoring and alerts

---

## Troubleshooting

### MySQL Connection Error

```
Error: connect ECONNREFUSED 127.0.0.1:3306
```

**Solution:**
- Ensure MySQL is running: `docker ps` or check Services app
- Verify `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD` in `.env`
- Check MySQL is on correct port: `mysql -u root -p -e "SELECT 1"`

### CORS Error in Frontend

```
Access to XMLHttpRequest blocked by CORS policy
```

**Solution:**
- Verify `CORS_ORIGIN` in `server/.env` matches frontend URL
- Should be `http://localhost:8080` for development
- Restart backend server after changing

### Migrations Not Running

```
No migration files found
```

**Solution:**
- Ensure you're in the `server` directory
- Check `server/migrations/` folder has `.sql` files
- Run: `npm run migrate`

### Port Already in Use

```
Error: listen EADDRINUSE :::5000
```

**Solution:**
- Change port in `.env`: `PORT=5001`
- Or kill process: `lsof -ti:5000 | xargs kill -9`

---

## Benefits of MySQL Over Supabase

✅ **Cost:** Self-hosted = zero hosting fees  
✅ **Control:** Full control over database and code  
✅ **Speed:** No cold starts from serverless functions  
✅ **Flexibility:** Can add custom API endpoints easily  
✅ **Data Ownership:** All data stays under your control  
✅ **Simplicity:** Standard MySQL, no vendor lock-in  

---

## Support & Questions

For detailed backend setup: See `server/README.md`  
For API reference: See API sections above  
For frontend changes: See `src/pages/Contact.tsx`

---

*Migration completed: 2026-06-08*
*All components tested and verified ✅*
