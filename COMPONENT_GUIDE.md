# Anchor Point Web Solutions - Landing Page

A modern, component-based landing page built with Vue 3 and TypeScript.

## 🏗️ Project Structure

```
src/
├── App.vue                      # Router view container
├── main.ts                      # Application entry point with router
├── router/
│   └── index.ts                # Vue Router configuration
├── views/                       # Page-level components
│   ├── HomePage.vue            # Main landing page
│   └── ServiceDetailPage.vue  # Individual service detail pages
├── components/                  # Reusable section components
│   ├── NavigationBar.vue       # Fixed navigation header
│   ├── HeroSection.vue         # Hero banner with CTA buttons
│   ├── ServicesSection.vue     # Service offerings grid (clickable cards)
│   ├── TestimonialsSection.vue # Client testimonials carousel
│   ├── AboutSection.vue        # Company features/benefits
│   ├── ContactSection.vue      # Contact form
│   └── FooterSection.vue       # Footer with branding
├── data/
│   └── serviceDetails.ts       # Detailed service information data
└── types/                       # TypeScript type definitions
    ├── service.ts              # Service data interface
    ├── feature.ts              # Feature data interface
    ├── testimonial.ts          # Testimonial data interface
    └── serviceDetail.ts        # Service detail page interface
```

## 🧩 Component Architecture

### App.vue

The main orchestrator component that imports and renders all section components. Keeps the top-level structure clean and maintainable.

### NavigationBar.vue

- Fixed position navigation
- Logo and navigation links
- Gradient CTA button
- Responsive design

### HeroSection.vue

- Main headline with gradient text effect
- Descriptive subtitle
- Call-to-action buttons
- Animated floating cards visual
- Emits `contact-click` event for smooth scrolling

### ServicesSection.vue

- Grid layout of service cards
- Service data defined with TypeScript interface
- Hover effects with elevation
- Fully responsive grid (auto-fit columns)
- Easy to add/remove services

### AboutSection.vue

- Features with numbered cards
- TypeScript-typed feature data
- Gradient text effects
- Responsive grid layout

### ContactSection.vue

- Contact form with validation
- Form state management with v-model
- Submit handler ready for integration
- Gradient background

### FooterSection.vue

- Company branding
- Copyright information
- Clean, minimal design

## 📝 Type Definitions

### Service Interface

```typescript
interface Service {
  title: string;
  description: string;
  icon: string;
}
```

### Feature Interface

```typescript
interface Feature {
  number: string;
  title: string;
  description: string;
}
```

## 🎨 Design System

### Colors

- Primary Gradient: `#667eea` → `#764ba2`
- Text Primary: `#1a1a1a`
- Text Secondary: `#4a5568`
- Background Light: `#f9fafb`

### Typography

- Headings: Bold, large scale
- Body: 1rem base size
- Line height: 1.6-1.8 for readability

### Spacing

- Section padding: 6rem vertical, 2rem horizontal
- Component gaps: 2-4rem
- Card padding: 2.5rem

## 🚀 Adding New Content

### Add a Service

Edit `src/components/ServicesSection.vue`:

```typescript
const services = ref<Service[]>([
  // ... existing services
  {
    title: "New Service",
    description: "Service description",
    icon: "🎯",
  },
]);
```

### Add a Feature

Edit `src/components/AboutSection.vue`:

```typescript
const features = ref<Feature[]>([
  // ... existing features
  {
    number: "04",
    title: "New Feature",
    description: "Feature description",
  },
]);
```

### Modify Navigation

Edit `src/components/NavigationBar.vue` template:

```html
<div class="nav-links">
  <a href="#new-section">New Link</a>
  <!-- ... other links -->
</div>
```

## 🔧 Customization

### Change Theme Colors

Update gradient colors in component style sections:

```css
background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
```

### Modify Animations

Edit keyframes in `HeroSection.vue`:

```css
@keyframes float {
  /* Customize animation */
}
```

### Update Content

All text content is directly in the component templates for easy editing.

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint at 768px
- Grid auto-adjusts columns
- Navigation optimizes spacing
- Hero visual hidden on mobile

## 🔌 Integration Points

### Contact Form

`ContactSection.vue` includes a `handleSubmit` function ready for API integration:

```typescript
const handleSubmit = () => {
  // Add your API call here
  console.log("Form data:", formData.value);
};
```

### Analytics

Add tracking to button clicks in component methods.

### Backend API

Services and features can be fetched from an API instead of hardcoded data.

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Type check
npm run type-check

# Lint and fix
npm run lint
```

## ✨ Best Practices

1. **Component Isolation**: Each section is self-contained with its own styles
2. **TypeScript Types**: All data structures are typed for safety
3. **Scoped Styles**: No style conflicts between components
4. **Event Communication**: Parent-child communication via emits
5. **Responsive First**: Mobile and desktop considered in all designs
6. **Maintainable**: Easy to add, remove, or modify sections

## 🎯 Future Enhancements

- [ ] Add animations library (GSAP, Framer Motion)
- [ ] Implement dark mode toggle
- [ X ] Add testimonials section
- [ ] Create portfolio/case studies section
- [ ] Add blog integration
- [ ] Implement form validation library
- [ ] Add analytics integration
- [ ] Create admin panel for content management
