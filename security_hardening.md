# Security Hardening Checklist - Rogue Linux Platform

## 1. Application Security
- [x] **CSP (Content Security Policy)**: Implemented in `middleware.ts`. Strict `default-src 'self'`.
- [x] **Secure Headers**: HSTS, X-Frame-Options, X-Content-Type-Options configured.
- [x] **JWT Authentication**: HTTPOnly cookies used for token storage. No localStorage.
- [x] **Input Validation**: API routes should validate input (partially implemented in login).
- [ ] **Rate Limiting**: Need to configure Nginx or Upstash for API routes.
- [ ] **CSRF Protection**: Next.js Server Actions/API routes need CSRF checks (partially covered by Origin/Referer headers).

## 2. Infrastructure Security
- [x] **Docker**: Non-root user (`nextjs`) configured in `Dockerfile`.
- [x] **Minimal Base Image**: Using `node:20-alpine`.
- [ ] **Database**: Ensure PostgreSQL accepts connections only from the private network.
- [ ] **Secrets**: Rotate JWT_SECRET and DB credentials regularly. Use a Secret Manager (Vault/AWS Secrets Manager).

## 3. Network Security
- [x] **TLS/SSL**: Nginx configured with modern cipher suites (TLS 1.2+).
- [ ] **Firewall**: Restrict ports 80/443 to load balancer, lock down 5432.
- [ ] **DDoS Protection**: Utilize Cloudflare or AWS Shield.

## 4. CI/CD Pipeline
- [x] **Linting**: Enforced in CI.
- [x] **Dependency Scanning**: `npm audit` in CI pipeline.
- [ ] **Container Scanning**: Scan Docker image for vulnerabilities using Trivy or Clair.
- [ ] **SAST**: Integrate SonarQube or CodeQL.

## 5. Monitoring & Logging
- [ ] **Structured Logging**: Implement Pino or Winston for JSON logs.
- [ ] **Alerting**: Set up alerts for 5xx errors and failed login attempts.
- [ ] **Audit Logs**: Record critical actions (Admin login, content changes) to an immutable ledger.
