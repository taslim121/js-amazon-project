# Amazon Project Clone

This project is a web-based clone of Amazon's core shopping features, implemented using JavaScript, HTML, and CSS. It demonstrates front-end and client-side JavaScript skills, object-oriented programming, and interactions with a mock backend API.

## Features

- **Home/Product Listing Page** (`index.html`):
  - Displays a responsive grid of products fetched from a backend API.
  - Includes a search bar for users to filter products.
  - Allows adding items to a shopping cart with selectable quantities.
  - Shows a dynamic cart icon with the current cart quantity.

- **Shopping Cart & Checkout** (`checkout.html`):
  - Manages cart items using local storage for persistence.
  - Lets users update quantities or remove items.
  - Displays order summary and payment summary components.

- **Order Tracking** (`tracking.html`):
  - Visualizes the progress of each order (Preparing, Shipped, Delivered) with a progress bar.
  - Shows estimated delivery dates and product details for each order.

- **Order History** (`orders.html`):
  - (Based on code structure; not all files shown, but links and references exist)
  - Lets users view their previous orders and navigate to track individual orders.

- **Reusable & Modular JavaScript**:
  - Product and Cart logic implemented via ES6 classes and modules.
  - Product data loading supports both XMLHttpRequest and Fetch API.

- **Responsive Design**:
  - Mobile-friendly layout using CSS and Google Fonts.
  - Consistent Amazon-like header across all pages.

## Technical Highlights

- **Separation of Concerns:** 
  - Data models and business logic are separated from UI rendering scripts.
- **Storage:** 
  - Cart data is persisted in browser localStorage for session continuity.
- **API Interaction:** 
  - Product and order information fetched from a mock backend API (`https://supersimplebackend.dev/`).
- **Modern JS:** 
  - Uses ES6 classes, modules, and async/await for asynchronous API calls.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/taslim121/js-amazon-project.git
   cd js-amazon-project
   ```

2. **Open `index.html` in your browser:**
   - No build steps or server is required; all logic is handled client-side.
   - For full functionality, ensure you have internet access to load assets and mock API.

3. **Explore Features:**
   - Browse products, add to cart, proceed to checkout, and track orders.

## File Structure

- `index.html` - Home and product listing page
- `checkout.html` - Cart and checkout process
- `tracking.html` - Order tracking page
- `/scripts/` - JavaScript modules for UI and business logic
- `/data/` - Classes and modules for products, cart, and orders
- `/styles/` - CSS files for styling and layout
- `/images/` - Icons and product images

## Dependencies

- [Day.js](https://day.js.org/) for date handling (via CDN)
- [Google Fonts - Roboto](https://fonts.google.com/specimen/Roboto)
- No external build tools required

## Credits

Developed by [taslim121](https://github.com/taslim121).

## License

This project is for educational and demonstration purposes only.
