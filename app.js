/* ==========================================================================
   ANDIJON FOOD — PREMIUM FAST FOOD DELIVERY APPLICATION
   Full Interactive Vanilla JS Architecture
   ========================================================================== */

// ==================== 1. DATA REPOSITORY ====================
const CATEGORIES = [
  { id: 'all', name: 'Barchasi', emoji: '🍽️' },
  { id: 'Hot Dog', name: 'Hot Dog', emoji: '🌭' },
  { id: 'Lavash', name: 'Lavash', emoji: '🌯' },
  { id: 'Pizza', name: 'Pizza', emoji: '🍕' },
  { id: 'Burger', name: 'Burger', emoji: '🍔' },
  { id: 'Donar', name: 'Donar', emoji: '🥙' },
  { id: 'Gazli ichimliklar', name: 'Gazli ichimliklar', emoji: '🥤' },
  { id: 'Gazsiz ichimliklar', name: 'Gazsiz ichimliklar', emoji: '🧃' }
];

const PRODUCTS = [
  // BURGERLAR
  {
    id: 1,
    name: 'Andijon Royal Double Burger',
    category: 'Burger',
    price: 42000,
    rating: 4.9,
    popular: true,
    weight: '380 gr',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
    desc: 'Ikki qavatli 100% halol mol go‘shti kotleti, eritilgan cheddar pishlog‘i, karamellangan piyoz va maxsus grill sous.'
  },
  {
    id: 2,
    name: 'Classic Cheese Burger',
    category: 'Burger',
    price: 29000,
    rating: 4.7,
    popular: false,
    weight: '260 gr',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80',
    desc: 'Yumshoq brioche bulochka, shirali mol go‘shti kotleti, yangi pomidor, tuzlangan bodring va cheddar pishlog‘i.'
  },
  {
    id: 3,
    name: 'Crispy Chicken Burger',
    category: 'Burger',
    price: 27000,
    rating: 4.8,
    popular: true,
    weight: '270 gr',
    image: 'https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=700&q=80',
    desc: 'Qarsildoq panirovkadagi tovuq filesi, aysberg salati, sarimsoqli mayonez va cheddar pishlog‘i.'
  },

  // LAVASHLAR
  {
    id: 4,
    name: 'Tandirda Pishgan Go‘shtli Lavash',
    category: 'Lavash',
    price: 34000,
    rating: 4.9,
    popular: true,
    weight: '360 gr',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=80',
    desc: 'Yupqa tandir lavashida qovurilgan mol go‘shti, qarsildoq chipslar, yangi bodring-pomidor va mualliflik tomat sousi.'
  },
  {
    id: 5,
    name: 'Pishloqli Tovuq Lavash',
    category: 'Lavash',
    price: 31000,
    rating: 4.8,
    popular: false,
    weight: '340 gr',
    image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=700&q=80',
    desc: 'Maxsus marinadlangan tovuq go‘shti, ikki hissa golland pishlog‘i va qaymoqli sarimsoq sousi.'
  },

  // PIZZA
  {
    id: 6,
    name: 'Pepperoni Supreme Pizza (33 sm)',
    category: 'Pizza',
    price: 78000,
    rating: 4.9,
    popular: true,
    weight: '680 gr',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=80',
    desc: 'Italiya retsepti asosidagi xamir, mo‘l-ko‘l motsarella pishlog‘i, halol dudlangan pepperoni kolbasasi va oregano.'
  },
  {
    id: 7,
    name: 'Andijon Go‘shtli Assorti Pizza (33 sm)',
    category: 'Pizza',
    price: 89000,
    rating: 4.9,
    popular: true,
    weight: '750 gr',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80',
    desc: 'Mol go‘shti, tovuq filesi, qo‘ziqorin, zaytun, bulg‘or qalampiri va cho‘ziluvchan motsarella pishlog‘i.'
  },

  // HOT DOG
  {
    id: 8,
    name: 'Qirollik Double Hot Dog',
    category: 'Hot Dog',
    price: 22000,
    rating: 4.7,
    popular: false,
    weight: '240 gr',
    image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=700&q=80',
    desc: 'Ikkita Kanada sosiskasi, pishloqli sous, xantal, ketchup, qovurilgan piyoz va yangi sabzavotlar.'
  },
  {
    id: 9,
    name: 'Classic American Hot Dog',
    category: 'Hot Dog',
    price: 16000,
    rating: 4.6,
    popular: false,
    weight: '180 gr',
    image: 'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=700&q=80',
    desc: 'Issiq bulochka ichida dudlangan halol sosiska, maxsus sous va tuzlangan bodring bo‘laklari.'
  },

  // DONAR
  {
    id: 10,
    name: 'Andijon Grill Donar (Tarelka)',
    category: 'Donar',
    price: 45000,
    rating: 4.8,
    popular: true,
    weight: '420 gr',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=700&q=80',
    desc: 'Ko‘mirda pishgan donar go‘shti, guruch, kartoshka fri, yangi salat, non va maxsus qizil sous.'
  },
  {
    id: 11,
    name: 'Nonli Donar Kebab',
    category: 'Donar',
    price: 32000,
    rating: 4.7,
    popular: false,
    weight: '330 gr',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=700&q=80',
    desc: 'Qarsildoq turk noni ichida mol go‘shti donari, pomidor, piyoz va sarimsoqli yogurt sousi.'
  },

  // GAZLI ICHIMLIKLAR
  {
    id: 12,
    name: 'Coca-Cola (0.5 L)',
    category: 'Gazli ichimliklar',
    price: 9000,
    rating: 4.9,
    popular: false,
    weight: '500 ml',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=80',
    desc: 'Muzdek salqin Coca-Cola — fast food taomlari uchun klassik hamroh.'
  },
  {
    id: 13,
    name: 'Fanta Apelsin (0.5 L)',
    category: 'Gazli ichimliklar',
    price: 9000,
    rating: 4.8,
    popular: false,
    weight: '500 ml',
    image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=700&q=80',
    desc: 'Yorqin apelsin ta’mli salqin gazlangan ichimlik.'
  },

  // GAZSIZ ICHIMLIKLAR
  {
    id: 14,
    name: 'Tabiiy Olma Sharbati (1 L)',
    category: 'Gazsiz ichimliklar',
    price: 15000,
    rating: 4.8,
    popular: false,
    weight: '1000 ml',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80',
    desc: 'Farg‘ona vodiysining sarxil olmalaridan tayyorlangan 100% tabiiy sharbat.'
  },
  {
    id: 15,
    name: 'Muzdek Moxito Limonad (0.4 L)',
    category: 'Gazsiz ichimliklar',
    price: 16000,
    rating: 4.9,
    popular: true,
    weight: '400 ml',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80',
    desc: 'Yangi yalpiz barglari, laym sharbati va muz bo‘laklari bilan tetiklashtiruvchi ichimlik.'
  }
];

const SPECIAL_OFFERS = [
  {
    id: 101,
    name: 'Burger + Cola + Fri Combo',
    category: 'Aksiya',
    oldPrice: 52000,
    price: 41000,
    discount: '-21%',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=700&q=80',
    desc: 'Classic Cheese Burger + oltinrang kartoshka fri + muzdek Coca-Cola (0.5 L).'
  },
  {
    id: 102,
    name: 'Tandir Lavash + Fri + Sous',
    category: 'Aksiya',
    oldPrice: 48000,
    price: 38000,
    discount: '-20%',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=80',
    desc: 'Go‘shtli tandir lavash, qarsildoq kartoshka fri va maxsus pishloqli sous.'
  },
  {
    id: 103,
    name: 'Oilaviy Pizza Set (2 ta Pizza)',
    category: 'Aksiya',
    oldPrice: 167000,
    price: 129000,
    discount: '-23%',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80',
    desc: 'Pepperoni Supreme + Andijon Assorti Pizza (33 sm) + 1.5 L Cola sovg‘aga!'
  }
];

const DELIVERY_FEE = 10000;
const FREE_DELIVERY_THRESHOLD = 80000;

// ==================== 2. STATE MANAGEMENT ====================
let state = {
  cart: JSON.parse(localStorage.getItem('af_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('af_wishlist')) || [],
  users: JSON.parse(localStorage.getItem('af_users')) || [],
  currentUser: JSON.parse(localStorage.getItem('af_current_user')) || null,
  orders: JSON.parse(localStorage.getItem('af_orders')) || [],
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'default',
  onlyPopular: false,
  theme: localStorage.getItem('af_theme') || 'light'
};

const ALL_ITEMS = [...PRODUCTS, ...SPECIAL_OFFERS];

// ==================== 3. UTILITY FUNCTIONS ====================
const formatPrice = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + " so'm";
};

const saveState = () => {
  localStorage.setItem('af_cart', JSON.stringify(state.cart));
  localStorage.setItem('af_wishlist', JSON.stringify(state.wishlist));
  localStorage.setItem('af_users', JSON.stringify(state.users));
  localStorage.setItem('af_current_user', JSON.stringify(state.currentUser));
  localStorage.setItem('af_orders', JSON.stringify(state.orders));
};

const showToast = (message, type = 'success') => {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
  toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

// ==================== 4. RENDERING FUNCTIONS ====================
function renderOffers() {
  const container = document.getElementById('offers-container');
  container.innerHTML = SPECIAL_OFFERS.map(offer => `
    <div class="offer-card reveal active">
      <span class="discount-badge">${offer.discount}</span>
      <div class="offer-img-box">
        <img src="${offer.image}" alt="${offer.name}" loading="lazy" />
      </div>
      <div class="offer-body">
        <div>
          <h3>${offer.name}</h3>
          <p>${offer.desc}</p>
        </div>
        <div class="offer-price-row">
          <div>
            <span class="old-price">${formatPrice(offer.oldPrice)}</span>
            <span class="new-price">${formatPrice(offer.price)}</span>
          </div>
          <button class="btn btn-primary btn-sm" onclick="addToCart(${offer.id})">
            <i class="fas fa-cart-plus"></i> Savatchaga
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderCategories() {
  const container = document.getElementById('categories-container');
  container.innerHTML = CATEGORIES.map(cat => {
    const count = cat.id === 'all'
      ? PRODUCTS.length
      : PRODUCTS.filter(p => p.category === cat.id).length;
    const isActive = state.activeCategory === cat.id ? 'active' : '';
    return `
      <div class="category-card ${isActive}" onclick="selectCategory('${cat.id}')">
        <span class="cat-emoji">${cat.emoji}</span>
        <span class="cat-name">${cat.name}</span>
        <span class="cat-count">${count} taom</span>
      </div>
    `;
  }).join('');
}

function renderProducts() {
  const container = document.getElementById('products-container');
  const emptyState = document.getElementById('empty-menu-state');

  let filtered = [...PRODUCTS];

  // Category filter
  if (state.activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === state.activeCategory);
  }

  // Popular filter
  if (state.onlyPopular) {
    filtered = filtered.filter(p => p.popular);
  }

  // Search filter
  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  // Sorting
  if (state.sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  container.innerHTML = filtered.map(product => {
    const isFav = state.wishlist.includes(product.id);
    return `
      <article class="product-card">
        <div class="product-img-wrap">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          ${product.popular ? '<span class="popular-tag">🔥 Xit</span>' : ''}
          <button class="wishlist-card-btn ${isFav ? 'active' : ''}" onclick="toggleWishlist(${product.id})" title="Sevimlilarga qo'shish">
            <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
          </button>
          <span class="product-rating"><i class="fas fa-star"></i> ${product.rating}</span>
        </div>
        <div class="product-body">
          <div>
            <span class="product-cat-label">${product.category}</span>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-desc">${product.desc}</p>
          </div>
          <div>
            <div class="product-price">${formatPrice(product.price)}</div>
            <div class="product-actions">
              <button class="btn btn-primary btn-sm" onclick="addToCart(${product.id})">
                <i class="fas fa-shopping-bag"></i> Savatchaga qo'shish
              </button>
              <button class="btn btn-outline btn-sm" onclick="openProductDetail(${product.id})" title="Batafsil">
                Batafsil
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ==================== 5. FILTER & SEARCH ACTIONS ====================
window.selectCategory = (catId) => {
  state.activeCategory = catId;
  renderCategories();
  renderProducts();
};

function setupMenuControls() {
  const searchInput = document.getElementById('menu-search');
  const clearBtn = document.getElementById('clear-search');
  const sortSelect = document.getElementById('menu-sort');
  const popularBtn = document.getElementById('popular-filter-btn');
  const resetBtn = document.getElementById('reset-filters-btn');

  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    clearBtn.classList.toggle('visible', state.searchQuery.length > 0);
    renderProducts();
  });

  clearBtn.addEventListener('click', () => {
    state.searchQuery = '';
    searchInput.value = '';
    clearBtn.classList.remove('visible');
    renderProducts();
  });

  sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });

  popularBtn.addEventListener('click', () => {
    state.onlyPopular = !state.onlyPopular;
    popularBtn.classList.toggle('active', state.onlyPopular);
    renderProducts();
  });

  resetBtn.addEventListener('click', () => {
    state.activeCategory = 'all';
    state.searchQuery = '';
    state.sortBy = 'default';
    state.onlyPopular = false;
    searchInput.value = '';
    sortSelect.value = 'default';
    popularBtn.classList.remove('active');
    clearBtn.classList.remove('visible');
    renderCategories();
    renderProducts();
  });

  // Footer category shortcuts
  document.querySelectorAll('#footer-categories a').forEach(link => {
    link.addEventListener('click', () => {
      const cat = link.dataset.cat;
      selectCategory(cat);
    });
  });
}

// ==================== 6. SHOPPING CART LOGIC ====================
window.addToCart = (itemId) => {
  const item = ALL_ITEMS.find(p => p.id === itemId);
  if (!item) return;

  const existing = state.cart.find(c => c.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      qty: 1
    });
  }

  saveState();
  updateCartUI();
  showToast(`"${item.name}" savatchaga qo'shildi!`);
};

window.updateCartQty = (itemId, delta) => {
  const index = state.cart.findIndex(c => c.id === itemId);
  if (index === -1) return;

  state.cart[index].qty += delta;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }

  saveState();
  updateCartUI();
};

window.removeFromCart = (itemId) => {
  state.cart = state.cart.filter(c => c.id !== itemId);
  saveState();
  updateCartUI();
  showToast("Mahsulot savatchadan o'chirildi", 'error');
};

function getCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  return {
    subtotal,
    totalCount,
    delivery,
    grandTotal: subtotal + delivery
  };
}

function updateCartUI() {
  const { subtotal, totalCount, delivery, grandTotal } = getCartTotals();

  document.getElementById('cart-count').textContent = totalCount;
  document.getElementById('drawer-cart-count').textContent = `(${totalCount})`;

  const itemsContainer = document.getElementById('cart-items-container');
  const footer = document.getElementById('cart-footer');

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="empty-cart-box">
        <i class="fas fa-shopping-basket"></i>
        <h4>Savatchangiz hozircha bo'sh</h4>
        <p>Menyudan mazali taomlarni tanlab savatchaga qo'shing!</p>
      </div>
    `;
    footer.classList.add('hidden');
    return;
  }

  footer.classList.remove('hidden');
  itemsContainer.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="remove-item-btn" onclick="removeFromCart(${item.id})" title="O'chirish">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  `).join('');

  document.getElementById('cart-delivery-fee').textContent =
    delivery === 0 ? 'Bepul (0 so\'m)' : formatPrice(delivery);
  document.getElementById('cart-total-price').textContent = formatPrice(grandTotal);
}

// ==================== 7. WISHLIST LOGIC ====================
window.toggleWishlist = (itemId) => {
  const idx = state.wishlist.indexOf(itemId);
  if (idx === -1) {
    state.wishlist.push(itemId);
    showToast("Sevimlilar ro'yxatiga qo'shildi ❤️");
  } else {
    state.wishlist.splice(idx, 1);
    showToast("Sevimlilardan olib tashlandi");
  }
  saveState();
  updateWishlistUI();
  renderProducts();
};

function updateWishlistUI() {
  document.getElementById('wishlist-count').textContent = state.wishlist.length;
  const container = document.getElementById('wishlist-items-container');

  if (state.wishlist.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-box">
        <i class="far fa-heart"></i>
        <h4>Sevimli taomlar yo'q</h4>
        <p>Yoqtirgan taomlaringizdagi yurakcha belgisini bosing.</p>
      </div>
    `;
    return;
  }

  const favProducts = PRODUCTS.filter(p => state.wishlist.includes(p.id));
  container.innerHTML = favProducts.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <button class="btn btn-primary btn-sm" onclick="addToCart(${item.id})">Savatchaga</button>
      </div>
      <button class="remove-item-btn" onclick="toggleWishlist(${item.id})" title="O'chirish">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `).join('');
}

// ==================== 8. PRODUCT DETAILS MODAL ====================
window.openProductDetail = (id) => {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const content = document.getElementById('product-modal-content');
  content.innerHTML = `
    <div class="product-detail-grid">
      <img src="${product.image}" alt="${product.name}" class="product-detail-img" />
      <div class="product-detail-info">
        <div>
          <span class="section-tag">${product.category}</span>
          <h2 style="margin-bottom: 10px;">${product.name}</h2>
          <p style="color: var(--gold-dark); font-weight: 700; margin-bottom: 12px;">
            <i class="fas fa-star"></i> ${product.rating} Reyting &bull; Og'irligi: ${product.weight}
          </p>
          <p style="color: var(--text-secondary); margin-bottom: 20px;">${product.desc}</p>
        </div>
        <div>
          <h3 style="color: var(--red); font-size: 1.5rem; margin-bottom: 16px;">${formatPrice(product.price)}</h3>
          <button class="btn btn-primary full-width" onclick="addToCart(${product.id}); closeModal('product-modal');">
            <i class="fas fa-shopping-bag"></i> Savatchaga qo'shish
          </button>
        </div>
      </div>
    </div>
  `;
  openModal('product-modal');
};

// ==================== 9. CHECKOUT & ORDER SUBMISSION ====================
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast("Avval savatchaga mahsulot qo'shing!", 'error');
    return;
  }

  closeDrawers();

  // Pre-fill user info if logged in
  if (state.currentUser) {
    document.getElementById('order-fullname').value = state.currentUser.name || '';
    document.getElementById('order-phone').value = state.currentUser.phone || '';
  }

  renderCheckoutSummary();
  openModal('checkout-modal');
}

function renderCheckoutSummary() {
  const orderType = document.querySelector('input[name="orderType"]:checked').value;
  const { subtotal, delivery, grandTotal } = getCartTotals();
  const effectiveDelivery = orderType === 'pickup' ? 0 : delivery;
  const finalTotal = subtotal + effectiveDelivery;

  document.getElementById('checkout-items-list').innerHTML = state.cart.map(item => `
    <div class="chk-item-row">
      <span>${item.name} &times; ${item.qty}</span>
      <strong>${formatPrice(item.price * item.qty)}</strong>
    </div>
  `).join('');

  document.getElementById('chk-subtotal').textContent = formatPrice(subtotal);
  document.getElementById('chk-delivery').textContent =
    effectiveDelivery === 0 ? 'Bepul (0 so\'m)' : formatPrice(effectiveDelivery);
  document.getElementById('chk-total').textContent = formatPrice(finalTotal);
}

function setupCheckout() {
  document.getElementById('proceed-checkout-btn').addEventListener('click', openCheckoutModal);

  // Toggle address field based on delivery vs pickup
  document.querySelectorAll('input[name="orderType"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const addressGroup = document.getElementById('address-field-group');
      addressGroup.style.display = e.target.value === 'pickup' ? 'none' : 'block';
      renderCheckoutSummary();
    });
  });

  document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const fullname = document.getElementById('order-fullname');
    const phone = document.getElementById('order-phone');
    const address = document.getElementById('order-address');
    const note = document.getElementById('order-note').value.trim();
    const orderType = document.querySelector('input[name="orderType"]:checked').value;
    const paymentType = document.querySelector('input[name="paymentType"]:checked').value;

    let isValid = true;

    if (fullname.value.trim().length < 3) {
      setFieldError(fullname, "Ism va familiyangizni to'liq kiriting");
      isValid = false;
    } else {
      clearFieldError(fullname);
    }

    if (phone.value.trim().length < 9) {
      setFieldError(phone, "To'g'ri telefon raqam kiriting");
      isValid = false;
    } else {
      clearFieldError(phone);
    }

    if (orderType === 'delivery' && address.value.trim().length < 5) {
      setFieldError(address, "Andijon shahridagi manzilingizni kiriting");
      isValid = false;
    } else {
      clearFieldError(address);
    }

    if (!isValid) return;

    const { subtotal, delivery } = getCartTotals();
    const finalDelivery = orderType === 'pickup' ? 0 : delivery;
    const newOrder = {
      id: 'AF-' + Math.floor(1000 + Math.random() * 9000),
      date: new Date().toLocaleString('uz-UZ'),
      customer: fullname.value.trim(),
      phone: phone.value.trim(),
      orderType: orderType === 'delivery' ? 'Yetkazib berish' : 'Olib ketish',
      address: orderType === 'delivery' ? address.value.trim() : 'Andijon Markaziy Filial',
      paymentType: paymentType === 'cash' ? 'Naqd pul' : 'Plastik karta',
      note,
      items: [...state.cart],
      total: subtotal + finalDelivery
    };

    // Save order (Demo backend architecture ready for Telegram Bot / API integration)
    state.orders.unshift(newOrder);
    state.cart = [];
    saveState();
    updateCartUI();

    closeModal('checkout-modal');
    e.target.reset();

    // Show Success Modal
    document.getElementById('success-order-id').textContent = `Buyurtma raqami: #${newOrder.id}`;
    document.getElementById('success-order-details').innerHTML = `
      <p><strong>Mijoz:</strong> ${newOrder.customer}</p>
      <p><strong>Telefon:</strong> ${newOrder.phone}</p>
      <p><strong>Usul:</strong> ${newOrder.orderType} (${newOrder.address})</p>
      <p><strong>To'lov:</strong> ${newOrder.paymentType}</p>
      <p><strong>Jami to'lov:</strong> ${formatPrice(newOrder.total)}</p>
    `;
    openModal('success-modal');
  });
}

// ==================== 10. AUTHENTICATION (DEMO) ====================
function updateAuthNavbar() {
  const area = document.getElementById('auth-nav-area');
  if (state.currentUser) {
    area.innerHTML = `
      <div class="user-pill">
        <i class="fas fa-user-circle" style="color: var(--red);"></i>
        <span>${state.currentUser.name.split(' ')[0]}</span>
        <button onclick="openHistoryModal()" title="Buyurtmalar tarixi"><i class="fas fa-history"></i></button>
        <button onclick="logoutUser()" title="Chiqish"><i class="fas fa-sign-out-alt"></i></button>
      </div>
    `;
  } else {
    area.innerHTML = `
      <button id="auth-open-btn" class="btn btn-primary btn-sm" onclick="openModal('auth-modal')">
        <i class="fas fa-user"></i> <span>Kirish</span>
      </button>
    `;
  }
}

window.logoutUser = () => {
  state.currentUser = null;
  saveState();
  updateAuthNavbar();
  showToast("Tizimdan chiqdingiz");
};

window.openHistoryModal = () => {
  const container = document.getElementById('history-list-container');
  if (state.orders.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding: 30px; color: var(--text-secondary);">Hozircha buyurtmalar tarixi mavjud emas.</p>`;
  } else {
    container.innerHTML = state.orders.map(ord => `
      <div style="border: 1px solid var(--border-color); border-radius: 12px; padding: 16px; margin-bottom: 14px;">
        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
          <strong style="color: var(--red);">#${ord.id}</strong>
          <small style="color: var(--text-secondary);">${ord.date}</small>
        </div>
        <p style="font-size:0.9rem; margin-bottom:6px;">
          ${ord.items.map(i => `${i.name} (${i.qty}x)`).join(', ')}
        </p>
        <div style="display:flex; justify-content:space-between; font-weight:700; font-size:0.92rem;">
          <span>${ord.orderType}</span>
          <span>${formatPrice(ord.total)}</span>
        </div>
      </div>
    `).join('');
  }
  openModal('history-modal');
};

function setupAuth() {
  // Switch tabs
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`${tab.dataset.tab}-form`).classList.add('active');
    });
  });

  // Toggle password visibility
  document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.target);
      const isPass = input.type === 'password';
      input.type = isPass ? 'text' : 'password';
      btn.innerHTML = `<i class="fas ${isPass ? 'fa-eye-slash' : 'fa-eye'}"></i>`;
    });
  });

  // Register Submit
  document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name');
    const phone = document.getElementById('reg-phone');
    const email = document.getElementById('reg-email');
    const pass = document.getElementById('reg-password');
    const confirm = document.getElementById('reg-confirm');

    let valid = true;
    if (name.value.trim().length < 2) { setFieldError(name, 'Ismingizni kiriting'); valid = false; } else clearFieldError(name);
    if (phone.value.trim().length < 9) { setFieldError(phone, 'Telefon raqam kiriting'); valid = false; } else clearFieldError(phone);
    if (!email.value.includes('@')) { setFieldError(email, 'Email manzil noto‘g‘ri'); valid = false; } else clearFieldError(email);
    if (pass.value.length < 6) { setFieldError(pass, 'Parol kamida 6 belgidan iborat bo‘lsin'); valid = false; } else clearFieldError(pass);
    if (pass.value !== confirm.value) { setFieldError(confirm, 'Parollar mos kelmadi'); valid = false; } else clearFieldError(confirm);

    if (!valid) return;

    const newUser = {
      name: name.value.trim(),
      phone: phone.value.trim(),
      email: email.value.trim(),
      password: pass.value
    };

    state.users.push(newUser);
    state.currentUser = newUser;
    saveState();
    updateAuthNavbar();
    closeModal('auth-modal');
    e.target.reset();
    showToast(`Xush kelibsiz, ${newUser.name}! Ro'yxatdan o'tdingiz.`);
  });

  // Login Submit
  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const identifier = document.getElementById('login-identifier');
    const password = document.getElementById('login-password');

    if (!identifier.value.trim() || !password.value.trim()) {
      setFieldError(identifier, 'Maydonlarni to‘ldiring');
      return;
    }

    const foundUser = state.users.find(
      u => (u.email === identifier.value.trim() || u.phone === identifier.value.trim()) && u.password === password.value
    );

    if (foundUser) {
      state.currentUser = foundUser;
      saveState();
      updateAuthNavbar();
      closeModal('auth-modal');
      e.target.reset();
      showToast(`Qaytganingiz bilan, ${foundUser.name}!`);
    } else {
      setFieldError(password, 'Login yoki parol noto‘g‘ri (avval ro‘yxatdan o‘ting)');
    }
  });
}

// ==================== 11. CONTACT FORM VALIDATION ====================
function setupContactForm() {
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name');
    const phone = document.getElementById('contact-phone');
    const message = document.getElementById('contact-message');

    let valid = true;
    if (name.value.trim().length < 2) { setFieldError(name, 'Ismingizni kiriting'); valid = false; } else clearFieldError(name);
    if (phone.value.trim().length < 9) { setFieldError(phone, 'Telefon raqamingizni kiriting'); valid = false; } else clearFieldError(phone);
    if (message.value.trim().length < 5) { setFieldError(message, 'Xabar matnini kiriting'); valid = false; } else clearFieldError(message);

    if (!valid) return;

    e.target.reset();
    showToast("Xabaringiz yuborildi! Tez orada bog'lanamiz.");
  });
}

function setFieldError(inputEl, message) {
  const group = inputEl.closest('.form-group');
  group.classList.add('invalid');
  group.querySelector('.error-msg').textContent = message;
}

function clearFieldError(inputEl) {
  const group = inputEl.closest('.form-group');
  group.classList.remove('invalid');
  group.querySelector('.error-msg').textContent = '';
}

// ==================== 12. MODALS, DRAWERS, NAVBAR & THEME ====================
window.openModal = (modalId) => {
  document.getElementById(modalId).classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeModal = (modalId) => {
  document.getElementById(modalId).classList.remove('open');
  document.body.style.overflow = '';
};

function closeDrawers() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('wishlist-drawer').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function setupUIInteractions() {
  // Cart & Wishlist Drawers
  document.getElementById('cart-open-btn').addEventListener('click', () => {
    document.getElementById('cart-drawer').classList.add('open');
    document.getElementById('cart-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  document.getElementById('wishlist-open-btn').addEventListener('click', () => {
    document.getElementById('wishlist-drawer').classList.add('open');
    document.getElementById('cart-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  document.getElementById('cart-close-btn').addEventListener('click', closeDrawers);
  document.getElementById('wishlist-close-btn').addEventListener('click', closeDrawers);
  document.getElementById('cart-overlay').addEventListener('click', closeDrawers);

  // Close modals via data attribute
  document.querySelectorAll('[data-close-modal]').forEach(el => {
    el.addEventListener('click', () => closeModal(el.dataset.closeModal));
  });

  // Mobile Hamburger Menu
  const hamburger = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // Navbar scroll effect & Back-to-top
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    backToTop.classList.toggle('visible', window.scrollY > 400);

    // Active nav link highlight on scroll
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (window.scrollY >= top && window.scrollY < top + height) {
        document.querySelectorAll('.nav-link').forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Theme Toggle (Dark / Light Mode)
  const themeBtn = document.getElementById('theme-toggle');
  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    themeBtn.innerHTML = `<i class="fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}"></i>`;
    localStorage.setItem('af_theme', theme);
  };
  applyTheme(state.theme);

  themeBtn.addEventListener('click', () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    applyTheme(state.theme);
  });

  // Scroll Reveal Observer
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ==================== 13. INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  renderOffers();
  renderCategories();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  updateAuthNavbar();

  setupMenuControls();
  setupCheckout();
  setupAuth();
  setupContactForm();
  setupUIInteractions();

  // Hide Preloader
  setTimeout(() => {
    document.getElementById('preloader').classList.add('fade-out');
  }, 500);
});