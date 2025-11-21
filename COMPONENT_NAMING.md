# Component Naming Convention Reference

## Overview

All components have been renamed to be more specific and unique, making it clear which area of the application they belong to.

## Naming Convention

### Landing Page Components (Home Page)

Located in: `src/components/`

| Old Name                  | New Name                  | Purpose                                    |
| ------------------------- | ------------------------- | ------------------------------------------ |
| `HeroSection.vue`         | `LandingHero.vue`         | Landing page hero section with motto       |
| `ServicesSection.vue`     | `LandingServices.vue`     | Services grid with clickable cards         |
| `TestimonialsSection.vue` | `LandingTestimonials.vue` | Client testimonials carousel               |
| `AboutSection.vue`        | `LandingAbout.vue`        | Why Choose Us section                      |
| `ContactSection.vue`      | `LandingContact.vue`      | Contact form section                       |
| `FooterSection.vue`       | `AppFooter.vue`           | Application footer (used across all pages) |
| `NavigationBar.vue`       | `NavigationBar.vue`       | ✅ No change - universal component         |

### Service Detail Components

Located in: `src/components/service-detail/`

| Old Name                  | New Name                        | Purpose                              |
| ------------------------- | ------------------------------- | ------------------------------------ |
| `HeroSection.vue`         | `ServiceDetailHero.vue`         | Service detail hero with back button |
| `DescriptionSection.vue`  | `ServiceDetailDescription.vue`  | Service overview description         |
| `FeaturesSection.vue`     | `ServiceDetailFeatures.vue`     | What We Offer features grid          |
| `TechnologiesSection.vue` | `ServiceDetailTechnologies.vue` | Technology stack tags                |
| `CaseStudiesSection.vue`  | `ServiceDetailCaseStudies.vue`  | Client success stories               |
| `BenefitsSection.vue`     | `ServiceDetailBenefits.vue`     | Numbered benefits section            |
| `CTASection.vue`          | `ServiceDetailCTA.vue`          | Call to action section               |

## Import Examples

### HomePage.vue

```typescript
import NavigationBar from "../components/NavigationBar.vue";
import LandingHero from "../components/LandingHero.vue";
import LandingServices from "../components/LandingServices.vue";
import LandingTestimonials from "../components/LandingTestimonials.vue";
import LandingAbout from "../components/LandingAbout.vue";
import LandingContact from "../components/LandingContact.vue";
import AppFooter from "../components/AppFooter.vue";
```

### WebDevelopmentService.vue (and future service pages)

```typescript
import NavigationBar from "../../components/NavigationBar.vue";
import AppFooter from "../../components/AppFooter.vue";
import ServiceDetailHero from "../../components/service-detail/ServiceDetailHero.vue";
import ServiceDetailDescription from "../../components/service-detail/ServiceDetailDescription.vue";
import ServiceDetailFeatures from "../../components/service-detail/ServiceDetailFeatures.vue";
import ServiceDetailTechnologies from "../../components/service-detail/ServiceDetailTechnologies.vue";
import ServiceDetailCaseStudies from "../../components/service-detail/ServiceDetailCaseStudies.vue";
import ServiceDetailBenefits from "../../components/service-detail/ServiceDetailBenefits.vue";
import ServiceDetailCTA from "../../components/service-detail/ServiceDetailCTA.vue";
```

## Benefits of This Naming Convention

1. **Clear Context**: Component names immediately indicate where they're used

   - `Landing*` = Landing page specific
   - `ServiceDetail*` = Service detail pages
   - `App*` = Application-wide (used everywhere)

2. **No Confusion**: No more duplicate names like two different `HeroSection` components

3. **Better Autocomplete**: IDEs can better suggest components based on context

4. **Scalable**: Easy to add new sections with clear naming patterns

   - New landing sections: `Landing[SectionName]`
   - New service detail sections: `ServiceDetail[SectionName]`

5. **Maintainable**: Developers can quickly understand component hierarchy

## File Structure

```
src/
├── components/
│   ├── NavigationBar.vue          # Universal navigation
│   ├── LandingHero.vue           # Landing page hero
│   ├── LandingServices.vue       # Landing page services
│   ├── LandingTestimonials.vue   # Landing page testimonials
│   ├── LandingAbout.vue          # Landing page about
│   ├── LandingContact.vue        # Landing page contact
│   ├── AppFooter.vue             # Universal footer
│   └── service-detail/
│       ├── ServiceDetailHero.vue
│       ├── ServiceDetailDescription.vue
│       ├── ServiceDetailFeatures.vue
│       ├── ServiceDetailTechnologies.vue
│       ├── ServiceDetailCaseStudies.vue
│       ├── ServiceDetailBenefits.vue
│       └── ServiceDetailCTA.vue
└── views/
    ├── HomePage.vue              # Uses Landing* components
    └── services/
        └── WebDevelopmentService.vue  # Uses ServiceDetail* components
```

## Migration Checklist

- [x] Renamed all service detail components
- [x] Renamed all landing page components
- [x] Updated HomePage.vue imports
- [x] Updated WebDevelopmentService.vue imports
- [ ] Future: Update any additional service pages when created

## Creating New Components

When creating new components, follow these patterns:

- **Landing page sections**: `Landing[SectionName].vue`
- **Service detail sections**: `ServiceDetail[SectionName].vue`
- **Universal components**: Use descriptive names with `App` prefix if needed
