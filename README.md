# Social Marketplace

Social Marketplace is a secure multi-vendor marketplace designed for the United States market. The app supports independent sellers, businesses, creators, and entrepreneurs with a storefront-based selling model, customer browsing and purchasing, order tracking, favorites, and account management.

## Features

- Multi-role authentication and authorization
- Seller storefront creation and product publishing
- Marketplace product discovery and filtering
- Customer favorites and review workflow
- Order placement and fulfillment tracking
- Admin marketplace overview and controls
- Persistent SQLite database for local development
- Ready for future mobile app integration through the same backend API layer

## Demo accounts

- Admin: admin@socialmarketplace.com / Admin123!
- Vendor: vendor@socialmarketplace.com / Vendor123!
- Customer: customer@socialmarketplace.com / Customer123!

## Local setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production and integration notes

This application does not claim a live payment processor, gateway, or notification provider is configured. The checkout flow is a secure placeholder that records orders and clearly indicates payment is pending provider confirmation. Before full production launch, connect an authorized payment provider such as Stripe Connect, Authorize.Net, or another payment gateway, and configure JWT secret and environment settings.

Required configuration:

- JWT_SECRET for secure session handling
- Payment provider credentials for live transaction processing
- Email or SMS provider credentials for order and account notifications
- Persistent database storage for production deployments

## Important notice

This project intentionally avoids claiming an external integration is complete when it is not configured. The application demonstrates realistic marketplace workflows with secure and scalable integration points that are ready to be connected to production services.
