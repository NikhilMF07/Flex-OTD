// Sample inventory data
const inventoryData = [
    {
        id: 1,
        category: 'normal-flex',
        description: 'Pvc Sheeting In Roll 002 Hg Bb 3.2 New',
        length: 50,
        qty: 25833.38,
        altQty: 15
    },
    {
        id: 2,
        category: 'normal-flex',
        description: 'Pvc Sheeting In Roll 003 Hg Bb 3.2 Premium',
        length: 70,
        qty: 24608.42,
        altQty: 9
    },
    {
        id: 3,
        category: 'normal-flex',
        description: 'Pvc Sheeting In Roll 004 Hg Bb 3.2 Standard',
        length: 70,
        qty: 17224.41,
        altQty: 8
    },
    {
        id: 4,
        category: 'normal-flex',
        description: 'Pvc Sheeting In Roll 005 Hg Bb 3.2 Economy',
        length: 70,
        qty: 13087.94,
        altQty: 8
    },
    {
        id: 5,
        category: 'normal-flex',
        description: 'Pvc Sheeting In Roll 006 Hg Bb 3.2 Basic',
        length: 70,
        qty: 13087.85,
        altQty: 9
    },
    {
        id: 6,
        category: 'normal-flex',
        description: 'Pvc Sheeting In Roll 007 Hg Bb 3.2 Pro',
        length: 70,
        qty: 9644.46,
        altQty: 5
    },
    {
        id: 7,
        category: 'normal-flex',
        description: 'Pvc Sheeting In Roll 008 Hg Bb 3.2 Ultra',
        length: 70,
        qty: 8725.25,
        altQty: 6
    },
    {
        id: 8,
        category: 'normal-flex',
        description: 'Pvc Sheeting In Roll 009 Hg Bb 3.2 Max',
        length: 70,
        qty: 7233.34,
        altQty: 3
    },
    {
        id: 9,
        category: 'normal-flex',
        description: 'Pvc Sheeting In Roll 010 Hg Bb 3.2 Super',
        length: 70,
        qty: 5726.40,
        altQty: 4
    },
    {
        id: 10,
        category: 'normal-flex',
        description: 'Pvc Sheeting In Roll 011 Hg Bb 3.2 Deluxe',
        length: 50,
        qty: 5166.68,
        altQty: 3
    },
    {
        id: 11,
        category: 'normal-flex',
        description: 'Pvc Sheeting In Roll 012 Hg Bb 3.2 Elite',
        length: 50,
        qty: 5166.67,
        altQty: 4
    },
    {
        id: 12,
        category: 'accessories',
        description: 'Mounting Brackets Set A1',
        length: 25,
        qty: 150.00,
        altQty: 12
    },
    {
        id: 13,
        category: 'accessories',
        description: 'Cable Management Kit B2',
        length: 30,
        qty: 85.50,
        altQty: 8
    },
    {
        id: 14,
        category: 'led-modules',
        description: 'LED Strip Module 5050 RGB',
        length: 100,
        qty: 2500.00,
        altQty: 25
    },
    {
        id: 15,
        category: 'led-modules',
        description: 'LED Controller DMX512',
        length: 15,
        qty: 1200.00,
        altQty: 6
    },
    {
        id: 16,
        category: 'vinyl',
        description: 'Adhesive Vinyl Matte Black',
        length: 150,
        qty: 8500.00,
        altQty: 45
    },
    {
        id: 17,
        category: 'vinyl',
        description: 'Adhesive Vinyl Glossy White',
        length: 150,
        qty: 7200.00,
        altQty: 38
    }
];

// Global variables
let currentFilter = 'all';
let filteredData = [...inventoryData];
let selectedItemId = 1;

// DOM elements
const searchInput = document.getElementById('searchInput');
const inventoryTableBody = document.getElementById('inventoryTableBody');
const detailContent = document.getElementById('detailContent');
const categoryItems = document.querySelectorAll('.category-item');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderTable();
    updateDetailPanel();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Category filtering
    categoryItems.forEach(item => {
        item.addEventListener('click', handleCategoryClick);
    });
}

// Handle search input
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    
    if (searchTerm === '') {
        filteredData = getFilteredByCategory();
    } else {
        filteredData = getFilteredByCategory().filter(item =>
            item.description.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm)
        );
    }
    
    renderTable();
}

// Handle category selection
function handleCategoryClick(event) {
    const categoryItem = event.currentTarget;
    const category = categoryItem.dataset.category;
    
    // Update active state
    categoryItems.forEach(item => item.classList.remove('active'));
    categoryItem.classList.add('active');
    
    // Update current filter
    currentFilter = category;
    
    // Filter data
    filteredData = getFilteredByCategory();
    
    // Apply search if there's a search term
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm !== '') {
        filteredData = filteredData.filter(item =>
            item.description.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm)
        );
    }
    
    renderTable();
}

// Get filtered data by category
function getFilteredByCategory() {
    if (currentFilter === 'all') {
        return [...inventoryData];
    }
    return inventoryData.filter(item => item.category === currentFilter);
}

// Render the inventory table
function renderTable() {
    inventoryTableBody.innerHTML = '';
    
    if (filteredData.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="4" style="text-align: center; padding: 40px; color: #666;">
                No items found
            </td>
        `;
        inventoryTableBody.appendChild(row);
        return;
    }
    
    filteredData.forEach(item => {
        const row = document.createElement('tr');
        row.dataset.itemId = item.id;
        
        if (item.id === selectedItemId) {
            row.classList.add('selected');
        }
        
        row.innerHTML = `
            <td>
                <a href="#" class="item-description" data-item-id="${item.id}">
                    ${item.description}
                </a>
            </td>
            <td>${item.length}</td>
            <td>${formatNumber(item.qty)}</td>
            <td>${item.altQty}</td>
        `;
        
        // Add click event listener
        row.addEventListener('click', () => handleRowClick(item.id));
        
        inventoryTableBody.appendChild(row);
    });
}

// Handle table row click
function handleRowClick(itemId) {
    selectedItemId = itemId;
    
    // Update selected row styling
    const rows = inventoryTableBody.querySelectorAll('tr');
    rows.forEach(row => row.classList.remove('selected'));
    
    const selectedRow = inventoryTableBody.querySelector(`tr[data-item-id="${itemId}"]`);
    if (selectedRow) {
        selectedRow.classList.add('selected');
    }
    
    // Update detail panel
    updateDetailPanel();
}

// Update the detail panel
function updateDetailPanel() {
    const selectedItem = inventoryData.find(item => item.id === selectedItemId);
    
    if (!selectedItem) return;
    
    const categoryName = formatCategoryName(selectedItem.category);
    
    detailContent.innerHTML = `
        <div class="detail-category">${categoryName}</div>
        <div class="detail-item-description">
            <label>Item Description</label>
            <div class="detail-value">${selectedItem.description}</div>
        </div>
        <div class="detail-length">
            <label>Length</label>
            <div class="detail-value">${selectedItem.length}</div>
        </div>
        <div class="detail-qty">
            <label>Qty</label>
            <div class="detail-value">${formatNumber(selectedItem.qty)}</div>
        </div>
        <div class="detail-alt-qty">
            <label>Alt Qty</label>
            <div class="detail-value">${selectedItem.altQty}</div>
        </div>
    `;
}

// Format category name for display
function formatCategoryName(category) {
    return category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Format numbers with commas
function formatNumber(num) {
    return num.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
        navigateTable(event.key === 'ArrowUp' ? -1 : 1);
    }
});

// Navigate table with keyboard
function navigateTable(direction) {
    const currentIndex = filteredData.findIndex(item => item.id === selectedItemId);
    let newIndex = currentIndex + direction;
    
    if (newIndex < 0) newIndex = filteredData.length - 1;
    if (newIndex >= filteredData.length) newIndex = 0;
    
    if (filteredData[newIndex]) {
        handleRowClick(filteredData[newIndex].id);
        
        // Scroll the selected row into view
        const selectedRow = inventoryTableBody.querySelector(`tr[data-item-id="${filteredData[newIndex].id}"]`);
        if (selectedRow) {
            selectedRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

// Add some interactive features
document.addEventListener('click', function(event) {
    // Handle item description clicks
    if (event.target.classList.contains('item-description')) {
        event.preventDefault();
        const itemId = parseInt(event.target.dataset.itemId);
        handleRowClick(itemId);
    }
});

// Add smooth scrolling behavior
function smoothScrollToRow(rowElement) {
    rowElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

// Update scroll indicator
function updateScrollIndicator() {
    const tableWrapper = document.querySelector('.table-wrapper');
    const scrollBar = document.querySelector('.scroll-bar');
    
    if (tableWrapper && scrollBar) {
        const scrollPercentage = tableWrapper.scrollTop / (tableWrapper.scrollHeight - tableWrapper.clientHeight);
        const maxWidth = scrollBar.parentElement.clientWidth;
        const scrollBarWidth = Math.max(30, maxWidth * 0.3);
        const scrollPosition = (maxWidth - scrollBarWidth) * scrollPercentage;
        
        scrollBar.style.width = `${scrollBarWidth}px`;
        scrollBar.style.transform = `translateX(${scrollPosition}px)`;
    }
}

// Add scroll event listener
document.querySelector('.table-wrapper')?.addEventListener('scroll', updateScrollIndicator);

// Initialize scroll indicator
setTimeout(updateScrollIndicator, 100);