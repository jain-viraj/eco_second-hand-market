// Global variables
let currentUser = null;
let items = [];
let currentChatItem = null;
let conversations = [];

// Sample data for demonstration
const sampleItems = [
    {
        id: 1,
        title: "Vintage Denim Jacket",
        description: "Classic blue denim jacket in excellent condition. Perfect for any casual outfit.",
        price: 1200,
        condition: "excellent",
        category: "clothing",
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=300&fit=crop",
        seller: "Sarah M.",
        sellerId: "seller1",
        date: "2024-01-15",
        location: "Mumbai"
    },
    {
        id: 2,
        title: "MacBook Pro 2019",
        description: "13-inch MacBook Pro in good working condition. Battery life is excellent.",
        price: 45000,
        condition: "good",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        seller: "Raj K.",
        sellerId: "seller2",
        date: "2024-01-14",
        location: "Delhi"
    },
    {
        id: 3,
        title: "Wooden Bookshelf",
        description: "Solid oak bookshelf with 5 shelves. Perfect for organizing books and decor.",
        price: 3500,
        condition: "good",
        category: "furniture",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        seller: "Priya S.",
        sellerId: "seller3",
        date: "2024-01-13",
        location: "Bangalore"
    },
    {
        id: 4,
        title: "Design Thinking Book",
        description: "Complete guide to design thinking methodology. Barely used, like new condition.",
        price: 450,
        condition: "excellent",
        category: "books",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
        seller: "Amit P.",
        sellerId: "seller4",
        date: "2024-01-12",
        location: "Pune"
    },
    {
        id: 5,
        title: "Leather Handbag",
        description: "Genuine leather handbag in brown. Timeless design, perfect for daily use.",
        price: 2500,
        condition: "good",
        category: "accessories",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
        seller: "Neha R.",
        sellerId: "seller5",
        date: "2024-01-11",
        location: "Chennai"
    },
    {
        id: 6,
        title: "Wireless Headphones",
        description: "Noise-cancelling wireless headphones with excellent sound quality.",
        price: 3200,
        condition: "excellent",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        seller: "Vikram M.",
        sellerId: "seller6",
        date: "2024-01-10",
        location: "Hyderabad"
    },
    {
        id: 7,
        title: "Vintage Camera",
        description: "Classic film camera from the 80s. Perfect for photography enthusiasts.",
        price: 8500,
        condition: "good",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
        seller: "Arjun S.",
        sellerId: "seller7",
        date: "2024-01-09",
        location: "Kolkata"
    },
    {
        id: 8,
        title: "Designer Sunglasses",
        description: "Branded sunglasses with UV protection. Stylish and functional.",
        price: 1800,
        condition: "excellent",
        category: "accessories",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop",
        seller: "Riya K.",
        sellerId: "seller8",
        date: "2024-01-08",
        location: "Mumbai"
    },
    {
        id: 9,
        title: "Coffee Table",
        description: "Modern glass coffee table with wooden legs. Perfect for living room.",
        price: 4200,
        condition: "good",
        category: "furniture",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
        seller: "Deepak P.",
        sellerId: "seller9",
        date: "2024-01-07",
        location: "Delhi"
    },
    {
        id: 10,
        title: "Running Shoes",
        description: "Nike running shoes in excellent condition. Perfect for jogging and workouts.",
        price: 2200,
        condition: "excellent",
        category: "clothing",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
        seller: "Suresh M.",
        sellerId: "seller10",
        date: "2024-01-06",
        location: "Bangalore"
    },
    {
        id: 11,
        title: "Guitar",
        description: "Acoustic guitar in good condition. Perfect for beginners and intermediate players.",
        price: 8500,
        condition: "good",
        category: "musical-instruments",
        image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop",
        seller: "Karan J.",
        sellerId: "seller11",
        date: "2024-01-05",
        location: "Pune"
    },
    {
        id: 12,
        title: "Kitchen Blender",
        description: "High-speed kitchen blender with multiple attachments. Barely used.",
        price: 3200,
        condition: "excellent",
        category: "home-appliances",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        seller: "Anita R.",
        sellerId: "seller12",
        date: "2024-01-04",
        location: "Chennai"
    },
    {
        id: 13,
        title: "Art Supplies Set",
        description: "Complete set of professional art supplies including brushes, paints, and canvas.",
        price: 1500,
        condition: "good",
        category: "art-supplies",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        seller: "Meera S.",
        sellerId: "seller13",
        date: "2024-01-03",
        location: "Hyderabad"
    },
    {
        id: 14,
        title: "Vintage Watch",
        description: "Classic mechanical watch from the 70s. Still keeps perfect time.",
        price: 12000,
        condition: "excellent",
        category: "accessories",
        image: "https://images.unsplash.com/photo-1523170335258-f5c4c6b0b0b0?w=400&h=300&fit=crop",
        seller: "Rohit K.",
        sellerId: "seller14",
        date: "2024-01-02",
        location: "Mumbai"
    },
    {
        id: 15,
        title: "Yoga Mat",
        description: "Premium yoga mat with excellent grip. Perfect for home workouts.",
        price: 800,
        condition: "excellent",
        category: "sports-fitness",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
        seller: "Priya N.",
        sellerId: "seller15",
        date: "2024-01-01",
        location: "Delhi"
    },
    {
        id: 16,
        title: "Gaming Console",
        description: "PlayStation 4 with 2 controllers and 5 games. Great for gaming enthusiasts.",
        price: 18000,
        condition: "good",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
        seller: "Aryan M.",
        sellerId: "seller16",
        date: "2023-12-31",
        location: "Bangalore"
    },
    {
        id: 17,
        title: "Dining Chair Set",
        description: "Set of 4 wooden dining chairs. Comfortable and sturdy.",
        price: 4500,
        condition: "good",
        category: "furniture",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
        seller: "Sunita P.",
        sellerId: "seller17",
        date: "2023-12-30",
        location: "Pune"
    },
    {
        id: 18,
        title: "Programming Books",
        description: "Collection of 5 programming books covering Python, JavaScript, and React.",
        price: 1200,
        condition: "excellent",
        category: "books",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
        seller: "Vikash S.",
        sellerId: "seller18",
        date: "2023-12-29",
        location: "Chennai"
    },
    {
        id: 19,
        title: "Winter Jacket",
        description: "Warm winter jacket perfect for cold weather. Excellent condition.",
        price: 2800,
        condition: "excellent",
        category: "clothing",
        image: "https://images.unsplash.com/photo-1551028719-001c67d4b5e4?w=400&h=300&fit=crop",
        seller: "Kavya R.",
        sellerId: "seller19",
        date: "2023-12-28",
        location: "Kolkata"
    },
    {
        id: 20,
        title: "Plant Pots Set",
        description: "Set of 6 ceramic plant pots in different sizes. Perfect for indoor gardening.",
        price: 900,
        condition: "excellent",
        category: "home-garden",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop",
        seller: "Nisha T.",
        sellerId: "seller20",
        date: "2023-12-27",
        location: "Hyderabad"
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    
    // Check if we're on dashboard page
    if (document.body.classList.contains('dashboard-page')) {
        loadDashboardData();
    }
});

function initializeApp() {
    // Check if user is logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserInterface();
    }
    
    // Load saved items
    const savedItems = localStorage.getItem('items');
    if (savedItems) {
        items = JSON.parse(savedItems);
    } else {
        items = [...sampleItems];
        localStorage.setItem('items', JSON.stringify(items));
    }
    
    // Load conversations
    const savedConversations = localStorage.getItem('conversations');
    if (savedConversations) {
        conversations = JSON.parse(savedConversations);
    }
}

function setupEventListeners() {
    // Introduction page events
    if (document.getElementById('authModal')) {
        document.getElementById('authModal').addEventListener('click', (e) => {
            if (e.target.id === 'authModal') {
                closeAuthModal();
            }
        });
        
        document.getElementById('closeAuthModal')?.addEventListener('click', closeAuthModal);
        document.getElementById('loginForm')?.addEventListener('submit', handleLogin);
        document.getElementById('signupForm')?.addEventListener('submit', handleSignup);
    }
    
    // Dashboard page events
    if (document.body.classList.contains('dashboard-page')) {
        setupDashboardEvents();
    }
}

function setupDashboardEvents() {
    // Search and filters
    document.getElementById('searchInput')?.addEventListener('input', filterItems);
    document.getElementById('categoryFilter')?.addEventListener('change', filterItems);
    document.getElementById('conditionFilter')?.addEventListener('change', filterItems);
    document.getElementById('priceFilter')?.addEventListener('change', filterItems);
    
    // Upload functionality
    document.getElementById('uploadArea')?.addEventListener('click', () => {
        document.getElementById('imageInput').click();
    });
    document.getElementById('imageInput')?.addEventListener('change', handleImageUpload);
    document.getElementById('uploadItemBtn')?.addEventListener('click', handleItemUpload);
    
    // Chat functionality
    document.getElementById('sendMessageBtn')?.addEventListener('click', sendMessage);
    document.getElementById('messageInput')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Mobile menu
    document.getElementById('hamburger')?.addEventListener('click', toggleMobileMenu);
}

function loadDashboardData() {
    if (!currentUser) {
        // Redirect to intro page if not logged in
        window.location.href = 'index.html';
        return;
    }
    
    displayItems(items);
    loadMyItems();
    loadConversations();
    updateProfileStats();
}

// Authentication functions
function showAuthModal() {
    document.getElementById('authModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
    document.getElementById('authModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function switchToSignUp() {
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
    document.getElementById('authTitle').textContent = 'Join Eco-Finds';
}

function switchToSignIn() {
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('signInForm').style.display = 'block';
    document.getElementById('authTitle').textContent = 'Welcome to Eco-Finds';
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (!email || !password) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    // Simulate login
    currentUser = {
        id: Date.now(),
        name: 'User',
        email: email,
        joinDate: new Date().toISOString()
    };
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    closeAuthModal();
    showMessage('Welcome back!', 'success');
    
    // Redirect to dashboard
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1000);
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (!name || !email || !password || !confirmPassword) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
    }
    
    if (password.length < 6) {
        showMessage('Password must be at least 6 characters', 'error');
        return;
    }
    
    // Simulate signup
    currentUser = {
        id: Date.now(),
        name: name,
        email: email,
        joinDate: new Date().toISOString()
    };
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    closeAuthModal();
    showMessage('Account created successfully!', 'success');
    
    // Redirect to dashboard
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1000);
}

function updateUserInterface() {
    if (currentUser) {
        const userNameElements = document.querySelectorAll('#userName');
        userNameElements.forEach(el => {
            if (el) el.textContent = currentUser.name;
        });
        
        const userMenu = document.getElementById('userMenu');
        if (userMenu) userMenu.style.display = 'flex';
        
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        if (loginBtn) loginBtn.style.display = 'none';
        if (signupBtn) signupBtn.style.display = 'none';
    }
}

// Dashboard functions
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[onclick="showSection('${sectionId}')"]`).classList.add('active');
    
    // Load section-specific data
    if (sectionId === 'browse') {
        displayItems(items);
    } else if (sectionId === 'my-items') {
        loadMyItems();
    } else if (sectionId === 'messages') {
        loadConversations();
    } else if (sectionId === 'profile') {
        updateProfileStats();
    }
}

function displayItems(itemsToShow) {
    const itemsGrid = document.getElementById('itemsGrid');
    if (!itemsGrid) return;
    
    itemsGrid.innerHTML = '';
    
    if (itemsToShow.length === 0) {
        itemsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #666; font-size: 1.2rem;">No items found matching your criteria.</p>';
        return;
    }
    
    itemsToShow.forEach(item => {
        const itemCard = createItemCard(item);
        itemsGrid.appendChild(itemCard);
    });
}

function createItemCard(item) {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="item-image">
        <div class="item-content">
            <h3 class="item-title">${item.title}</h3>
            <p class="item-description">${item.description}</p>
            <div class="item-meta">
                <span class="item-price">₹${item.price.toLocaleString()}</span>
                <span class="item-condition">${item.condition}</span>
            </div>
            <div class="item-location">
                <i class="fas fa-map-marker-alt"></i>
                ${item.location}
            </div>
            <div class="item-actions">
                <button class="btn-contact" onclick="openItemDetail(${item.id})">
                    <i class="fas fa-eye"></i>
                    View Details
                </button>
                <button class="btn-contact" onclick="startConversation(${item.id})">
                    <i class="fas fa-comments"></i>
                    Contact Seller
                </button>
            </div>
        </div>
    `;
    return card;
}

function filterItems() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const conditionFilter = document.getElementById('conditionFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    
    const filteredItems = items.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm) || 
                            item.description.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || item.category === categoryFilter;
        const matchesCondition = !conditionFilter || item.condition === conditionFilter;
        
        let matchesPrice = true;
        if (priceFilter) {
            const [min, max] = priceFilter.split('-').map(p => p === '+' ? Infinity : parseInt(p));
            matchesPrice = item.price >= min && (max === undefined || item.price <= max);
        }
        
        return matchesSearch && matchesCategory && matchesCondition && matchesPrice;
    });
    
    displayItems(filteredItems);
}

function handleImageUpload(e) {
    const files = e.target.files;
    const uploadArea = document.getElementById('uploadArea');
    const imagePreview = document.getElementById('imagePreview');
    
    if (files.length > 0) {
        uploadArea.innerHTML = `
            <i class="fas fa-check-circle" style="color: #2d5a27;"></i>
            <p>${files.length} image(s) selected</p>
            <p class="upload-hint">Click to change images</p>
        `;
        
        // Show image previews
        imagePreview.innerHTML = '';
        Array.from(files).forEach(file => {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            imagePreview.appendChild(img);
        });
    }
}

function handleItemUpload() {
    if (!currentUser) {
        showMessage('Please sign in to upload items', 'error');
        return;
    }
    
    const name = document.getElementById('itemName').value;
    const description = document.getElementById('itemDescription').value;
    const category = document.getElementById('itemCategory').value;
    const condition = document.getElementById('itemCondition').value;
    const price = document.getElementById('itemPrice').value;
    const location = document.getElementById('itemLocation').value;
    const images = document.getElementById('imageInput').files;
    
    if (!name || !description || !price || !category || !condition) {
        showMessage('Please fill in all required fields', 'error');
        return;
    }
    
    if (images.length === 0) {
        showMessage('Please upload at least one image', 'error');
        return;
    }
    
    const newItem = {
        id: Date.now(),
        title: name,
        description: description,
        price: parseInt(price),
        condition: condition,
        category: category,
        image: URL.createObjectURL(images[0]),
        seller: currentUser.name,
        sellerId: currentUser.id,
        date: new Date().toISOString().split('T')[0],
        location: location || 'Not specified'
    };
    
    items.unshift(newItem);
    localStorage.setItem('items', JSON.stringify(items));
    
    // Reset form
    resetUploadForm();
    showMessage('Item uploaded successfully!', 'success');
    
    // Refresh browse section to show new item
    showSection('browse');
    setTimeout(() => {
        filterItems(); // Refresh the items display
    }, 100);
}

function resetUploadForm() {
    document.getElementById('uploadArea').innerHTML = `
        <i class="fas fa-cloud-upload-alt"></i>
        <p>Drag & drop your item photos here</p>
        <p class="upload-hint">or click to browse</p>
    `;
    document.getElementById('imageInput').value = '';
    document.getElementById('imagePreview').innerHTML = '';
    document.getElementById('itemName').value = '';
    document.getElementById('itemDescription').value = '';
    document.getElementById('itemPrice').value = '';
    document.getElementById('itemLocation').value = '';
    document.getElementById('itemCategory').value = '';
    document.getElementById('itemCondition').value = '';
}

function loadMyItems() {
    if (!currentUser) return;
    
    const myItems = items.filter(item => item.sellerId === currentUser.id);
    const myItemsGrid = document.getElementById('myItemsGrid');
    
    if (!myItemsGrid) return;
    
    myItemsGrid.innerHTML = '';
    
    if (myItems.length === 0) {
        myItemsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #666; font-size: 1.2rem;">You haven\'t uploaded any items yet.</p>';
        return;
    }
    
    myItems.forEach(item => {
        const itemCard = createMyItemCard(item);
        myItemsGrid.appendChild(itemCard);
    });
}

function createMyItemCard(item) {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="item-image">
        <div class="item-content">
            <h3 class="item-title">${item.title}</h3>
            <p class="item-description">${item.description}</p>
            <div class="item-meta">
                <span class="item-price">₹${item.price.toLocaleString()}</span>
                <span class="item-condition">${item.condition}</span>
            </div>
            <div class="item-actions">
                <button class="btn-contact" onclick="editItem(${item.id})">
                    <i class="fas fa-edit"></i>
                    Edit
                </button>
                <button class="btn-contact" onclick="deleteItem(${item.id})" style="background: #dc3545;">
                    <i class="fas fa-trash"></i>
                    Delete
                </button>
            </div>
        </div>
    `;
    return card;
}

function loadConversations() {
    const conversationsList = document.getElementById('conversationsList');
    if (!conversationsList) return;
    
    conversationsList.innerHTML = '';
    
    if (conversations.length === 0) {
        conversationsList.innerHTML = '<p style="text-align: center; padding: 20px; color: #666;">No conversations yet</p>';
        return;
    }
    
    conversations.forEach(conv => {
        const convItem = document.createElement('div');
        convItem.className = 'conversation-item';
        convItem.innerHTML = `
            <h4>${conv.itemTitle}</h4>
            <p>${conv.sellerName}</p>
            <small>${conv.lastMessage}</small>
        `;
        convItem.onclick = () => openConversation(conv.id);
        conversationsList.appendChild(convItem);
    });
}

function startConversation(itemId) {
    if (!currentUser) {
        showMessage('Please sign in to contact sellers', 'error');
        return;
    }
    
    const item = items.find(i => i.id === itemId);
    if (!item) return;
    
    // Check if conversation already exists
    let conversation = conversations.find(c => c.itemId === itemId);
    
    if (!conversation) {
        conversation = {
            id: Date.now(),
            itemId: itemId,
            itemTitle: item.title,
            sellerName: item.seller,
            sellerId: item.sellerId,
            messages: [],
            lastMessage: 'Start of conversation'
        };
        conversations.push(conversation);
        localStorage.setItem('conversations', JSON.stringify(conversations));
    }
    
    showSection('messages');
    openConversation(conversation.id);
}

function openConversation(conversationId) {
    const conversation = conversations.find(c => c.id === conversationId);
    if (!conversation) return;
    
    currentChatItem = conversation;
    
    // Update chat header
    document.getElementById('chatTitle').textContent = conversation.itemTitle;
    
    // Load messages
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML = '';
    
    if (conversation.messages.length === 0) {
        chatMessages.innerHTML = `
            <div class="message received">
                <strong>${conversation.sellerName}:</strong> Hi! I'm interested in your ${conversation.itemTitle}. Is it still available?
            </div>
        `;
    } else {
        conversation.messages.forEach(msg => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${msg.sender === 'user' ? 'sent' : 'received'}`;
            messageDiv.innerHTML = `<strong>${msg.sender === 'user' ? 'You' : conversation.sellerName}:</strong> ${msg.text}`;
            chatMessages.appendChild(messageDiv);
        });
    }
    
    // Show chat input
    document.getElementById('chatInput').style.display = 'flex';
    
    // Update active conversation
    document.querySelectorAll('.conversation-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.closest('.conversation-item').classList.add('active');
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    
    if (!message || !currentChatItem) return;
    
    // Add message to conversation
    const newMessage = {
        sender: 'user',
        text: message,
        timestamp: new Date().toISOString()
    };
    
    currentChatItem.messages.push(newMessage);
    currentChatItem.lastMessage = message;
    
    // Update conversations in localStorage
    localStorage.setItem('conversations', JSON.stringify(conversations));
    
    // Add message to chat
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message sent';
    messageDiv.innerHTML = `<strong>You:</strong> ${message}`;
    chatMessages.appendChild(messageDiv);
    
    messageInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Simulate seller response
    setTimeout(() => {
        const responses = [
            "Thanks for your interest! When would you like to meet?",
            "The item is in great condition. Would you like to see more photos?",
            "I can offer a small discount if you're interested.",
            "Let me know if you have any questions about the item."
        ];
        const response = responses[Math.floor(Math.random() * responses.length)];
        
        const responseMessage = {
            sender: 'seller',
            text: response,
            timestamp: new Date().toISOString()
        };
        
        currentChatItem.messages.push(responseMessage);
        currentChatItem.lastMessage = response;
        
        const responseDiv = document.createElement('div');
        responseDiv.className = 'message received';
        responseDiv.innerHTML = `<strong>${currentChatItem.sellerName}:</strong> ${response}`;
        chatMessages.appendChild(responseDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        localStorage.setItem('conversations', JSON.stringify(conversations));
        loadConversations();
    }, 1000);
}

function openItemDetail(itemId) {
    const item = items.find(i => i.id === itemId);
    if (!item) return;
    
    document.getElementById('itemDetailTitle').textContent = item.title;
    document.getElementById('itemDetailContent').innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
            <div>
                <img src="${item.image}" alt="${item.title}" style="width: 100%; border-radius: 15px;">
            </div>
            <div>
                <h3 style="color: #2d5a27; margin-bottom: 15px;">${item.title}</h3>
                <p style="color: #666; margin-bottom: 20px;">${item.description}</p>
                <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                    <span style="font-size: 1.5rem; font-weight: 700; color: #2d5a27;">₹${item.price.toLocaleString()}</span>
                    <span style="background: #e8f5e8; color: #2d5a27; padding: 5px 12px; border-radius: 15px;">${item.condition}</span>
                </div>
                <div style="margin-bottom: 20px;">
                    <strong>Seller:</strong> ${item.seller}<br>
                    <strong>Location:</strong> ${item.location}<br>
                    <strong>Category:</strong> ${item.category}
                </div>
                <button class="btn-primary" onclick="startConversation(${item.id}); closeItemDetail();">
                    <i class="fas fa-comments"></i>
                    Contact Seller
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('itemDetailModal').style.display = 'block';
}

function closeItemDetail() {
    document.getElementById('itemDetailModal').style.display = 'none';
}

function updateProfileStats() {
    if (!currentUser) return;
    
    const myItems = items.filter(item => item.sellerId === currentUser.id);
    const myMessages = conversations.reduce((total, conv) => total + conv.messages.length, 0);
    
    document.getElementById('profileName').textContent = currentUser.name;
    document.getElementById('profileEmail').textContent = currentUser.email;
    document.getElementById('profileJoinDate').textContent = `Member since ${new Date(currentUser.joinDate).toLocaleDateString()}`;
    document.getElementById('itemsCount').textContent = myItems.length;
    document.getElementById('messagesCount').textContent = myMessages;
    document.getElementById('likesCount').textContent = Math.floor(Math.random() * 50);
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
}

function showMessage(text, type) {
    const messageContainer = document.getElementById('messageContainer') || createMessageContainer();
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-${type}`;
    messageDiv.textContent = text;
    
    messageContainer.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

function createMessageContainer() {
    const container = document.createElement('div');
    container.id = 'messageContainer';
    container.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 10000;';
    document.body.appendChild(container);
    return container;
}

// Export functions for global access
window.showAuthModal = showAuthModal;
window.closeAuthModal = closeAuthModal;
window.switchToSignUp = switchToSignUp;
window.switchToSignIn = switchToSignIn;
window.showSection = showSection;
window.openItemDetail = openItemDetail;
window.closeItemDetail = closeItemDetail;
window.startConversation = startConversation;
window.scrollToFeatures = scrollToFeatures;
window.logout = logout;