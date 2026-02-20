# Zuoyanblogs

The Zuoyanblogs blog project is a modified version of the Mizuki theme framework, an open-source project. It's a modern, feature-rich static blog template built on Astro, boasting advanced functionality and a beautiful design.

[![Node.js >= 20](https://img.shields.io/badge/node.js-%3E%3D20-brightgreen)](https://nodejs.org/)
[![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue)](https://pnpm.io/)
[![Astro](https://img.shields.io/badge/Astro-5.15.3-orange)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)](https://www.typescriptlang.org/)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?logo=apache)](https://opensource.org/licenses/Apache-2.0)

💻 Welcome to visit my website: [Click to enter](https://www.zuoyanblogs.xyz/)

🌐 README language: [简体中文](./README.md) &nbsp; [繁體中文](./README.zh-Hant.md) &nbsp; [日本語](./README.jp.md)

---

## 🔄 Update Frequency of this Project

The Mizuki theme framework will be updated irregularly with its mainline content. Future plans include customizing modifications based on the framework’s features, and the version numbers will uniformly carry the suffix "Zuoyanblogs Custom Edition (CE)" to indicate it is a lightly customized version for Zuoyanblogs (Currently catching up on learning popular website frameworks in the market—I need to find time to do it, wuwu~~~).

---

## 🛠 Modified Content of This Project

- Added site language text for six countries; future site updates will synchronize the site language text.
- Added multilingual international translation component:
  - Modified the mobile-navbar stylesheet to adapt to the translate panel style.
- Modified calendar style and optimized for a more comfortable appearance:
  - Changed the left/right switching icon.
  - Adjusted the position of the small circle at the bottom of the article posting page.
  - Adjusted the size of the numbers for multiple articles published on the same day in the upper right corner.
- Add a feedback page and integrate a way to contact the webmaster.
- Add a sponsorship page and integrate the payment QR code placement path.
- Add real-time time to the site.
- Add a confirmation pop-up for external links and modified some of the styles.
- Moved the Toc sidebar directory from the right to the left-hand widget sidebar.
- Refactored the hidden album logic and fixed the issue of not being able to access it via a link.
- Optimized animations for some widgets.

---

## ✨ Features

To learn more about Mizuki's features: <a href="https://docs.mizuki.mysqil.com/" target="_blank">Visit the Mizuki Docs official website</a>

### 🔧 Component Configuration System Refactoring
- **Unified Configuration Architecture:** A brand-new modular component configuration system, supporting dynamic component management and sequential configuration.
- **Configuration-Driven Component Loading:** The SideBar component has been refactored to implement a fully configuration-based component loading mechanism.
- **Unified Control Switches:** The separate enable switches for the music player and announcement components have been removed; they are now uniformly controlled by sidebarLayoutConfig.
- **Responsive Layout Adaptation:** Components support responsive layouts and can automatically adjust their display based on device type.

### 📐 Layout System Optimization

- **Dynamic Sidebar Position Adjustment:** Supports switching between left and right sidebars with automatic layout adaptation.
- **Intelligent Article Navigation:** When the sidebar is on the right, the article navigation automatically moves to the left, providing a better reading experience.
- **Grid Layout Improvements:** Optimized CSS Grid layout, resolving abnormal container width issues.

### 🎛️ Configuration File Format Standardization

- **Standardized Configuration Format:** Created a unified component configuration file format specification.
- **Type Safety:** Comprehensive TypeScript type definitions ensure type safety in configurations.
- **Extensibility:** Supports custom component types and configuration options.

### 🧹 Code Optimization

- **Test File Cleanup:** Removed unused test configurations and dependencies, reducing project size.
- **Code Structure Optimization:** Improved component architecture, enhancing code maintainability.
- **Performance Improvement:** Optimized component loading logic, improving page rendering performance.

### 🎨 Design & Interface

- Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).
- Smooth animations and page transitions using [Swup](https://swup.js.org/).
- Light and dark theme switching with system preference detection.
- Customizable theme colors and dynamic banner carousel.**
- Full-screen background image with carousel, transparency, and blur effects.
- Responsive design across all devices.
- Beautiful typography using JetBrains Mono font.

### 🔍 Content & Search

- Advanced search functionality based on [Pagefind](https://pagefind.app/).
- [Enhanced Markdown functionality](https://docs.mizuki.mysqil.com/press/Markdown/Markdown/), with syntax highlighting.
- Interactive catalog with automatic scrolling.
- RSS and Atom subscription generation.
- Reading time estimation.
- Article categorization and tagging system.

### 📱 Featured Pages

- **Anime Tracking Page** - Track your anime viewing progress and ratings.
- **Friend Links Page** - Showcase your friends' websites with beautiful cards.
- **Photo Album Page** - Record beautiful moments in your life.
- **My Devices Page** - Display your device information.
- **Diary Page** - Share life moments, similar to social media.
- **Archives Page** - An organized timeline view of your articles.
- **About Page** - A customizable personal introduction.
- **Sponsors Page** - Sponsor the site owner to support quality content.
- **Feedback Page** - Submit website feedback and suggestions to communicate directly with the webmaster.
- **Project Page** - development project portfolio.
- **Skills Page** - technical skills and expertise.
- **Timeline Page** - growth journey and important milestones.

### 🛠 Technical Features

- **Enhanced Code Blocks** - Based on [Expressive Code](https://expressive-code.com/).
- **Mathematical Formula Support** - KaTeX rendering.
- **Image Optimization** - PhotoSwipe gallery integration.
- **SEO Optimization** - Includes sitemap and meta tags.
- **erformance Optimization** - Lazy loading and caching mechanisms.
- **Comment System** - Supports Twikoo integration.

---

## ⚡ How to run this project?

1. **Clone the repository:**

```bash
git clone https://github.com/Zuoyan233/Zuoyanblogs.git

cd Zuoyanblogs

```

2. **Install dependencies:**

```bash
# If pnpm is not installed, install it first
npm install -g pnpm

# Install project dependencies
pnpm install

```

3. **Configure the blog:**

- Edit `src/config.ts` to customize blog settings.
- Update site information, theme colors, banner images, and social links.
- Configure featured page features.
- (Optional) Configure content repository separation - For details, please read the Mizuki Docs [Content Repository Configuration](https://docs.mizuki.mysqil.com/Other/separation/).

4. **Featured Page Configuration**
- **Anime Tracking Page:** Edit the anime list in `src/pages/anime.astro`.
- **Friends Links Page:** Edit friend data in `src/content/spec/friends.md`.
- **Albums page:** Edit album information in `public/images/albums`, For instructions on how to use it, please refer to [Album Function Usage Guide](./public/images/albums/README.md).
- **My Devices Page:** Edit device information in `src/data/devices.ts`.
- **Diary Page:** Edit posts in `src/data/diary.ts`.
- **About Page:** Edit content in `src/content/spec/about.md`.
- **Sponsors Page:** Edit the content in `src/content/spec/sponsors.md`.
   - Add a payment QR code in `src/pages/posts/sponsors.astro`. The payment QR code is saved in `public/images/sponsors`.
- **Feedback Page:** Edit the content in `src/content/spec/feedback.md`.
   - Add the webmaster's email contact information in `src/pages/posts/feedback.astro`.
   - Add the webmaster's social media contact information in `public/images/albums/contact`.
- **Project Display Page:** Edit the displayed content in `src/data/projects.ts`.
- **Skill Display Page:** Edit the displayed content in `src/data/skills.ts`.
- **Timeline Page:** Edit the displayed content in `src/data/timeline.ts`.

5. **Article Content Management**
- **Create a new post:** `pnpm new-post <filename>`.
- **Edit a post:** Modify files in `src/content/posts/`.
- **Customize a page:** Edit special pages in `src/content/spec/`.
- **Add an image:** Place images in `src/assets/` or `public/`.
- **Markdown Extended Syntax:** For details, please read the Mizuki Docs' [Markdown Extended Syntax](https://docs.mizuki.mysqil.com/press/Markdown/customize/).

Frontmatter Field Descriptions:
- **title**: Article title (required)
- **published**: Publication date (required)
- **description**: Article description, used for SEO and preview
- **image**: Cover image path (relative to the article file)
- **tags**: Array of tags for categorization
- **category**: Article category
- **draft**: Set to `true` to hide the article in production
- **pinned**: Set to `true` to pin the article
- **lang**: Article language (only set if different from the site's default language)

6. **Start the development server:**

```bash
pnpm dev
```
The blog will be available at `http://localhost:4321`.

7. **All commands are run in the project root directory:**

| Commands                   | Operations                              |
|:---------------------------|:---------------------------------------|
| `pnpm install`             | Install dependencies                   |
| `pnpm dev`                 | Start the local development server at `localhost:4321` |
| `pnpm build`               | Build the production site to `./dist/` |
| `pnpm preview`             | Preview the build locally before deployment |
| `pnpm check`               | Run Astro bug checks                   |
| `pnpm format`              | Format code using Biome                |
| `pnpm lint`                | Check and fix code issues              |
| `pnpm new-post <filename>` | Create a new blog post                 |
| `pnpm astro ...`           | Run Astro CLI commands                 |

To provide developers with a smoother and more familiar experience, we still choose Biome for code formatting and fixing.

Although Mizuki version 7.6 and later switched to Prettier + ESLint, we believe Biome's "out-of-the-box" functionality better suits our workflow, avoiding additional configuration costs.

---

## 🙏 Acknowledgements

- [Mizuki](https://github.com/matsuzaka-yuki/Mizuki) – An enhanced fork based on Fuwari. Thank you for providing a modern and feature-rich static blog template.
- [Fuwari](https://github.com/saicaca/fuwari) by saicaca – The original template on which this project is based. Thank you for creating such a beautiful and powerful template.
- [Yukina](https://github.com/WhitePaper233/yukina) – Thank you for the design inspiration and creativity that helped shape this project. Yukina is an elegant blog template showcasing excellent design principles and user experience.
- [Firefly](https://github.com/CuteLeaf/Firefly) – Thank you for providing great layout ideas, such as the dual sidebar layout, double-column article grids, and the design and implementation of some widgets.
- [Twilight](https://github.com/spr-aachen/Twilight) – Thank you for the inspiration and technical support. Twilight’s dynamic wallpaper mode switching system, responsive design, and transition effects significantly enhanced this project.

---

⭐ If you have any questions or suggestions, please submit an [Issue](https://github.com/Zuoyan233/Zuoyanblogs/issues) or a [Pull Request](https://github.com/Zuoyan233/Zuoyanblogs/pulls). Alternatively, you can also contact us through [the feedback page on my website](https://www.zuoyanblogs.xyz/feedback/). If you find this project helpful, please consider giving it a star!