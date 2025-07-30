# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal branding/portfolio website built with Middleman static site generator. The site features responsive design with "easter eggs" at different viewport sizes (xs to xxxl - 2500px).

## Technology Stack

- **Ruby 3.4.3** with Middleman 4.5+
- **Webpack 5.94.0** for asset bundling
- **Slim** templating engine
- **SCSS** with custom design system (no longer using Bootstrap)
- **jQuery 3.7.1** and modern JavaScript (ES6+)
- Deployment to GitHub Pages

## Common Development Commands

### Development Server
```bash
rake server:development     # Start server on http://localhost:4567
```

### Building
```bash
rake server:build:staging      # Build for staging
rake server:build:production   # Build for production
```

### Deployment
```bash
rake deploy:github    # Deploy to GitHub Pages (gh-pages branch)
```

### Linting
```bash
rake test:lint:all       # Run all linters
rake test:lint:ruby      # RuboCop for Ruby
rake test:lint:js        # ESLint for JavaScript  
rake test:lint:css       # Stylelint for CSS/SCSS
```

### Asset Compilation
```bash
yarn develop      # Webpack dev mode with watch
yarn production   # Webpack production build
```

## Project Structure

```
source/
├── assets/
│   ├── images/        # Images, videos, icons
│   ├── javascripts/   # JavaScript source files
│   └── stylesheets/   # SCSS source files
├── layouts/           # Page layouts (default.slim)
├── partials/          # Reusable components (_header.slim, etc.)
└── *.html.slim        # Page templates
```

## Architecture Patterns

### Middleman Helpers
- Custom helpers defined in `config.rb` and `lib/` directory
- Use `data.settings` to access site configuration from `data/settings.yml`
- Image helpers: `image_tag`, `image_path` with automatic cache busting

### Asset Pipeline
- Webpack handles JavaScript bundling via `source/assets/javascripts/site.js`
- SCSS compiled through Middleman with sprockets
- External assets loaded through Webpack's `ProvidePlugin` (jQuery as `$`)

### Responsive Design
- Modern design system in `_design.scss` with galaxy/space theme
- Custom animations and effects
- "Easter egg" content appears at different viewport sizes
- No longer uses Bootstrap - custom CSS design system

### Deployment Process
1. Build assets with `yarn production`
2. Build static site with `middleman build`
3. Deploy to gh-pages branch using `middleman-deploy` gem
4. Available at: https://links.aboutchrishough.com

## Code Style Requirements

### Ruby
- Follow `.rubocop.yml` configuration
- Max line length: 180 characters
- Target Ruby 3.4.3 syntax

### JavaScript
- ESLint with Airbnb base configuration
- ES6+ features enabled
- jQuery environment globals

### SCSS
- Stylelint with standard-scss configuration
- Custom design system (not Bootstrap)
- Modern CSS with custom properties (CSS variables)

## Important Conventions

1. **Templates**: Use Slim syntax for all templates
2. **Partials**: Prefix with underscore (e.g., `_header.slim`)
3. **JavaScript**: Main entry point is `site.js`, use ES6 modules
4. **Styling**: Component styles in separate SCSS files, imported in `site.css.scss`
5. **Data**: Site configuration in `data/settings.yml`
6. **Images**: Store in `source/assets/images/`, use Middleman image helpers
7. **Videos**: Place in `source/assets/images/videos/` for proper asset pipeline handling
