### ABOUT THIS WEBSITE

> You're welcome to fork this project! Just please include a credit back to the original.

This is a personal portfolio and branding site built with modern web technologies and meticulous attention to detail. The site features a custom design system with hidden "easter eggs" at different viewport sizes (xs to xxxl - 2500px wide), creating unique experiences across all devices from mobile phones to ultra-wide displays.

* **Static Site Generation**: Built using Ruby, Webpack, and the Middleman framework for lightning-fast performance
* **Responsive Design**: Custom SCSS design system (no longer using Bootstrap) with extended breakpoints
* **Progressive Enhancement**: Tested across all iPhone versions with graceful scaling up to 4K displays
* **Interactive Elements**: Easter eggs and unique content revealed at different viewport sizes - resize to discover them all!

> Questions or feedback? Connect with me on [LinkedIn](https://www.linkedin.com/in/christopherhough/).

---

### 💭 DEVELOPMENT PHILOSOPHY

> "Our culture has become hooked on the quick-fix, the life hack, efficiency. Everyone is on the hunt for that simple action algorithm that nets maximum profit with the least amount of effort. There's no denying this attitude may get you some of the trappings of success, if you're lucky, but it will not lead to a calloused mind or self-mastery. If you want to master the mind and remove your governor, you'll have to become addicted to hard work. Because passion and obsession, even talent, are only useful tools if you have the work ethic to back them up."
>
> — **David Goggins**, *Can't Hurt Me: Master Your Mind and Defy the Odds*

This project embodies that philosophy. No shortcuts were taken. Every breakpoint was meticulously tested. Every animation was refined. Every line of code was crafted with intention and purpose.

---

### 🛠 TECHNOLOGY STACK

#### Core Technologies
- **Ruby 3.4.3** - Powers the Middleman static site generator
- **Middleman 4.5+** - Static site generator with powerful templating and asset pipeline
- **Webpack 5.94.0** - Modern JavaScript bundling and module management
- **Slim Templates** - Clean, elegant templating language for maintainable HTML
- **SCSS** - Advanced CSS preprocessing with custom design system
- **jQuery 3.7.1** - DOM manipulation and interactive features
- **ES6+ JavaScript** - Modern JavaScript features for cleaner code

#### Build & Deployment
- **GitHub Pages** - Static site hosting via gh-pages branch
- **GitHub Actions CI/CD** - Automated testing, building, and deployment
- **Rake Tasks** - Streamlined development workflow automation

#### Code Quality
- **RuboCop** - Ruby static code analyzer and formatter
- **ESLint** - JavaScript linting with Airbnb configuration
- **Stylelint** - CSS/SCSS linting for consistent styling

---

### 🏗 ARCHITECTURE & FEATURES

#### Responsive Breakpoint System
The site features custom breakpoints with unique content at each size:
- **xs** (< 576px): Mobile-first foundation
- **sm** (≥ 576px): Tablet portrait mode
- **md** (≥ 768px): Tablet landscape
- **lg** (≥ 992px): Desktop experience
- **xl** (≥ 1200px): Large desktop
- **xxl** (≥ 1400px): Ultra-wide monitors
- **xxxl** (≥ 2500px): 4K displays and TV screens

#### Key Design Features
- **Galaxy/Space Theme** - Custom design system moving beyond traditional frameworks
- **Performance Optimized** - Asset pipeline with automatic minification and cache-busting
- **SEO Ready** - Semantic HTML, meta tags, and structured data
- **Accessibility** - Progressive enhancement ensuring core functionality works everywhere

---

### 🚀 DEVELOPMENT SETUP

```bash
# Clone and setup
git clone https://github.com/yourusername/LinksAboutChrisHough.git
cd LinksAboutChrisHough
bundle install
yarn install

# Development server
rake server:development  # http://localhost:4567

# Build commands
rake server:build:production
yarn production

# Deploy to GitHub Pages
rake deploy:github
```

For detailed commands and configuration, check the `Rakefile` and `package.json`.

---

### 📁 PROJECT STRUCTURE

```
source/
├── assets/
│   ├── images/        # Media assets and icons
│   ├── javascripts/   # ES6+ JavaScript modules
│   └── stylesheets/   # SCSS design system
├── layouts/           # Page layouts (Slim templates)
├── partials/          # Reusable components
├── data/              # Site configuration (settings.yml)
└── *.html.slim        # Page templates
```

All libraries and dependencies are detailed in `Gemfile` and `package.json`.

---

### :bangbang:DISCLAIMER:bangbang:

This is a personal website and blog. That fact means nothing. This is not a peer-reviewed journal, a final archive of our writing, a sponsored publication, or the product of gatekeeping and editing.  We write about things that we care about, and things that we have experienced. Our thoughts and experiences published here are our own, and have nothing to do with current, previous or future employers, our clients, or our startups.

It would be distinctly unwise–-not to mention uncharitable–-to play connect-the-dots with our physical life and work and our “life of the mind,” as scanty as either might be. our attitude at work, our reaction to ideas, your grade (good or bad), the length and tone of our discussion at the coffee pot, the intensity and duration of our lovemaking, the time it took for us to return your letter or email, and the quality and quantity of our response to you in any medium are probably not tied to anything you read here… at least not in a way that you will be able to confidently assume without sharing years of psychotherapy and splitting the bills that come with it. And even then, keep in mind the next (and last) paragraph.

Opinions and characterizations of fact here are our own and represent no one else. They do not represent the United States, anywhere we have lived in the United States, the Earth, the Moon, our family, our friends, our ex-wives, the baristas at the coffee shops where many of the longer entries were written, the irritated owners of said coffee shops who want tables to turn over, the repressed or “the man,” alien life forms, any movement (political or intestinal), or a coherent and consistent philosophy or aesthetic. In fact, it’s quite possible that by the time you read the words here they won’t even represent us. If we contradict ourself, very well then, we contradict ourself. We are not Whitman, but like him we are large and our girth contains multitudes. Catching us in a contradiction is probably not the result of your steely grasp of logic and it’s almost assuredly not a product of hypocrisy.

We are human beings and our website and blog reflects and embodies that humanity.

> Thank you to all of the amazing OSS developers out there. 
