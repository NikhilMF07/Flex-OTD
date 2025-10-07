// Sample inventory data based on the screenshot
const inventoryData = [
    {
        id: 1,
        description: "Pvc Sheeting In Roll 002 Hq Bb 3.2 New",
        length: 50,
        qty: 25833.38,
        altQty: 15,
        category: "normal-flex"
    },
    {
        id: 2,
        description: "Pvc Sheeting In Roll 003 Premium Quality",
        length: 70,
        qty: 24608.42,
        altQty: 9,
        category: "normal-flex"
    },
    {
        id: 3,
        description: "Pvc Sheeting In Roll 004 Standard Grade",
        length: 70,
        qty: 17224.41,
        altQty: 8,
        category: "normal-flex"
    },
    {
        id: 4,
        description: "Pvc Sheeting In Roll 005 Heavy Duty",
        length: 70,
        qty: 13087.94,
        altQty: 8,
        category: "normal-flex"
    },
    {
        id: 5,
        description: "Pvc Sheeting In Roll 006 Weather Resistant",
        length: 70,
        qty: 13087.85,
        altQty: 9,
        category: "normal-flex"
    },
    {
        id: 6,
        description: "Pvc Sheeting In Roll 007 UV Protected",
        length: 70,
        qty: 9644.46,
        altQty: 5,
        category: "normal-flex"
    },
    {
        id: 7,
        description: "Pvc Sheeting In Roll 008 Fire Retardant",
        length: 70,
        qty: 8725.25,
        altQty: 6,
        category: "normal-flex"
    },
    {
        id: 8,
        description: "Pvc Sheeting In Roll 009 Anti-Static",
        length: 70,
        qty: 7233.34,
        altQty: 3,
        category: "normal-flex"
    },
    {
        id: 9,
        description: "Pvc Sheeting In Roll 010 Clear Transparent",
        length: 70,
        qty: 5726.40,
        altQty: 4,
        category: "normal-flex"
    },
    {
        id: 10,
        description: "Pvc Sheeting In Roll 011 Colored Variant",
        length: 50,
        qty: 5166.68,
        altQty: 3,
        category: "normal-flex"
    },
    {
        id: 11,
        description: "Pvc Sheeting In Roll 012 Textured Surface",
        length: 50,
        qty: 5166.67,
        altQty: 4,
        category: "normal-flex"
    },
    {
        id: 12,
        description: "LED Strip Module 5050 RGB",
        length: 5,
        qty: 2500.00,
        altQty: 50,
        category: "led-modules"
    },
    {
        id: 13,
        description: "LED Strip Module 3528 White",
        length: 5,
        qty: 3200.00,
        altQty: 40,
        category: "led-modules"
    },
    {
        id: 14,
        description: "LED Strip Module 2835 Warm White",
        length: 5,
        qty: 2400.00,
        altQty: 30,
        category: "led-modules"
    },
    {
        id: 15,
        description: "Vinyl Adhesive Sheet Matte Black",
        length: 100,
        qty: 8500.00,
        altQty: 25,
        category: "vinyl"
    },
    {
        id: 16,
        description: "Vinyl Adhesive Sheet Glossy White",
        length: 100,
        qty: 9196.22,
        altQty: 30,
        category: "vinyl"
    },
    {
        id: 17,
        description: "Foam Board 5mm Thickness",
        length: 122,
        qty: 160.00,
        altQty: 20,
        category: "foam-board"
    },
    {
        id: 18,
        description: "Lamination Film Glossy",
        length: 50,
        qty: 4500.99,
        altQty: 15,
        category: "lamination"
    },
    {
        id: 19,
        description: "Lamination Film Matte",
        length: 50,
        qty: 4573.00,
        altQty: 18,
        category: "lamination"
    },
    {
        id: 20,
        description: "Power Supply 12V 5A",
        length: 0,
        qty: 95.00,
        altQty: 10,
        category: "power-supply"
    },
    {
        id: 21,
        description: "Power Supply 24V 3A",
        length: 0,
        qty: 95.00,
        altQty: 8,
        category: "power-supply"
    }
];

let currentData = inventoryData;
let selectedItem = inventoryData[0];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const tableBody = document.getElementById('inventoryTableBody');
const categoryItems = document.querySelectorAll('.category-item');

// Detail panel elements
const detailItemDescription = document.getElementById('detailItemDescription');
const detailLength = document.getElementById('detailLength');
const detailQty = document.getElementById('detailQty');
const detailAltQty = document.getElementById('detailAltQty');

// Initialize the application
function init() {
    renderTable(currentData);
    updateDetailPanel(selectedItem);
    setupEventListeners();
}

// Render the inventory table
function renderTable(data) {
    tableBody.innerHTML = '';
    
    data.forEach((item, index) => {
        const row = document.createElement('tr');
        if (item.id === selectedItem.id) {
            row.classList.add('selected');
        }
        
        row.innerHTML = `
            <td><span class="item-description">${item.description}</span></td>
            <td>${item.length}</td>
            <td>${item.qty.toLocaleString()}</td>
            <td>${item.altQty}</td>
        `;
        
        row.addEventListener('click', () => {
            // Remove selection from other rows
            document.querySelectorAll('.inventory-table tbody tr').forEach(r => {
                r.classList.remove('selected');
            });
            
            // Add selection to clicked row
            row.classList.add('selected');
            
            // Update selected item and detail panel
            selectedItem = item;
            updateDetailPanel(item);
        });
        
        tableBody.appendChild(row);
    });
}

// Update the detail panel with selected item information
function updateDetailPanel(item) {
    detailItemDescription.textContent = item.description;
    detailLength.textContent = item.length;
    detailQty.textContent = item.qty.toLocaleString();
    detailAltQty.textContent = item.altQty;
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredData = inventoryData.filter(item =>
            item.description.toLowerCase().includes(searchTerm)
        );
        currentData = filteredData;
        renderTable(currentData);
        
        // If current selected item is not in filtered results, select first item
        if (filteredData.length > 0 && !filteredData.find(item => item.id === selectedItem.id)) {
            selectedItem = filteredData[0];
            updateDetailPanel(selectedItem);
        }
    });

    // Category filtering
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all categories
            categoryItems.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked category
            item.classList.add('active');
            
            const category = item.dataset.category;
            
            if (category === 'all') {
                currentData = inventoryData;
            } else {
                currentData = inventoryData.filter(inventoryItem => 
                    inventoryItem.category === category
                );
            }
            
            renderTable(currentData);
            
            // Select first item in filtered results
            if (currentData.length > 0) {
                selectedItem = currentData[0];
                updateDetailPanel(selectedItem);
            }
        });
    });

    // Detail panel navigation
    const detailNavButtons = document.querySelectorAll('.detail-nav i');
    detailNavButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const icon = e.target;
            
            if (icon.classList.contains('fa-chevron-left')) {
                navigateItem(-1);
            } else if (icon.classList.contains('fa-chevron-right')) {
                navigateItem(1);
            } else if (icon.classList.contains('fa-expand-alt')) {
                // Toggle detail panel size (could implement full-screen mode)
                console.log('Expand detail panel');
            } else if (icon.classList.contains('fa-times')) {
                // Close detail panel (could hide it on mobile)
                console.log('Close detail panel');
            }
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            navigateItem(-1);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            navigateItem(1);
        }
    });
}

// Navigate between items in the current filtered data
function navigateItem(direction) {
    const currentIndex = currentData.findIndex(item => item.id === selectedItem.id);
    let newIndex = currentIndex + direction;
    
    if (newIndex < 0) {
        newIndex = currentData.length - 1;
    } else if (newIndex >= currentData.length) {
        newIndex = 0;
    }
    
    if (currentData[newIndex]) {
        selectedItem = currentData[newIndex];
        updateDetailPanel(selectedItem);
        renderTable(currentData); // Re-render to update selection
        
        // Scroll selected item into view
        const selectedRow = document.querySelector('.inventory-table tbody tr.selected');
        if (selectedRow) {
            selectedRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
}

// Mobile menu toggle (for responsive design)
function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

// Add mobile menu button functionality if needed
document.addEventListener('DOMContentLoaded', () => {
    // Add mobile menu button to header if screen is small
    if (window.innerWidth <= 640) {
        const headerLeft = document.querySelector('.header-left');
        const menuButton = document.createElement('button');
        menuButton.innerHTML = '<i class="fas fa-bars"></i>';
        menuButton.className = 'mobile-menu-btn';
        menuButton.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 18px;
            margin-right: 10px;
            cursor: pointer;
            padding: 5px;
        `;
        menuButton.addEventListener('click', toggleMobileMenu);
        headerLeft.insertBefore(menuButton, headerLeft.firstChild);
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 640) {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.remove('open');
    }
});

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);