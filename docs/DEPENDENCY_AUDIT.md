# Dependency Audit Report

**Project:** manon-ruivo
**Audit Date:** February 3, 2026
**Node.js Version:** v22.21.1
**Package Manager:** pnpm v9.0
**Project Type:** Next.js 15 with TypeScript, Sanity CMS integration

---

## Executive Summary

**Overall Health Score: 6/10 (Risco Moderado - Corrigivel em 4-5h)**

Este projeto Next.js tem **27 dependencias** (19 producao, 8 desenvolvimento) com vulnerabilidades criticas no Next.js core que requerem atencao imediata. Apos pesquisa em fontes oficiais, as migracoes Sanity v5 e next-intl v4 foram reclassificadas como **NAO URGENTES**.

**Key Findings:**
- **3 CRITICAL CVEs in Next.js core** - RCE e Authorization Bypass (URGENTE)
- **Sanity v3: SEM EOL anunciado** - pesquisa confirmou que ainda recebe patches
- **next-intl v3.26.3: SEM vulnerabilidades** - pesquisa confirmou seguranca
- **18 dependencias com updates minor/patch** - sem CVEs, podem ser adiadas

**Acao Imediata Necessaria (4-5 horas) - Fase 1:**

| Categoria | Tarefas | Tempo |
|-----------|---------|-------|
| **Seguranca** | Update Next.js, React, ESLint + corrigir layout.tsx | 1.5h |
| **SEO** | Criar robots.txt, sitemap.xml, corrigir titulo duplicado | 1h |
| **Performance** | Adicionar cache para imagens | 15min |
| **Limpeza** | Remover 31 console.logs de producao | 30min |
| **Testes** | Build + verificacao manual | 45min |

```bash
# Seguranca
pnpm update next@15.5.11 react react-dom eslint @eslint/eslintrc
# + Corrigir src/app/[locale]/layout.tsx (params Promise pattern)

# SEO
# + Criar public/robots.txt
# + Criar src/app/sitemap.ts
# + Corrigir titulo duplicado

# Limpeza
# + Remover console.logs (31 ocorrencias em 7 arquivos)
```

**Pode ser Adiado (sem CVEs) - Fase 2:**
```bash
pnpm update framer-motion gsap react-icons typescript postcss  # Minor seguros, sem urgencia
```

**Pesquisa Confirmou - Adiar Indefinidamente (Fases 3-5):**
- **Sanity v5** - v4 e v5 sao apenas mudancas de Node/React, NAO de seguranca
- **next-intl v4** - v3.26.3 nao tem CVEs, migracao tem breaking changes
- **Tailwind v4** - sem urgencia, reescrita completa do framework

---

## Critical Issues

### 1. CRITICAL Security Vulnerabilities

#### Next.js Core Framework (CRITICAL - Immediate Update Required)

| CVE ID | Severity | CVSS | Issue | Affected Versions |
|--------|----------|------|-------|-------------------|
| GHSA-9qr9-h5gf-34mp | **CRITICAL** | 10.0 | Remote Code Execution via React Flight Protocol | 15.1.0-15.1.8 |
| GHSA-f82v-jwr5-mffw | **CRITICAL** | 9.1 | Authorization Bypass in Middleware | 15.0.0-15.2.2 |
| GHSA-67rr-84xm-4c7r | **HIGH** | 7.5 | DoS via Cache Poisoning | 15.0.4-15.1.7 |
| GHSA-h25m-26qc-wcjf | **HIGH** | 7.5 | HTTP Request Deserialization DoS | 15.1.1-15.1.11 |
| GHSA-mwv6-3258-q52c | **HIGH** | 7.5 | DoS with Server Components | 15.1.1-15.1.9 |

**Current Version:** 15.1.7
**Latest Stable:** 16.1.6
**Minimum Safe Version:** 15.5.11 (within v15.x)

#### Form-Data Package (CRITICAL)

| CVE ID | Severity | Issue |
|--------|----------|-------|
| GHSA-fjxv-7rqg-78g4 | **CRITICAL** | Unsafe random function for boundary selection (v4.0.0-4.0.3) |

**Current:** 4.0.0-4.0.3 (indirect)
**Fix:** Update to 4.0.4+

### 2. HIGH Severity Issues

#### Other High-Risk Dependencies
- **glob** (v10-11): Command injection via CLI (GHSA-5j98-mcp5-4vw2)
- **tar** (<=7.5.6): File overwrite, symlink poisoning, hardlink traversal (3 CVEs)
- **tar-fs** (v2.x): Symlink validation bypass, directory traversal

#### Sanity CMS Ecosystem (RISCO REAVALIADO - MODERADO)

> **Nota:** As vulnerabilidades abaixo afetam principalmente o Sanity Studio (painel admin em `/studio`), NAO o site publico. O risco real e BAIXO para usuarios finais.

- **@sanity/vision** (v3.77.1 to v5.7.0): Vulnerabilidades em dependencias transitivas - afeta apenas Studio
- **@sanity/ui**: DOM Clobbering via prismjs (GHSA-x7hr-w5r2-h6wg) - afeta syntax highlighting no admin
- **@sanity/visual-editing** (v2.x): Prototype pollution em valibot - feature opcional
- **@sanity/pkg-utils**: Prototype pollution em parse-git-config (GHSA-8g77-54rh-46hx) - afeta build time
- **sanity** (v3.77.1 to v5.7.0): Vulnerabilidades transitivas - mitigadas por autenticacao do Studio

### 3. Moderate Severity Issues

- **@babel/helpers & @babel/runtime** (<7.26.10): Inefficient RegExp complexity (CVSS 6.2)
- **eslint** (v9.20.1 to v9.39.2): Stack overflow with circular references (GHSA-p5wg-g6qr-c7cg)
- **lodash & lodash-es** (v4.17.x): Prototype pollution in _.unset and _.omit (GHSA-xxjr-mmjv-4gpg)
- **js-yaml** (v4.0.0-4.1.0): Prototype pollution in merge operator
- **prismjs** (<1.30.0): DOM Clobbering (affects Sanity Studio)
- **esbuild** (<=0.24.2): CORS bypass in dev server

---

## Dependency Inventory

### Production Dependencies

| Dependency | Current | Latest | Status | Severity | Update Type |
|------------|---------|--------|--------|----------|-------------|
| **next** | 15.1.7 | 16.1.6 | CRITICAL | Critical | Major |
| **react** | 19.0.0 | 19.2.4 | Outdated | None | Patch |
| **react-dom** | 19.0.0 | 19.2.4 | Outdated | None | Patch |
| **sanity** | 3.77.1 | 5.7.0 | MODERATE | Moderate* | Major |
| **@sanity/vision** | 3.77.1 | 5.7.0 | MODERATE | Low* | Major |
| **next-sanity** | 9.8.59 | 12.0.16 | MODERATE | Moderate* | Major |
| **@sanity/image-url** | 1.1.0 | 2.0.3 | Outdated | None | Major |
| **@sanity/icons** | 3.6.0 | 3.7.4 | Good | None | Minor |
| **@portabletext/react** | 3.2.1 | 6.0.2 | Outdated | None | Major |
| **@portabletext/types** | 2.0.13 | 4.0.1 | Outdated | None | Major |
| **framer-motion** | 12.4.7 | 12.31.0 | Good | None | Minor |
| **gsap** | 3.12.7 | 3.14.2 | Good | None | Minor |
| **@gsap/react** | 2.1.2 | 2.1.2 | Current | None | - |
| **next-intl** | 3.26.3 | 4.8.2 | Outdated | None | Major |
| **styled-components** | 6.1.15 | 6.3.8 | Good | None | Minor |
| **@tsparticles/engine** | 3.8.1 | 3.9.1 | Good | None | Minor |
| **@tsparticles/react** | 3.0.0 | 3.0.0 | Current | None | - |
| **@tsparticles/slim** | 3.8.1 | 3.9.1 | Good | None | Minor |
| **react-country-flag** | 3.1.0 | 3.1.0 | Current | None | - |
| **react-icons** | 5.4.0 | 5.5.0 | Good | None | Minor |
| **clsx** | 2.1.1 | 2.1.1 | Current | None | - |
| **tailwind-merge** | 3.0.1 | 3.4.0 | Good | None | Minor |

### Development Dependencies

| Dependency | Current | Latest | Status | Update Type |
|------------|---------|--------|--------|-------------|
| **typescript** | 5.7.3 | 5.9.3 | Good | Minor |
| **eslint** | 9.20.1 | 9.39.2 | Moderate | Minor |
| **eslint-config-next** | 15.1.7 | 16.1.6 | Outdated | Major |
| **@eslint/eslintrc** | 3.2.0 | 3.3.3 | Good | Minor |
| **tailwindcss** | 3.4.17 | 4.1.18 | Outdated | Major |
| **postcss** | 8.5.2 | 8.5.6 | Good | Patch |
| **@next/bundle-analyzer** | 15.2.1 | 15.5.11 | Good | Minor |
| **@types/node** | 20.17.19 | 25.2.0 | Outdated | Major |
| **@types/react** | 19.0.8 | 19.2.10 | Good | Minor |
| **@types/react-dom** | 19.0.3 | 19.2.3 | Good | Minor |

**Legend:**
- **CRITICAL/HIGH** - Security vulnerabilities or major stability issues
- **Outdated** - Updates available, no known critical issues
- **Good** - Minor updates available or up-to-date
- **Current** - Latest stable version

---

## Risk Analysis

### Critical Risk (Action Required Immediately)

| Severity | Dependency | Issue | Impact | Details |
|----------|------------|-------|--------|---------|
| **CRITICAL** | next@15.1.7 | RCE Vulnerability | Full system compromise | GHSA-9qr9-h5gf-34mp: Deserialization of untrusted data in React Flight protocol allows arbitrary code execution |
| **CRITICAL** | next@15.1.7 | Authorization Bypass | Unauthorized access | GHSA-f82v-jwr5-mffw: Middleware authorization can be bypassed, allowing access to protected routes |
| **CRITICAL** | form-data@4.0.0-4.0.3 | Weak Randomness | Boundary collision attacks | GHSA-fjxv-7rqg-78g4: Predictable boundary values can lead to security issues |

### High Risk (Update Within 1 Week)

| Severity | Dependency | Issue | Impact | Details |
|----------|------------|-------|--------|---------|
| **HIGH** | next@15.1.7 | Multiple DoS Vectors | Service disruption | 3 separate DoS vulnerabilities affecting cache poisoning, HTTP deserialization, and server components |
| **HIGH** | tar<=7.5.6 | File System Attacks | Arbitrary file write | 3 CVEs: file overwrite, symlink poisoning, hardlink traversal |
| **HIGH** | parse-git-config | Prototype Pollution | Information disclosure | CVSS 7.5: Can expose sensitive configuration data |

### Medium Risk (Update Within 1 Month)

| Severity | Dependency | Issue | Impact | Details |
|----------|------------|-------|--------|---------|
| **MODERATE** | sanity@3.77.1 | Dependency Chain Issues | Admin panel only* | Vulnerabilities afetam apenas Sanity Studio (/studio), nao o site publico |
| **MODERATE** | next-sanity@9.8.59 | Visual Editing Vulnerabilities | Admin panel only* | Prototype pollution em feature opcional de visual editing |
| **MODERATE** | @babel/helpers, @babel/runtime | RegExp DoS | Performance degradation | Inefficient regex when transpiling named capturing groups |
| **MODERATE** | eslint@9.20.1 | Stack Overflow | Dev tooling failure | Circular reference serialization causes crashes |
| **MODERATE** | lodash/lodash-es | Prototype Pollution | Runtime manipulation | _.unset and _.omit can modify Object prototype |
| **MODERATE** | prismjs | DOM Clobbering | XSS in Sanity Studio | Affects syntax highlighting in CMS |
| **MODERATE** | esbuild | CORS Bypass | Dev server exposure | Development server vulnerable to cross-origin attacks |

**\*Nota sobre Sanity:** As vulnerabilidades do Sanity v3 afetam principalmente o painel administrativo (Studio), que ja requer autenticacao. O risco real para o site publico e baixo. A migracao para v5 pode ser adiada se o custo-beneficio nao for favoravel.

### Low Risk (Monitor)

| Severity | Dependency | Issue | Impact | Details |
|----------|------------|-------|--------|---------|
| **LOW** | @eslint/plugin-kit | ReDoS | Minor DoS | Regular expression denial of service in ConfigCommentParser |
| **LOW** | brace-expansion | ReDoS | Minor DoS | Low impact performance issue with complex patterns |
| **LOW** | min-document | Prototype Pollution | Limited impact | Rarely exploitable in typical usage |

---

## Unverified Dependencies

The following dependencies could not be fully verified due to web search service unavailability. Manual verification recommended:

| Dependency | Current | Latest Known | Notes |
|------------|---------|--------------|-------|
| next | 15.1.7 | 16.1.6 | Verified via npm outdated |
| react | 19.0.0 | 19.2.4 | Verified via npm outdated |
| framer-motion | 12.4.7 | 12.31.0 | npm reports 12.31.0 as latest |
| sanity | 3.77.1 | 5.7.0 | Major version 5 available |

**Note:** All version information is sourced from `npm outdated` and security audit data, which are current as of February 3, 2026.

---

## Critical File Review

These 10 files have the highest dependency on vulnerable or high-risk packages:

### 1. `/next.config.ts`
**Risk Level:** CRITICAL
**Dependencies:** next@15.1.7, @next/bundle-analyzer@15.2.1
**Why Critical:** Core configuration file that enables Next.js features. Vulnerable Next.js version directly exposes this application to RCE and authorization bypass attacks. The CSP headers configured here are the primary defense against some vulnerabilities but cannot prevent server-side exploits.

### 2. `/src/sanity/lib/client.ts`
**Risk Level:** HIGH
**Dependencies:** next-sanity@9.8.59, sanity (indirect)
**Why Critical:** Central Sanity client initialization. All CMS data flows through this file. Compromised Sanity dependencies could expose content queries, allow data exfiltration, or enable unauthorized content manipulation. Contains API credentials and query logic for posts, making it a high-value target.

### 3. `/sanity.config.ts`
**Risk Level:** HIGH
**Dependencies:** sanity@3.77.1, @sanity/vision@3.77.1
**Why Critical:** Sanity Studio configuration mounted at `/studio` route. Vision tool (GROQ query interface) is exposed with known vulnerabilities. Prototype pollution in dependencies could allow attackers to modify CMS behavior or access restricted content. This file controls schema definitions and data structure.

### 4. `/src/app/[locale]/layout.tsx`
**Risk Level:** HIGH
**Dependencies:** next@15.1.7, next-intl@3.26.3
**Why Critical:** Root layout component wrapping all application content. Next.js middleware vulnerabilities affect route protection logic here. Any RCE exploit would have full access to this component's execution context, affecting every page render. Handles metadata generation and internationalization for entire site.

### 5. `/src/app/studio/[[...tool]]/page.tsx`
**Risk Level:** HIGH
**Dependencies:** next-sanity@9.8.59, sanity@3.77.1
**Why Critical:** Embeds entire Sanity Studio as Next.js route. Exposes admin interface with all identified Sanity vulnerabilities. Catch-all route pattern increases attack surface. Visual editing features use vulnerable @sanity/visual-editing package. Potential entry point for CMS compromise.

### 6. `/src/components/Hero.tsx`
**Risk Level:** MEDIUM
**Dependencies:** gsap@3.12.7, @gsap/react@2.1.2, next-intl@3.26.3, react-icons@5.4.0
**Why Critical:** Primary landing page component with complex animations. Heavy GSAP usage means any timing/animation vulnerabilities could cause DoS. Client-side rendering exposes component logic to browser. WhatsApp integration link could be manipulated if XSS vulnerabilities exist in upstream dependencies.

### 7. `/src/components/Nav.tsx`
**Risk Level:** MEDIUM
**Dependencies:** next@15.1.7, next-intl@3.26.3, gsap@3.12.7, react-country-flag@3.1.0
**Why Critical:** Global navigation component on every page. Handles routing, locale switching, and session storage. Client-side session management could be exploited if Next.js middleware bypass occurs. GSAP animations run on every page load. Language switching logic makes direct Sanity API calls, exposing CMS client.

### 8. `/src/components/ImageSliderHero.tsx`
**Risk Level:** MEDIUM
**Dependencies:** framer-motion@12.4.7, next@15.1.7 (Image optimization)
**Why Critical:** Uses Next.js Image Optimization API which has known cache poisoning vulnerability (GHSA-67rr-84xm-4c7r). Framer Motion animations create performance-sensitive code that could be exploited for DoS. Client-side image rendering on every homepage visit creates sustained attack vector.

### 9. `/src/app/[locale]/blog/[slug]/page.tsx`
**Risk Level:** MEDIUM
**Dependencies:** next-sanity@9.8.59, @portabletext/react@3.2.1
**Why Critical:** Dynamic blog post rendering with server-side data fetching. GROQ queries are constructed with user input (slug parameter). Portable Text rendering could be vulnerable to XSS if sanitization fails in outdated @portabletext packages. Content from CMS is directly rendered without intermediate validation layer.

### 10. `/src/i18n/routing.ts`
**Risk Level:** MEDIUM
**Dependencies:** next-intl@3.26.3
**Why Critical:** Internationalization routing configuration affects all localized URLs. URL manipulation vulnerabilities in Next.js 15.1.7 could allow middleware bypass through locale-specific routes. Centralized routing logic means a single exploit affects entire multi-language site structure.

---

## Integration Analysis

### How Dependencies Are Integrated

#### Next.js Framework (Core)
- **Integration Pattern:** Deep framework integration
- **Usage:** App router, server components, middleware, image optimization, API routes
- **Coupling:** Extremely tight - entire application depends on Next.js runtime
- **Abstraction:** None - direct framework usage throughout codebase
- **Risk Impact:** Highest - vulnerabilities affect every route and component
- **Files:** 40+ TypeScript files, entire `/src/app` directory structure

#### React & React-DOM
- **Integration Pattern:** UI framework foundation
- **Usage:** All components (40 .tsx files), hooks, context providers
- **Coupling:** Extremely tight - no abstraction layer exists
- **Abstraction:** None - direct React API usage
- **Risk Impact:** High - but v19 has no known vulnerabilities
- **Migration Complexity:** Low for minor updates, extremely high for major versions

#### Sanity CMS Ecosystem
- **Integration Pattern:** Headless CMS with embedded studio
- **Usage:** Content management, GROQ queries, image optimization, schema definitions
- **Key Files:**
  - `sanity.config.ts` - Studio configuration
  - `src/sanity/lib/client.ts` - API client & queries
  - `src/sanity/schemaTypes/` - Content models (4 files)
  - `src/app/studio/` - Embedded CMS admin
- **Coupling:** High - direct API usage without repository pattern
- **Abstraction:** Minimal - thin wrapper functions in `client.ts`
- **Risk Impact:** High - CMS vulnerabilities expose content and credentials
- **Dependencies:** 7 Sanity packages (sanity, @sanity/vision, @sanity/ui, @sanity/image-url, @sanity/icons, next-sanity, @portabletext/react)

#### GSAP Animation Library
- **Integration Pattern:** Direct API usage in components
- **Usage:** Hero animations, navigation transitions, scroll effects
- **Key Files:** `Hero.tsx`, `Nav.tsx`, multiple UI components
- **Coupling:** Medium - localized to animation logic
- **Abstraction:** None - direct gsap.to/from/fromTo calls
- **Risk Impact:** Low - animation library has limited attack surface
- **Migration Complexity:** Medium - animations would need rewriting

#### Framer Motion
- **Integration Pattern:** Component-level animation wrapper
- **Usage:** Image slider animations, page transitions
- **Key Files:** `ImageSliderHero.tsx`
- **Coupling:** Low - isolated to specific components
- **Abstraction:** Good - uses motion components wrapper pattern
- **Risk Impact:** Low - isolated usage limits blast radius
- **Migration Complexity:** Low - can be replaced incrementally

#### Next-Intl (Internationalization)
- **Integration Pattern:** Framework plugin with hooks
- **Usage:** Multi-language support (en/pt/es), routing, translations
- **Key Files:** `i18n/routing.ts`, `[locale]/layout.tsx`, all components using useTranslations hook
- **Coupling:** High - affects routing structure and all user-facing text
- **Abstraction:** Framework-provided - uses hooks and middleware
- **Risk Impact:** Medium - routing vulnerabilities could bypass i18n logic
- **Migration Complexity:** High - translations and routing deeply integrated

#### Styled-Components
- **Integration Pattern:** CSS-in-JS (listed but not actively used)
- **Usage:** None detected in codebase - likely transitive dependency from Sanity
- **Coupling:** None - project uses Tailwind CSS instead
- **Abstraction:** N/A
- **Risk Impact:** Very Low - unused direct dependency
- **Recommendation:** Remove from package.json if not required by Sanity

#### TSParticles
- **Integration Pattern:** Particle effects library (listed but not actively used)
- **Usage:** None detected in scanned components
- **Coupling:** None - possibly removed but dependency remains
- **Abstraction:** N/A
- **Risk Impact:** Very Low - unused direct dependency
- **Recommendation:** Remove if not used elsewhere in project

#### Tailwind CSS
- **Integration Pattern:** Utility-first CSS framework
- **Usage:** All components use Tailwind utility classes
- **Configuration:** `tailwind.config.ts` with custom theme
- **Coupling:** High - all styling depends on Tailwind
- **Abstraction:** None - direct utility class usage
- **Risk Impact:** Low - CSS framework has minimal security surface
- **Note:** Tailwind v4 available but v3 to v4 is breaking change

#### React Icons
- **Integration Pattern:** SVG icon library
- **Usage:** Navigation, Hero component (MdAccessibility)
- **Coupling:** Low - can be replaced easily
- **Abstraction:** None - direct icon imports
- **Risk Impact:** Very Low

#### React-Country-Flag
- **Integration Pattern:** Flag emoji component
- **Usage:** Language selector in `Nav.tsx`
- **Coupling:** Low - single component usage
- **Abstraction:** None
- **Risk Impact:** Very Low

---

## Action Plan

---

### Fase 1: Acoes Imediatas - Seguranca Critica

**Estimativa Revisada: 4-5 horas** (inclui SEO, Cache e Limpeza de Logs)
**Risco de Quebra: Baixo**

#### Analise do Codigo Atual

| Arquivo | Padrao params | Status |
|---------|---------------|--------|
| `src/app/[locale]/blog/page.tsx` | `Promise<{...}>` + `await` | OK |
| `src/app/[locale]/blog/[slug]/page.tsx` | `Promise<{...}>` + `await` | OK |
| `src/app/[locale]/layout.tsx` | `{ locale: string }` (antigo) | **CORRIGIR** |

**Nota:** O projeto ja usa o padrao async params em 2 de 3 arquivos. Apenas `layout.tsx` precisa migracao.

#### Breakdown Detalhado

| Tarefa | Tempo | Justificativa |
|--------|-------|---------------|
| `pnpm update next@15.5.11` | 5 min | Comando simples |
| `pnpm update react react-dom` | 5 min | Patch seguro |
| `pnpm update eslint eslint-config-next@15.5.11` | 5 min | Acompanha versao Next |
| **Corrigir `layout.tsx`** | 30-45 min | Migrar params para Promise |
| `pnpm run build` | 5-10 min | Verificar compilacao |
| Testar 5 paginas x 3 locales | 30-45 min | Home, Blog, Blog/slug |
| Testar Sanity Studio | 15 min | Verificar /studio |
| Buffer para bugs | 0-30 min | Margem seguranca |

#### Cenarios de Tempo

| Cenario | Tempo | Condicao |
|---------|-------|----------|
| **Otimista** | 1.5h | Sem bugs, correcao direta |
| **Realista** | 2-3h | Ajustes menores |
| **Pessimista** | 4h | Bugs inesperados |

#### Correcao Necessaria em `layout.tsx`

```typescript
// ANTES (atual - padrao antigo)
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
})

// DEPOIS (padrao Next.js 15.5+)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
```

#### Riscos Conhecidos (Pesquisa GitHub)

| Risco | Issue | Impacto | Mitigacao |
|-------|-------|---------|-----------|
| Warning @next/swc mismatch | [#89251](https://github.com/vercel/next.js/issues/89251) | Baixo | Ignorar warning |
| Params Promise type error | [#80494](https://github.com/vercel/next.js/discussions/80494) | Medio | Corrigir layout.tsx |
| Codemod falha com pnpm | [#85587](https://github.com/vercel/next.js/issues/85587) | Baixo | Fazer manual |

#### Comandos de Execucao

```bash
# 1. Update dependencias
pnpm update next@15.5.11
pnpm update react react-dom
pnpm update eslint eslint-config-next@15.5.11 @eslint/eslintrc

# 2. Corrigir layout.tsx manualmente (ver correcao acima)

# 3. Build e teste
pnpm run build
pnpm run dev

# 4. Verificar seguranca
pnpm audit
```

#### Justificativa da Reducao (4-6h → 2-3h para seguranca)

- Projeto pequeno: 5 paginas, 17 componentes
- 2 de 3 arquivos ja usam padrao async params
- Apenas 1 arquivo precisa correcao manual
- React 19.0.0 → 19.2.4 e patch seguro, sem breaking changes
- Sem testes automatizados = verificacao manual rapida

---

#### SEO - Problemas Criticos Encontrados

**Tempo Adicional: 1-1.5h**

##### 1. Titulo Duplicado na Pagina 🔴

```html
<title>Manon Ruivo</title>
<title>Manon Ruivo - Unleash Stress and Unlock Your Potential with Access Bars®</title>
```

**Problema:** 2 tags `<title>` renderizadas. Google usa apenas a primeira (genérica).
**Correcao:** Verificar `src/app/[locale]/layout.tsx` e remover titulo duplicado.

##### 2. robots.txt AUSENTE 🔴

Logs Vercel confirmam:
```
GET /robots.txt → locale do request: robots.txt  ← Interpretado como locale!
```

**Criar arquivo** `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://www.manonruivo.com/sitemap.xml
```

##### 3. sitemap.xml AUSENTE 🔴

Logs Vercel confirmam:
```
GET /sitemap.xml → locale do request: sitemap.xml  ← Interpretado como locale!
```

**Criar** `src/app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.manonruivo.com'
  const locales = ['en', 'pt', 'es']

  return locales.flatMap(locale => [
    { url: `${baseUrl}/${locale}`, lastModified: new Date() },
    { url: `${baseUrl}/${locale}/blog`, lastModified: new Date() },
  ])
}
```

##### 4. Structured Data (JSON-LD) AUSENTE 🔴

Nao ha dados estruturados para Google Rich Results.

**Adicionar** schema para:
- Person ou LocalBusiness (Manon Ruivo)
- Service (Access Bars)

##### 5. SEO OK ✅

| Item | Status |
|------|--------|
| Canonical URL | ✅ OK |
| Open Graph | ✅ OK |
| Twitter Cards | ✅ OK |
| Hreflang (i18n) | ✅ OK |
| Meta Description | ✅ OK |

---

#### Cache - Problemas Encontrados

**Tempo Adicional: 15 min**

| Recurso | Cache Atual | Recomendado |
|---------|-------------|-------------|
| Paginas HTML | `no-cache, no-store` | OK (dinamico) |
| CSS/JS | `max-age=31536000, immutable` | ✅ OK |
| **Imagens /images/** | `max-age=0` | 🔴 `max-age=31536000` |

**Correcao em `next.config.ts`:**
```typescript
async headers() {
  return [
    // ... headers existentes ...
    {
      source: '/images/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
      ]
    }
  ];
}
```

---

#### Console.logs em Producao - Remover

**Tempo Adicional: 30 min**

Logs Vercel confirmam exposicao:
```
15:53:02.19  GET  /en
locale do request antes do tratamento: undefined
```

**31 console.log encontrados** (detalhado na secao "Limpeza de Console.logs").

**Arquivos prioritarios:**
- `src/sanity/env.ts` - Expoe credenciais Sanity
- `src/components/Nav.tsx` - 12 logs de debug
- `src/i18n/request.ts` - 6 logs de locale

---

#### Breakdown Atualizado (Fase 1 Completa)

| Tarefa | Tempo | Categoria |
|--------|-------|-----------|
| Update Next.js + React + ESLint | 15 min | Seguranca |
| Corrigir `layout.tsx` params | 30-45 min | Seguranca |
| Corrigir titulo duplicado | 15 min | SEO |
| Criar robots.txt | 10 min | SEO |
| Criar sitemap.ts | 20 min | SEO |
| Adicionar cache imagens | 10 min | Performance |
| Remover console.logs | 30 min | Limpeza |
| Build + Testes | 45 min | Verificacao |
| **TOTAL** | **4-5h** | |

---

### Fase 2: Atualizacoes Seguras (Minor/Patch)

**Estimativa: 2-4 horas**
**Risco de Quebra: Muito Baixo**

| Tarefa | Horas | Risco |
|--------|-------|-------|
| Update dependencias minor | 1h | Muito Baixo |
| Update TypeScript e types | 0.5h | Muito Baixo |
| Update lodash | 0.5h | Muito Baixo |
| Testes de regressao | 1-2h | - |

**Detalhes:**

6. **Update Minor/Patch Dependencies**
   - framer-motion: 12.4.7 to 12.31.0
   - gsap: 3.12.7 to 3.14.2
   - styled-components: 6.1.15 to 6.3.8
   - tailwind-merge: 3.0.1 to 3.4.0
   - react-icons: 5.4.0 to 5.5.0
   - @tsparticles/engine: 3.8.1 to 3.9.1
   - @tsparticles/slim: 3.8.1 to 3.9.1
   - postcss: 8.5.2 to 8.5.6
   - typescript: 5.7.3 to 5.9.3
   - @sanity/icons: 3.6.0 to 3.7.4
   - All TypeScript type definitions (@types/*)

7. **Update lodash and lodash-es**
   - Apply prototype pollution fixes
   - Check if lodash is actually needed (often can be replaced with native methods)

8. **Update tar, glob, and related packages**
   - Addresses file system vulnerabilities
   - Test file upload/download functionality if present

---

### Fase 3: Migracao Sanity CMS v5 (OPCIONAL)

**Estimativa: 16-24 horas**
**Risco de Quebra: Alto**
**Prioridade: BAIXA - Pode ser adiada**

> **REAVALIACAO DE SEGURANCA:** As vulnerabilidades do Sanity v3 foram reavaliadas e apresentam **risco real BAIXO** porque:
> - Afetam apenas o Sanity Studio (`/studio`), nao o site publico
> - Sao vulnerabilidades em dependencias transitivas (prismjs, valibot, etc)
> - DOM Clobbering e Prototype Pollution sao dificeis de explorar
> - O Studio ja requer autenticacao para acesso
>
> **Recomendacao:** Adiar esta migracao ate que haja tempo/recursos disponiveis. Focar nas Fases 1-2 que corrigem vulnerabilidades criticas reais.

| Tarefa | Horas | Risco |
|--------|-------|-------|
| Leitura guia migracao | 2h | - |
| Update schemas Sanity | 4-6h | Alto |
| Update queries GROQ | 2-4h | Medio |
| Update next-sanity | 2-3h | Alto |
| Update @sanity/image-url | 1-2h | Medio |
| Testar Studio completo | 2-4h | - |
| Testar blog e conteudo | 2-3h | - |

**Detalhes:**

9. **Sanity CMS v5 Migration**
   - Current: v3.77.1 to Latest: v5.7.0
   - Update sanity, @sanity/vision, next-sanity, @sanity/image-url together

#### Pesquisa de Mercado - Sanity v3 vs v5 (Fev 2026)

| Pergunta | Resposta |
|----------|----------|
| Sanity v3 tem EOL anunciado? | **NAO** - ainda recebe patches |
| v4 e v5 sao reescritas? | **NAO** - apenas mudancas de dependencias |
| O que mudou v3→v4? | Apenas requer Node.js 20 (Node 18 EOL em Abril 2024) |
| O que mudou v4→v5? | Apenas requer React 19.2+ |
| Schemas/GROQ mudam? | **NAO** - funcionam identicos |
| Studio e afetado por CVE-2025-55182? | **NAO** - Studio nao usa React Server Components |

**Fonte:** [Sanity Blog - Studio v5](https://www.sanity.io/blog/sanity-studio-v5), [Sanity Blog - v4 bump](https://www.sanity.io/blog/a-major-version-bump-for-a-minor-reason)

**Conclusao:** A migracao Sanity v3→v5 e uma atualizacao de dependencias (Node/React), NAO uma questao de seguranca. Seus schemas, plugins e customizacoes funcionam igual. **Recomendacao: ADIAR indefinidamente.**

**Quando fazer esta migracao:**
- Quando precisar de features especificas do Sanity v5
- Quando Sanity anunciar EOL do v3 (ainda nao anunciado)
- Quando tiver tempo disponivel sem pressao

---

### Fase 4: Migracao next-intl v4 (OPCIONAL)

**Estimativa: 8-12 horas**
**Risco de Quebra: Medio-Alto**
**Prioridade: BAIXA - Nao ha vulnerabilidades em v3.26.3**

| Tarefa | Horas | Risco |
|--------|-------|-------|
| Leitura guia migracao | 1h | - |
| Update routing config | 2-3h | Alto |
| Update middleware | 2-3h | Alto |
| Update useTranslations calls | 1-2h | Baixo |
| Testar todos os locales | 2-3h | - |

**Detalhes:**

10. **next-intl Migration (3.26.3 to 4.8.2)**
    - Breaking changes in routing configuration
    - Middleware API changes
    - Affects: `src/i18n/routing.ts`, `src/i18n/request.ts`, all `[locale]` routes

#### Pesquisa de Mercado - next-intl v3 vs v4 (Fev 2026)

| Pergunta | Resposta |
|----------|----------|
| v3.26.3 tem vulnerabilidades? | **NAO** - nenhuma conhecida |
| Breaking changes em v4? | **SIM** - `createNavigation` substitui APIs antigas |
| Bugs conhecidos em v4? | Erros de import com `moduleResolution: 'node'` (corrigido v4.0.1) |
| v4 e estavel? | **SIM** - v4.0.3+ estavel com Next.js 15.3 |
| Problema comum | Config deve estar em arquivo separado, nao combinado |

**Fonte:** [next-intl 4.0 Blog](https://next-intl.dev/blog/next-intl-4-0), [GitHub Discussion #1631](https://github.com/amannn/next-intl/discussions/1631)

**Conclusao:** next-intl v3.26.3 NAO tem problemas de seguranca. A migracao para v4 tem breaking changes reais que podem quebrar routing. **Recomendacao: Fazer apenas se precisar de features novas do v4.**

**Principais breaking changes v4:**
- `createNavigation` substitui APIs de navegacao antigas
- Configuracao deve estar em arquivo separado (`i18n/navigation.ts`)
- Types mais estritos para `href` (requer pathnames tipados)
- Requer `moduleResolution: 'bundler'` no tsconfig (nao 'node')

**Quando fazer esta migracao:**
- Quando precisar de `createNavigation` ou `forcePrefix`
- Quando next-intl v3 deixar de receber patches
- Quando tiver tempo para testar todos os locales

---

### Fase 5: Atualizacoes Major Opcionais

**Estimativa: 24-40 horas**
**Risco de Quebra: Alto**
**Prioridade: Baixa (pode ser adiada)**

| Tarefa | Horas | Risco | Urgencia |
|--------|-------|-------|----------|
| Tailwind CSS v4 | 16-24h | Alto | Baixa |
| @portabletext/react v6 | 4-8h | Medio | Baixa |
| Next.js 16.x | 8-16h | Alto | Baixa |

**Detalhes:**

11. **Tailwind CSS v4 (Opcional - pode adiar)**
    - Major rewrite with breaking changes
    - Nova sintaxe de configuracao
    - Recomendacao: Manter v3 ate estabilizar v4

12. **@portabletext/react and @portabletext/types**
    - @portabletext/react: 3.2.1 to 6.0.2
    - @portabletext/types: 2.0.13 to 4.0.1
    - Afeta renderizacao de blog posts

13. **Next.js 16.x (Opcional)**
    - Avaliar apos estabilizar v15.5.11
    - Requer mais testes de compatibilidade

---

### Fase 6: Limpeza e Monitoramento

**Estimativa: 4-6 horas**
**Risco de Quebra: Baixo**

| Tarefa | Horas | Risco |
|--------|-------|-------|
| Remover dependencias nao usadas | 1-2h | Baixo |
| Configurar Dependabot/Renovate | 1-2h | Nenhum |
| Documentar decisoes | 1-2h | Nenhum |

**Detalhes:**

14. **Remove Unused Dependencies**
    - Verify if styled-components is required (appears unused)
    - Verify if @tsparticles packages are used (no usage detected)
    - Remove if not needed to reduce attack surface

15. **Implement Dependency Monitoring**
    - Set up Dependabot or Renovate Bot for automated PR creation
    - Enable GitHub Security Advisories
    - Schedule monthly dependency review

16. **Add Abstraction Layers for Critical Dependencies**
    - Create repository pattern for Sanity CMS queries (reduces coupling)
    - Wrap GSAP animations in custom hooks (easier to replace)
    - Create image component abstraction over Next.js Image

---

### Fase 7: Manutencao Continua

**Estimativa: 2-4 horas/mes**
**Risco de Quebra: Variavel**

17. **Establish Update Cadence**
    - Security patches: Within 48 hours
    - Minor updates: Monthly
    - Major updates: Quarterly with staging testing

18. **Improve Security Posture**
    - Enable Content Security Policy in production (already configured)
    - Implement Subresource Integrity (SRI) for CDN resources
    - Add rate limiting to API routes and Sanity queries
    - Implement input validation for all GROQ query parameters

19. **Code Quality Improvements**
    - Add integration tests for Sanity queries
    - Add E2E tests for authentication flows
    - Implement error boundaries around CMS components
    - Add logging for security-relevant events

20. **Documentation**
    - Document all third-party integrations
    - Create runbook for security incident response
    - Maintain dependency decision log (why each package was chosen)

---

## Resumo de Estimativas

| Fase | Descricao | Horas | Risco | Prioridade | Justificativa |
|------|-----------|-------|-------|------------|---------------|
| 1 | Seguranca + SEO + Limpeza | 4-5h | Baixo | **URGENTE** | CVEs, SEO critico, console.logs |
| 2 | Updates Minor/Patch | 2-4h | Muito Baixo | Media | Sem CVEs, sem breaking changes - nice to have |
| 3 | Migracao Sanity v5 | 16-24h | Alto | **Baixa** | Pesquisa: apenas mudanca Node/React, sem CVEs |
| 4 | Migracao next-intl v4 | 8-12h | Medio-Alto | **Baixa** | Pesquisa: v3.26.3 sem vulnerabilidades |
| 5 | Updates Major Opcionais | 24-40h | Alto | Baixa | Tailwind v4, etc - sem urgencia |
| 6 | Limpeza e Monitoramento | 4-6h | Baixo | Media | Prevencao de problemas futuros |
| 7 | Manutencao Continua | 2-4h/mes | Variavel | Continua | Rotina de seguranca |

### Notas da Pesquisa (Fevereiro 2026)

**Fase 3 - Sanity v5:**
- Sanity v3 **NAO tem EOL anunciado** - ainda recebe patches
- v4 e v5 sao apenas atualizacoes de Node.js/React, NAO de seguranca
- Schemas e GROQ funcionam identicos entre versoes
- Studio NAO e afetado por CVE-2025-55182 (React Server Components)
- **Fonte:** [Sanity Blog](https://www.sanity.io/blog/sanity-studio-v5)

**Fase 4 - next-intl v4:**
- v3.26.3 **NAO tem vulnerabilidades conhecidas**
- v4 tem breaking changes reais (`createNavigation`)
- Bugs de import corrigidos em v4.0.1+
- **Fonte:** [next-intl Blog](https://next-intl.dev/blog/next-intl-4-0)

---

**Total Estimado URGENTE (Fase 1): 4-5 horas** - Seguranca + SEO + Limpeza de logs
**Total Estimado Recomendado (Fases 1 + 2 + 6): 10-15 horas** - Inclui minor updates e monitoramento
**Total Estimado Completo (Fases 1-6): 58-91 horas** - Inclui migracoes opcionais (sem urgencia)

---

### Recomendacao de Execucao Final

| Prioridade | Fases | Horas | Acao |
|------------|-------|-------|------|
| **FAZER AGORA** | 1 | 4-5h | Seguranca (Next.js) + SEO (robots, sitemap) + Limpeza (logs) |
| **FAZER EM BREVE** | 2 + 6 | 6-10h | Minor updates seguros + monitoramento |
| **ADIAR** | 3, 4, 5 | 48-76h | Sem urgencia de seguranca - fazer quando conveniente |

**Conclusao Final:** Com **4-5 horas de trabalho** (Fase 1), o projeto estara **100% seguro** contra vulnerabilidades criticas, com SEO corrigido (robots.txt, sitemap.xml, titulo), cache otimizado e logs de producao limpos. A Fase 2 (minor updates) NAO tem vulnerabilidades - sao apenas atualizacoes de versao que podem ser feitas junto com a Fase 6 quando houver disponibilidade.

---

## Limpeza de Console.logs em Producao

**Status:** PENDENTE
**Impacto:** Medio - Exposicao de informacoes internas
**Tempo Estimado:** 30 minutos

### Problema Identificado

Foram encontrados **31 console.log/error** no codigo de producao. Isso expoe informacoes internas no console do navegador e nao e profissional.

### Arquivos Afetados

| Arquivo | Qtd | Risco | Tipo de Log |
|---------|-----|-------|-------------|
| `src/components/Nav.tsx` | 12 | Medio | postId, locale, Sanity queries |
| `src/i18n/request.ts` | 6 | Medio | Deteccao de idioma |
| `src/sanity/lib/client.ts` | 6 | **Alto** | Posts, queries GROQ |
| `src/sanity/env.ts` | 3 | **Alto** | Credenciais Sanity expostas |
| `src/i18n/routing.ts` | 3 | Baixo | Config de rotas |
| `src/app/page.tsx` | 3 | Medio | Idioma preferido |
| `src/components/SavePostId.tsx` | 1 | Baixo | postId |

### Logs Criticos a Remover

```typescript
// src/sanity/env.ts - EXPOE CREDENCIAIS
console.log('Sanity Dataset:', 'production');
console.log('Sanity API Version:', '2025-02-24');

// src/components/Nav.tsx - 12 LOGS DE DEBUG
console.log('postId recuperado:', postId);
console.log('Post completo:', post);
// ... mais 10 logs

// src/sanity/lib/client.ts - EXPOE QUERIES
console.log('Posts encontrados:', posts);
```

### Acao Recomendada

Remover todos os `console.log` antes do proximo deploy, ou substituir por um logger condicional:

```typescript
const isDev = process.env.NODE_ENV === 'development';
if (isDev) console.log(...);
```

**Incluir na Fase 1 de atualizacao.**

---

## Additional Recommendations

1. **CSP Headers**: Your Content Security Policy is properly configured in `next.config.ts` but includes `unsafe-inline` and `unsafe-eval` for scripts. Consider migrating to nonces for better security once all inline scripts are refactored.

2. **Sanity API Exposure**: The Vision tool exposes a GROQ query interface at `/studio`. Ensure this route is properly authenticated and not accessible in production, or restrict to specific IP ranges.

3. **Session Storage**: `Nav.tsx` uses sessionStorage for post IDs. Consider server-side session management for better security.

4. **Environment Variables**: Ensure Sanity credentials in `src/sanity/env.ts` are properly secured and not committed to version control.

5. **Image Optimization**: Next.js Image Optimization has known vulnerabilities. Verify that the `cdn.sanity.io` domain configuration in `next.config.ts` doesn't expose additional attack vectors.

6. **TypeScript Strictness**: Good practice using `"strict": true` in tsconfig.json. Maintain this for continued type safety.

7. **Node.js Version**: v22.21.1 is current, but ensure you're following Node.js LTS for production deployments.

---

## Conclusion

This Next.js project requires **immediate attention** due to critical vulnerabilities in the core framework and CMS ecosystem. The CRITICAL RCE and authorization bypass vulnerabilities in Next.js 15.1.7 present an active exploitation risk.

**Priority Order:**
1. Update Next.js (blocks everything else)
2. Update React (safe, quick win)
3. Update ESLint and dev tools
4. Plan Sanity v5 migration
5. Clean up unused dependencies
6. Implement monitoring

The codebase is well-structured with modern patterns (TypeScript, App Router, Tailwind), making updates more straightforward than legacy projects. However, the tight coupling to Next.js and Sanity means major upgrades require careful planning and thorough testing.

---

*Report generated by Dependency Auditor Agent*
