# Pending Features Implementation

### 1. Search Functionality Enhancement
- [x] Make the search button in Navbar functional (trigger search on click instead of onChange)
- [x] Add a clear button to reset search term

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
- [x] Create checkout page with order summary
- [x] Implement payment simulation form
- [x] Add order confirmation

### 10. User Profile
- [ ] Create profile page for account details
- [ ] Display order history
- [ ] Allow editing account info

### 11. Notifications
- [ ] Add toast messages for actions (add to cart, login, etc.)
- [ ] Implement notification system
