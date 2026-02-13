# AstroSee Dashboard (MVP)

Dashboard scaffold con Next.js App Router + TypeScript + TailwindCSS, usando modo mock para construir UI antes del backend real.

## Stack
- Next.js App Router
- TailwindCSS
- TanStack Query
- Zod
- Recharts
- Leaflet (pendiente de wiring de mapa real)

## Ejecutar
```bash
npm install
npm run dev
```

## Mock mode
Por defecto está activo (`NEXT_PUBLIC_USE_MOCK=true` implícito).

Si quieres backend real:
```bash
NEXT_PUBLIC_USE_MOCK=false npm run dev
```

## Rutas
- `/login`
- `/` overview
- `/stations`
- `/stations/[id]`
- `/events`
- `/events/[id]`
- `/alerts`
- `/settings`
- `/admin`
- `/public/stations/[id]`
- `/public/live/[id]`
