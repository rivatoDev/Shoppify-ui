# Shoppify UI
Angular 20 frontend for the Shoppify platform. It provides a public catalog, shopping cart, purchase history, and administrative modules (store, carousel, products, and categories), consuming the HAL API from the Java backend.

## Main features
- **Standalone components** with separate layouts for Auth, Main, and configuration pages.
- **Enhanced catalog** with advanced filters (`ProductsRefiner`), pagination, and card/table views.
- **Reactive cart** based on Angular Signals that validates stock in real-time before confirming quantities.
- **Administrative flow** with modal forms (`MatDialog`) for products, categories, carousel, and store data.
- **Route protection** via `authGuard`, `publicGuard`, and `hasPermitsGuard`, backed by `AuthService`.
- **User experience** powered by CoreUI, Angular Material, and SweetAlert2.

## Technology stack
- Angular CLI 20.3.x + TypeScript 5.9 + RxJS 7.8
- Angular Material + CoreUI (`@coreui/angular`, `@coreui/coreui`, `@coreui/chartjs`)
- Chart.js + SweetAlert2 + Sass
- Prettier for consistent formatting

## Prerequisites
- Node.js 18.18+ (recommended by Angular 20)
- Angular CLI global (`npm install -g @angular/cli`) optional but convenient
- Shoppify backend running at `http://localhost:8080/api` or update `src/environments/environment.ts`

## Getting started
```bash
npm install
npm start
# Navigate to http://localhost:4200
```
For production builds:
```bash
npm run build
```

## Useful scripts
| Command | Description |
|---------|-------------|
| `npm start` | `ng serve` with hot reload |
| `npm run watch` | Incremental build in development mode |
| `npm run build` | Compile to `dist/` with optimizations |
| `npm test` | Unit tests with Karma + Jasmine |

## Basic structure
```
src/
  app/
     layouts/        (Auth, Main, ConfigPages)
     pages/          (home, products, admin, cart, purchases, help...)
     components/     (product-card, product-form-dialog, promotion-carousel...)
     services/       (auth, cart, store, carousel, create-product...)
     models/         (domain + HAL utilities)
     directives/     (image-fallback)
  environments/       (environment configuration)
```

## API integration
- `environment.apiUrl` defaults to `http://localhost:8080/api`.
- `BaseService<T>` centralizes REST calls and unpacks HAL responses (`_embedded`, `page`).
- Concrete services (`ProductService`, `CategoryService`, `CarouselService`, `TransactionService`, etc.) extend this base.
- `AuthService` + `StorageService` store token, permissions, and user in `localStorage` to be used by guards.

## Extended documentation
The complete description of architecture, dependencies, and flows can be found in [`docs/documentacion.md`](docs/documentacion.md).

## Contributing
- Follow the format defined in Prettier (`npx prettier --write src`).
- Keep components as standalone and import only what's necessary.
- Add models/services in `src/app/models` and `src/app/services` before touching pages.
- Include unit tests (`*.spec.ts`) when adding business logic or new guards.

---
Questions or ideas? Create an issue or open a PR with a clear description of the proposed change.
