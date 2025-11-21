# Service Detail Pages Architecture

## Structure Overview

```
src/
├── views/
│   ├── services/
│   │   ├── WebDevelopmentService.vue          # Specific service page
│   │   ├── AISystemsService.vue               # (To be created)
│   │   ├── ECommerceService.vue               # (To be created)
│   │   └── ... (one for each service)
│   ├── ServiceDetailPage.vue                  # Generic fallback page
│   └── HomePage.vue
├── components/
│   └── service-detail/                        # Reusable section components
│       ├── HeroSection.vue                    # Hero banner with back button
│       ├── DescriptionSection.vue             # Service description
│       ├── FeaturesSection.vue                # What We Offer grid
│       ├── TechnologiesSection.vue            # Tech stack tags
│       ├── CaseStudiesSection.vue             # Success stories
│       ├── BenefitsSection.vue                # Numbered benefits
│       └── CTASection.vue                     # Call to action
└── router/
    └── index.ts                               # Route configuration
```

## How It Works

### 1. Section Components (`components/service-detail/`)

Each section is a reusable component that:

- Accepts props for its specific data
- Has its own styling scoped to that section
- Can be used across multiple service pages

Example:

```vue
<HeroSection
  :title="serviceData.title"
  :icon="serviceData.icon"
  :tagline="serviceData.tagline"
/>
```

### 2. Service-Specific Pages (`views/services/`)

Each service (like Web Development) has its own component that:

- Imports all the section components it needs
- Defines its unique content data
- Composes sections in the desired order
- Wraps everything with NavigationBar and FooterSection

Example structure of WebDevelopmentService.vue:

```vue
<NavigationBar />
<HeroSection />
<DescriptionSection />
<FeaturesSection />
<TechnologiesSection />
<CaseStudiesSection />
<BenefitsSection />
<CTASection />
<FooterSection />
```

### 3. Router Configuration

Each service has its own dedicated route:

```typescript
{
  path: '/services/web-development',
  name: 'web-development',
  component: WebDevelopmentService
}
```

## Current Status

### ✅ Completed

- WebDevelopmentService.vue with full content
- All 7 reusable section components
- Router configuration
- Proper component hierarchy

### 🔲 To Be Created (8 more services)

1. AISystemsService.vue
2. ECommerceService.vue
3. CloudServicesService.vue
4. APIService.vue
5. DBADataWarehousingService.vue
6. ExcelOptimizationService.vue
7. MobileSolutionsService.vue
8. ConsultingService.vue

## Creating New Service Pages

To add a new service page:

1. **Create the service component** in `views/services/`
2. **Copy the structure** from WebDevelopmentService.vue
3. **Update the service data** object with your content
4. **Add a route** in `router/index.ts`

Example for AI Systems Integration:

```typescript
// router/index.ts
{
  path: '/services/ai-systems-integration',
  name: 'ai-systems-integration',
  component: AISystemsService
}
```

```vue
// views/services/AISystemsService.vue const serviceData = { title: 'AI Systems
Integration', icon: '🤖', tagline: 'Your custom tagline here', description:
'Your description here', features: [...], technologies: [...], caseStudies:
[...], benefits: [...] }
```

## Benefits of This Architecture

1. **Reusable Components**: Section components can be used across all services
2. **Easy Maintenance**: Update a section component once, affects all services
3. **Flexible Composition**: Each service can choose which sections to include and their order
4. **Type Safety**: TypeScript interfaces ensure consistent data structure
5. **Scalable**: Easy to add new services or sections
6. **Clean Separation**: Data and presentation are clearly separated
