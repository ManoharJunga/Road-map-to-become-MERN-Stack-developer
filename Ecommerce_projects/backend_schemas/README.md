Below are separate schemas for each feature in the customer profile. This approach modularizes the design, making it easier to manage, maintain, and extend.

---

### 1. **Address Schema**
```javascript
const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  addressLine1: { type: String, required: true },
  addressLine2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
  isDefault: { type: Boolean, default: false },
});

module.exports = mongoose.model('Address', AddressSchema);
```

---

### 2. **Order Schema**
```javascript
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  products: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
  }],
  orderStatus: { type: String, enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], required: true },
  orderDate: { type: Date, default: Date.now },
  totalAmount: { type: Number, required: true },
  trackingId: { type: String }, // For real-time order tracking
});

module.exports = mongoose.model('Order', OrderSchema);
```

---

### 3. **Wishlist Schema**
```javascript
const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
});

module.exports = mongoose.model('Wishlist', WishlistSchema);
```

---

### 4. **Payment Method Schema**
```javascript
const mongoose = require('mongoose');

const PaymentMethodSchema = new mongoose.Schema({
  cardNumber: { type: String, required: true },
  expiryDate: { type: String, required: true },
  cardHolderName: { type: String, required: true },
  isDefault: { type: Boolean, default: false },
});

module.exports = mongoose.model('PaymentMethod', PaymentMethodSchema);
```

---

### 5. **Notification Schema**
```javascript
const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  type: { type: String, enum: ['OrderUpdate', 'Promotion', 'AccountAlert'], required: true },
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Notification', NotificationSchema);
```

---

### 6. **Recently Viewed Items Schema**
```javascript
const mongoose = require('mongoose');

const RecentlyViewedSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  viewedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('RecentlyViewed', RecentlyViewedSchema);
```

---

### 7. **Customer Schema**
```javascript
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  emailVerified: { type: Boolean, default: false },
  phoneNumber: { type: String, required: true, unique: true },
  phoneVerified: { type: Boolean, default: false },
  profilePicture: { type: String }, // URL to the profile picture
  addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }],
  orderHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Wishlist' }],
  paymentMethods: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PaymentMethod' }],
  notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Notification' }],
  recentlyViewedItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'RecentlyViewed' }],
  password: { type: String, required: true },
  twoFactorAuthEnabled: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Customer', CustomerSchema);
```

---

### 8. **Product Schema**
```javascript
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true }, // e.g., Electronics, Furniture
  sizes: [
    {
      height: { type: Number, required: true }, // in centimeters
      width: { type: Number, required: true }, // in centimeters
      weight: { type: Number, required: true }, // in kilograms
    },
  ],
  attributes: {
    texture: { type: String, trim: true }, // e.g., Smooth, Rough
    finish: { type: String, trim: true }, // e.g., Glossy, Matte
    color: { type: String, trim: true }, // e.g., Red, Blue, Black
    material: { type: String, trim: true }, // e.g., Wood, Metal
  },
  images: [
    { type: String, required: true }, // URLs of product images
  ],
  averageRating: { type: Number, default: 0 }, // Cached average rating
  totalReviews: { type: Number, default: 0 }, // Total number of reviews
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);

```

---

### 9. **Product Schema**

```javascript
const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Rating', RatingSchema);


```


---

### 10. **Rating Schema**

```javascript
const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  rating: { type: Number, min: 1, max: 5, required: true }, // Rating between 1 and 5
  review: { type: String, trim: true }, // Optional review comment
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isFlagged: { type: Boolean, default: false }, // Flag if the review is inappropriate
  helpfulCount: { type: Number, default: 0 }, // Count of helpful votes on the review
}, {
  timestamps: true, // Auto add createdAt and updatedAt
});

// Index for better performance in querying
RatingSchema.index({ product: 1, customer: 1 });

module.exports = mongoose.model('Rating', RatingSchema);


```


---

### 11. **Rating Schema**

```javascript
const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  rating: { type: Number, min: 1, max: 5, required: true }, // Rating between 1 and 5
  review: { type: String, trim: true }, // Optional review comment
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isFlagged: { type: Boolean, default: false }, // Flag if the review is inappropriate
  helpfulCount: { type: Number, default: 0 }, // Count of helpful votes on the review
}, {
  timestamps: true, // Auto add createdAt and updatedAt
});

// Index for better performance in querying
RatingSchema.index({ product: 1, customer: 1 });

module.exports = mongoose.model('Rating', RatingSchema);


```

### Key Benefits of This Structure:
1. **Modularity**: Each feature has its own schema, making it easier to modify or extend without affecting others.
2. **Reusability**: Common schemas like `Address` and `Order` can be reused for other entities if needed.
3. **Scalability**: Adding new features only requires creating new schemas or extending existing ones.
4. **Relationship Management**: The main `Customer` schema references all other schemas, ensuring clean data management.

Let me know if you'd like further customization or help implementing these schemas in your application!