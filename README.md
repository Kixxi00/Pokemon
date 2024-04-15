# OPTIBUS

## PROJEKTPLANUNG
Erstellung einer Verwaltungssoftware für ein Reisebus-Unternehmen

### THEMA
Die Entwicklung einer Verwaltungssoftware für ein Reisebus-Unternehmen, die zudem im Browser global für Kunden zugänglich ist.

### TECHNOLOGIESTACK
NEXTJS Ein JavaScript-Framework, das die Entwicklung im Web-Bereich unterstützt.
TYPESCRIPT Zur Typisierung von Variablen und zur Verbesserung der Code-Qualität.
TAILWINDCSS Zur schnellen und effizienten Implementierung von CSS im Code.
SUPABASE Als Backend-Datenbank, die eine API-Schnittstelle für die Datenverwaltung bereitstellt.
VISUAL STUDIO CODE Die integrierte Entwicklungsumgebung (IDE) für die Code-Entwicklung.

### MEILENSTEINE

#### DATENBANKTABELLEN

In diesem Schritt werden die erforderlichen Datenbanktabellen erstellt, um Informationen über Reisebusse, Buchungen, Kunden und andere relevante Daten zu speichern.

#### API ZUGRIFFE
Hier werden API-Zugriffe implementiert, um auf die Datenbank zuzugreifen und CRUD-Operationen (Create, Read, Update, Delete) durchzuführen.

#### DATENVERWALTUNG IM PROGRAMM
In diesem Meilenstein erfolgt die Integration der Datenverwaltungsfunktionen in die Webanwendung. Kunden sollen in der Lage sein, Buchungen vorzunehmen, Busse zu reservieren und weitere Verwaltungsaufgaben durchzuführen.

#### WEBDESIGN
Hier wird das Benutzererlebnis (User Experience, UX) und das Benutzerinterface (User Interface, UI) gestaltet. Das Design sollte benutzerfreundlich und ansprechend sein, um eine positive Nutzererfahrung sicherzustellen.

#### BUGFIXING UND GGF. ERWEITERUNGEN
Nach Abschluss der Hauptentwicklungsphase werden eventuell auftretende Fehler behoben, und es werden gegebenenfalls zusätzliche Funktionen oder Verbesserungen hinzugefügt.
TESTPHASE (01.01.2024) Nach der Implementierung sollten umfangreiche Tests durchgeführt werden, um sicherzustellen, dass die Software stabil und fehlerfrei läuft.

#### DOKUMENTATION
Eine ausführliche Dokumentation sollte erstellt werden, um Entwicklern und Benutzern die Nutzung und Wartung der Software zu erleichtern.


@startgantt
Project starts 2023-09-04
[Webdesign] starts 2023-09-04 and ends 2023-10-20 
[Database] starts 2023-09-04 and ends 2023-09-29
[API] starts at [Database]'s end and ends 2023-10-06
[Datamanagement] starts at [API]'s end and ends 2023-10-13
[Bugfix & Features] starts at [Datamanagement]'s end and ends 2023-11-11
[Testing] starts at [Datamanagement]'s end and ends 2024-01-01
[Documentation] starts at [Bugfix & Features]'s end and ends 2024-02-01

@endgantt



# Supabase Starter

This starter configures Supabase Auth to use cookies, making the user's session available throughout the entire Next.js app - Client Components, Server Components, Route Handlers, Server Actions and Middleware.

## Deploy your own

The Vercel deployment will guide you through creating a Supabase account and project. After installation of the Supabase integration, all relevant environment variables will be set up so that the project is usable immediately after deployment 🚀

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-supabase&project-name=nextjs-with-supabase&repository-name=nextjs-with-supabase&integration-ids=oac_jUduyjQgOyzev1fjrW83NYOv)

## How to use

1. Create a [new Supabase project](https://database.new)
1. Run `npx create-next-app -e with-supabase` to create a Next.js app using the Supabase Starter template
1. Use `cd` to change into the app's directory
1. Run `npm install` to install dependencies
1. Rename `.env.local.example` to `.env.local` and update the values for `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` from [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)
1. Run `npm run dev` to start the local development server

> Check out [the docs for Local Development](https://supabase.com/docs/guides/getting-started/local-development) to also run Supabase locally.

### Create a Supabase client

Check out the [`/app/_examples`](./app/_examples/) folder for an example of creating a Supabase client in:

- [Client Components](./app/_examples/client-component/page.tsx)
- [Server Components](./app/_examples/server-component/page.tsx)
- [Route Handlers](./app/_examples/route-handler/route.ts)
- [Server Actions](./app/_examples/server-action/page.tsx)

### Create `todo` table and seed with data (optional)

Navigate to [your project's SQL Editor](https://app.supabase.com/project/_/sql), click `New query`, paste the contents of the [init.sql](./supabase/migrations/20230618024722_init.sql) file and click `RUN`.

This will create a basic `todos` table, enable Row Level Security (RLS), and write RLS policies enabling `select` and `insert` actions for `authenticated` users.

To seed your `todos` table with some dummy data, run the contents of the [seed.sql](./supabase/seed.sql) file.

## Feedback and issues

Please file feedback and issues over on the [Supabase GitHub org](https://github.com/supabase/supabase/issues/new/choose).

## More Supabase examples

- [Next.js Subscription Payments Starter](https://github.com/vercel/nextjs-subscription-payments)
- [Cookie-based Auth and the Next.js 13 App Router (free course)](https://youtube.com/playlist?list=PL5S4mPUpp4OtMhpnp93EFSo42iQ40XjbF)
- [Supabase Auth and the Next.js App Router](https://github.com/supabase/supabase/tree/master/examples/auth/nextjs)
- [Next.js Auth Helpers Docs](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)
