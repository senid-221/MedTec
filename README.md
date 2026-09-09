# MediTec

Private owner-only media/content management workspace for Instagram content.

## Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Supabase Auth / PostgreSQL / Storage

## Run
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
npm start
```

Required environment variables: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
Never commit service-role keys or `.env` files.

The public Home is `/`; the private workspace starts at `/login` and `/dashboard`. Meta/Instagram publishing is intentionally not faked; official API integration can be added later.