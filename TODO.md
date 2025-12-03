# Tasks to Build Groceries and Giggles by Gloria Shopping App

- [x] Update src/components/Navbar.jsx to change logo to "Groceries and Giggles by Gloria" and make it clickable to home page
- [x] Update src/components/HeroBanner.jsx to change "Welcome to Eva" to "Welcome to Groceries and Giggles by Gloria"
- [x] Update src/components/Footer.jsx to change "Eva" to "Groceries and Giggles by Gloria" and update description
- [x] Update src/components/CartPage.jsx to change "Eva - Shopping Cart" to "Groceries and Giggles by Gloria - Shopping Cart"
- [x] Update TODO.md title from "Jumia-like Shopping App" to "Groceries and Giggles by Gloria Shopping App"
- [x] Adjust src/App.css for logo styling if needed

## Pending Features

### 1. Search Functionality Enhancement
- [ ] Make the search button in Navbar functional (trigger search on click instead of onChange)
- [ ] Add a clear button to reset search term

### 2. Sorting/Filtering Options
- [ ] Add sort dropdown in ProductList (by price low to high, high to low, name A-Z, Z-A)
- [ ] Integrate sorting with existing category filtering

### 3. Product Details Page
- [ ] Create ProductDetails.jsx component with full product info, images, add to cart
- [ ] Add new route /product/:id in App.js
- [ ] Update ProductItem.jsx to link to product details page

### 4. State Management
- [ ] Introduce Context API for global state (cart, auth placeholder)

### 5. User Authentication
- [ ] Implement login/signup forms
- [ ] Add user accounts management
- [ ] Protect routes requiring authentication

### 6. Wishlist
- [ ] Allow users to save favorite products
- [ ] Add wishlist button to ProductItem and ProductDetails
- [ ] Create wishlist page/route

### 7. Product Reviews/Ratings
- [ ] Add review and rating system to ProductDetails
- [ ] Display reviews on product details page
- [ ] Allow users to submit reviews

### 8. Dark Mode
- [ ] Add dark mode toggle in Navbar
- [ ] Update CSS for light/dark themes
- [ ] Persist theme preference

### 9. Checkout Process
- [ ] Create checkout page with order summary
- [ ] Implement payment simulation form
- [ ] Add order confirmation

### 10. User Profile
- [ ] Create profile page for account details
- [ ] Display order history
- [ ] Allow editing account info

### 11. Notifications
- [ ] Add toast messages for actions (add to cart, login, etc.)
- [ ] Implement notification system
