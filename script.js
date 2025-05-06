// Global Variables
const STOCK_DATABASE = {
    "RELIANCE": { 
      name: "Reliance Industries", 
      sector: "Energy",
      info: "Reliance Industries Limited is an Indian multinational conglomerate company headquartered in Mumbai. It is India's most valuable company by market value.",
      metrics: {
        "Market Cap": "₹15.2T",
        "P/E Ratio": "28.5",
        "Dividend Yield": "0.45%",
        "52 Week High": "₹2,850",
        "52 Week Low": "₹2,150"
      }
    },
    "TCS": { 
      name: "Tata Consultancy Services", 
      sector: "IT",
      info: "Tata Consultancy Services Limited is an Indian multinational information technology service and consulting company headquartered in Mumbai.",
      metrics: {
        "Market Cap": "₹12.8T",
        "P/E Ratio": "32.1",
        "Dividend Yield": "1.2%",
        "52 Week High": "₹3,980",
        "52 Week Low": "₹3,050"
      }
    },
    "HDFCBANK": { 
      name: "HDFC Bank", 
      sector: "Banking",
      info: "HDFC Bank Limited is an Indian banking and financial services company headquartered in Mumbai. It is India's largest private sector bank by assets.",
      metrics: {
        "Market Cap": "₹8.5T",
        "P/E Ratio": "22.3",
        "Dividend Yield": "0.9%",
        "52 Week High": "₹1,750",
        "52 Week Low": "₹1,350"
      }
    },
    "INFY": { 
      name: "Infosys", 
      sector: "IT",
      info: "Infosys Limited is an Indian multinational corporation that provides business consulting, information technology and outsourcing services.",
      metrics: {
        "Market Cap": "₹6.2T",
        "P/E Ratio": "26.8",
        "Dividend Yield": "2.1%",
        "52 Week High": "₹1,650",
        "52 Week Low": "₹1,250"
      }
    },
    "HINDUNILVR": { 
      name: "Hindustan Unilever", 
      sector: "FMCG",
      info: "Hindustan Unilever Limited is a British-Dutch multinational consumer goods company headquartered in Mumbai. It is India's largest fast-moving consumer goods company.",
      metrics: {
        "Market Cap": "₹5.8T",
        "P/E Ratio": "45.2",
        "Dividend Yield": "1.5%",
        "52 Week High": "₹2,650",
        "52 Week Low": "₹2,150"
      }
    },
    "ICICIBANK": { 
      name: "ICICI Bank", 
      sector: "Banking",
      info: "ICICI Bank Limited is an Indian multinational banking and financial services company headquartered in Mumbai. It is India's second-largest private sector bank.",
      metrics: {
        "Market Cap": "₹5.1T",
        "P/E Ratio": "18.7",
        "Dividend Yield": "0.7%",
        "52 Week High": "₹950",
        "52 Week Low": "₹680"
      }
    },
    "ITC": { 
      name: "ITC Limited", 
      sector: "FMCG",
      info: "ITC Limited is an Indian multinational conglomerate headquartered in Kolkata. It has diversified business across FMCG, hotels, paperboards, packaging, agri-business and IT.",
      metrics: {
        "Market Cap": "₹4.8T",
        "P/E Ratio": "22.5",
        "Dividend Yield": "3.2%",
        "52 Week High": "₹450",
        "52 Week Low": "₹320"
      }
    },
    "KOTAKBANK": { 
      name: "Kotak Mahindra Bank", 
      sector: "Banking",
      info: "Kotak Mahindra Bank Limited is an Indian private sector bank headquartered in Mumbai. It offers banking products and financial services.",
      metrics: {
        "Market Cap": "₹3.9T",
        "P/E Ratio": "25.3",
        "Dividend Yield": "0.5%",
        "52 Week High": "₹2,050",
        "52 Week Low": "₹1,650"
      }
    },
    "HDFC": { 
      name: "HDFC Limited", 
      sector: "Finance",
      info: "Housing Development Finance Corporation is an Indian financial services company based in Mumbai. It is a major housing finance provider in India.",
      metrics: {
        "Market Cap": "₹4.2T",
        "P/E Ratio": "20.1",
        "Dividend Yield": "1.1%",
        "52 Week High": "₹2,850",
        "52 Week Low": "₹2,250"
      }
    },
    "SBIN": { 
      name: "State Bank of India", 
      sector: "Banking",
      info: "State Bank of India is an Indian multinational public sector bank and financial services statutory body headquartered in Mumbai.",
      metrics: {
        "Market Cap": "₹4.5T",
        "P/E Ratio": "15.2",
        "Dividend Yield": "0.8%",
        "52 Week High": "₹550",
        "52 Week Low": "₹420"
      }
    },
    "BHARTIARTL": { 
      name: "Bharti Airtel", 
      sector: "Telecom",
      info: "Bharti Airtel Limited is an Indian multinational telecommunications services company headquartered in New Delhi. It operates in 18 countries across South Asia and Africa.",
      metrics: {
        "Market Cap": "₹4.1T",
        "P/E Ratio": "42.5",
        "Dividend Yield": "0.3%",
        "52 Week High": "₹850",
        "52 Week Low": "₹650"
      }
    },
    "LT": { 
      name: "Larsen & Toubro", 
      sector: "Construction",
      info: "Larsen & Toubro Limited is an Indian multinational conglomerate company headquartered in Mumbai. It is engaged in technology, engineering, construction, manufacturing and financial services.",
      metrics: {
        "Market Cap": "₹3.2T",
        "P/E Ratio": "28.7",
        "Dividend Yield": "1.2%",
        "52 Week High": "₹2,150",
        "52 Week Low": "₹1,750"
      }
    },
    "BAJFINANCE": { 
      name: "Bajaj Finance", 
      sector: "Finance",
      info: "Bajaj Finance Limited is an Indian non-banking financial company headquartered in Pune. It is a subsidiary of Bajaj Finserv.",
      metrics: {
        "Market Cap": "₹3.8T",
        "P/E Ratio": "35.2",
        "Dividend Yield": "0.4%",
        "52 Week High": "₹7,850",
        "52 Week Low": "₹6,250"
      }
    },
    "ASIANPAINT": { 
      name: "Asian Paints", 
      sector: "Chemicals",
      info: "Asian Paints Limited is an Indian multinational paint company headquartered in Mumbai. It is India's largest and Asia's third largest paint company.",
      metrics: {
        "Market Cap": "₹2.9T",
        "P/E Ratio": "52.3",
        "Dividend Yield": "0.8%",
        "52 Week High": "₹3,450",
        "52 Week Low": "₹2,850"
      }
    },
    "HCLTECH": { 
      name: "HCL Technologies", 
      sector: "IT",
      info: "HCL Technologies Limited is an Indian multinational information technology service and consulting company headquartered in Noida.",
      metrics: {
        "Market Cap": "₹2.7T",
        "P/E Ratio": "24.8",
        "Dividend Yield": "1.5%",
        "52 Week High": "₹1,350",
        "52 Week Low": "₹1,050"
      }
    }
  };

  // Application State
  let state = {
    walletBalance: 100000,
    portfolio: {},
    watchlist: ["RELIANCE", "TCS", "HDFCBANK"],
    orders: [],
    transactions: [],
    currentPrices: {},
    darkMode: localStorage.getItem('darkMode') === 'true',
    chartType: 'line',
    activeStock: null,
    indicators: []
  };

  // Initialize the application
  document.addEventListener('DOMContentLoaded', function() {
    initializeDarkMode();
    initializeTabs();
    initializeOrderTypeSelectors();
    initializeButtons();
    initializeStockPrices();
    loadStateFromLocalStorage();
    renderDashboard();
    initializeCharts();
    initializeResearch();
  });

  // Initialize Dark Mode
  function initializeDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.checked = state.darkMode;
    toggleDarkMode(state.darkMode);
    
    darkModeToggle.addEventListener('change', function() {
      state.darkMode = this.checked;
      localStorage.setItem('darkMode', state.darkMode);
      toggleDarkMode(state.darkMode);
    });
  }

  function toggleDarkMode(enabled) {
    if (enabled) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  // Initialize Tab Navigation
  function initializeTabs() {
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
          content.classList.remove('active');
        });
        
        // Show the selected tab content
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
      });
    });
  }

  // Initialize Order Type Selectors
  function initializeOrderTypeSelectors() {
    // Buy Order Type Selector
    const buyOrderTypes = document.querySelectorAll('#dashboard .order-type-selector .order-type');
    buyOrderTypes.forEach(type => {
      type.addEventListener('click', function() {
        buyOrderTypes.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        document.getElementById('limitPriceGroup').style.display = 'none';
        document.getElementById('stopPriceGroup').style.display = 'none';
        
        if (this.getAttribute('data-type') === 'limit') {
          document.getElementById('limitPriceGroup').style.display = 'block';
        } else if (this.getAttribute('data-type') === 'stop') {
          document.getElementById('stopPriceGroup').style.display = 'block';
        }
      });
    });
    
    // Sell Order Type Selector
    const sellOrderTypes = document.querySelectorAll('#dashboard .order-type-selector .order-type');
    sellOrderTypes.forEach(type => {
      type.addEventListener('click', function() {
        sellOrderTypes.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        document.getElementById('sellLimitPriceGroup').style.display = 'none';
        document.getElementById('sellStopPriceGroup').style.display = 'none';
        
        if (this.getAttribute('data-type') === 'limit') {
          document.getElementById('sellLimitPriceGroup').style.display = 'block';
        } else if (this.getAttribute('data-type') === 'stop') {
          document.getElementById('sellStopPriceGroup').style.display = 'block';
        }
      });
    });
  }

  // Initialize Button Event Listeners
  function initializeButtons() {
    // Place Buy Order
    document.getElementById('placeBuyOrder').addEventListener('click', placeBuyOrder);
    
    // Place Sell Order
    document.getElementById('placeSellOrder').addEventListener('click', placeSellOrder);
    
    // Add to Watchlist
    document.getElementById('addToWatchlist').addEventListener('click', showWatchlistModal);
    document.getElementById('confirmWatchlistAdd').addEventListener('click', addToWatchlist);
    document.getElementById('closeWatchlistModal').addEventListener('click', hideWatchlistModal);
    document.getElementById('cancelWatchlistAdd').addEventListener('click', hideWatchlistModal);
    
    // Order Confirmation
    document.getElementById('confirmOrder').addEventListener('click', executeOrder);
    document.getElementById('closeOrderConfirmationModal').addEventListener('click', hideOrderConfirmationModal);
    document.getElementById('cancelOrderConfirmation').addEventListener('click', hideOrderConfirmationModal);
    
    // Technical Indicators
    document.querySelectorAll('.indicator-badge').forEach(badge => {
      badge.addEventListener('click', toggleIndicator);
    });
    
    // Chart Type Buttons
    document.querySelectorAll('.chart-type-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.chart-type-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        state.chartType = this.getAttribute('data-type');
        updateCharts();
      });
    });
    
    // Reset Portfolio
    document.getElementById('resetPortfolio').addEventListener('click', showResetConfirmation);
    document.getElementById('confirmReset').addEventListener('click', resetPortfolio);
    document.getElementById('cancelReset').addEventListener('click', hideResetConfirmation);
    document.getElementById('closeResetConfirmationModal').addEventListener('click', hideResetConfirmation);
    
    // Research buttons
    document.getElementById('addToWatchlistFromResearch').addEventListener('click', addCurrentStockToWatchlist);
    document.getElementById('buyFromResearch').addEventListener('click', buyCurrentStockFromResearch);
  }

  // Initialize Research
  function initializeResearch() {
    document.getElementById('researchSymbol').addEventListener('input', function() {
      const symbol = this.value.trim().toUpperCase();
      if (STOCK_DATABASE[symbol]) {
        showStockDetails(symbol);
      } else {
        hideStockDetails();
      }
    });
  }

  // Show Stock Details in Research Tab
  function showStockDetails(symbol) {
    const stock = STOCK_DATABASE[symbol];
    if (!stock) return;
    
    state.activeStock = symbol;
    
    document.getElementById('stockName').textContent = `${stock.name} (${symbol})`;
    
    // Company Info
    document.getElementById('companyInfo').innerHTML = `
      <p><strong>Sector:</strong> ${stock.sector}</p>
      <p>${stock.info}</p>
    `;
    
    // Key Metrics
    let metricsHTML = '';
    for (const [key, value] of Object.entries(stock.metrics)) {
      metricsHTML += `<p><strong>${key}:</strong> ${value}</p>`;
    }
    document.getElementById('keyMetrics').innerHTML = metricsHTML;
    
    // Show the details section
    document.getElementById('stockDetails').style.display = 'block';
    
    // Update research chart
    updateResearchChart();
  }

  // Hide Stock Details in Research Tab
  function hideStockDetails() {
    document.getElementById('stockDetails').style.display = 'none';
    state.activeStock = null;
  }

  // Add Current Stock to Watchlist from Research
  function addCurrentStockToWatchlist() {
    if (!state.activeStock) return;
    
    if (state.watchlist.includes(state.activeStock)) {
      alert('This stock is already in your watchlist');
      return;
    }
    
    state.watchlist.push(state.activeStock);
    
    // Initialize price if not already set
    if (!state.currentPrices[state.activeStock]) {
      state.currentPrices[state.activeStock] = generateRandomPrice(100, 5000);
    }
    
    // Update UI
    renderDashboard();
    saveStateToLocalStorage();
    alert(`${state.activeStock} added to watchlist`);
  }

  // Buy Current Stock from Research
  function buyCurrentStockFromResearch() {
    if (!state.activeStock) return;
    
    document.getElementById('buyStockSymbol').value = state.activeStock;
    document.querySelector('.nav-tab[data-tab="dashboard"]').click();
  }

  // Show Reset Confirmation
  function showResetConfirmation() {
    document.getElementById('resetConfirmationModal').style.display = 'flex';
  }

  // Hide Reset Confirmation
  function hideResetConfirmation() {
    document.getElementById('resetConfirmationModal').style.display = 'none';
  }

  // Reset Portfolio
  function resetPortfolio() {
    state = {
      walletBalance: 100000,
      portfolio: {},
      watchlist: ["RELIANCE", "TCS", "HDFCBANK"],
      orders: [],
      transactions: [],
      currentPrices: {},
      darkMode: state.darkMode,
      chartType: 'line',
      activeStock: null,
      indicators: []
    };
    
    // Reinitialize prices
    initializeStockPrices();
    
    // Update UI
    renderDashboard();
    updateCharts();
    hideResetConfirmation();
    saveStateToLocalStorage();
  }

  // Initialize Stock Prices
  function initializeStockPrices() {
    // Initialize prices for all stocks in database
    Object.keys(STOCK_DATABASE).forEach(symbol => {
      if (!state.currentPrices[symbol]) {
        state.currentPrices[symbol] = generateRandomPrice(100, 5000);
      }
    });
    
    // Initialize prices for watchlist items
    state.watchlist.forEach(symbol => {
      if (!state.currentPrices[symbol]) {
        state.currentPrices[symbol] = generateRandomPrice(100, 5000);
      }
    });
    
    // Simulate price changes every 5 seconds
    setInterval(simulatePriceChanges, 5000);
  }

  // Load State from Local Storage
  function loadStateFromLocalStorage() {
    const savedState = localStorage.getItem('stockSimulatorState');
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      state = {
        ...state,
        ...parsedState,
        darkMode: localStorage.getItem('darkMode') === 'true'
      };
    }
  }

  // Save State to Local Storage
  function saveStateToLocalStorage() {
    localStorage.setItem('stockSimulatorState', JSON.stringify({
      walletBalance: state.walletBalance,
      portfolio: state.portfolio,
      watchlist: state.watchlist,
      orders: state.orders,
      transactions: state.transactions,
      currentPrices: state.currentPrices,
      chartType: state.chartType
    }));
  }

  // Generate Random Price
  function generateRandomPrice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Simulate Price Changes
  function simulatePriceChanges() {
    // Update prices for all stocks in database
    Object.keys(state.currentPrices).forEach(symbol => {
      const currentPrice = state.currentPrices[symbol];
      const changePercent = (Math.random() * 6 - 3) / 100; // -3% to +3%
      const newPrice = Math.max(1, currentPrice * (1 + changePercent));
      state.currentPrices[symbol] = parseFloat(newPrice.toFixed(2));
    });
    
    // Process pending orders
    processPendingOrders();
    
    // Update UI
    renderDashboard();
    updateCharts();
    
    // Save state
    saveStateToLocalStorage();
  }

  // Process Pending Orders
  function processPendingOrders() {
    state.orders.forEach(order => {
      if (order.status === 'pending') {
        const currentPrice = state.currentPrices[order.symbol];
        
        // Market orders execute immediately
        if (order.type === 'market') {
          executeMarketOrder(order);
        }
        // Limit orders execute when price reaches limit
        else if (order.type === 'limit') {
          if (order.side === 'buy' && currentPrice <= order.price) {
            executeLimitOrder(order);
          } else if (order.side === 'sell' && currentPrice >= order.price) {
            executeLimitOrder(order);
          }
        }
        // Stop orders execute when price reaches stop
        else if (order.type === 'stop') {
          if (order.side === 'buy' && currentPrice >= order.price) {
            executeStopOrder(order);
          } else if (order.side === 'sell' && currentPrice <= order.price) {
            executeStopOrder(order);
          }
        }
      }
    });
  }

  // Execute Market Order
  function executeMarketOrder(order) {
    const currentPrice = state.currentPrices[order.symbol];
    const totalAmount = order.quantity * currentPrice;
    const transactionFee = totalAmount * 0.0005; // 0.05% transaction fee
    
    if (order.side === 'buy') {
      if (state.walletBalance >= (totalAmount + transactionFee)) {
        state.walletBalance -= (totalAmount + transactionFee);
        addToPortfolio(order.symbol, order.quantity, currentPrice);
        order.status = 'executed';
        recordTransaction(order, currentPrice, transactionFee);
      } else {
        order.status = 'rejected';
      }
    } else if (order.side === 'sell') {
      if (state.portfolio[order.symbol] && state.portfolio[order.symbol].quantity >= order.quantity) {
        state.walletBalance += (totalAmount - transactionFee);
        removeFromPortfolio(order.symbol, order.quantity, currentPrice);
        order.status = 'executed';
        recordTransaction(order, currentPrice, transactionFee);
      } else {
        order.status = 'rejected';
      }
    }
  }

  // Execute Limit Order
  function executeLimitOrder(order) {
    const currentPrice = state.currentPrices[order.symbol];
    const totalAmount = order.quantity * order.price;
    const transactionFee = totalAmount * 0.0005; // 0.05% transaction fee
    
    if (order.side === 'buy') {
      if (state.walletBalance >= (totalAmount + transactionFee)) {
        state.walletBalance -= (totalAmount + transactionFee);
        addToPortfolio(order.symbol, order.quantity, order.price);
        order.status = 'executed';
        recordTransaction(order, order.price, transactionFee);
      } else {
        order.status = 'rejected';
      }
    } else if (order.side === 'sell') {
      if (state.portfolio[order.symbol] && state.portfolio[order.symbol].quantity >= order.quantity) {
        state.walletBalance += (totalAmount - transactionFee);
        removeFromPortfolio(order.symbol, order.quantity, order.price);
        order.status = 'executed';
        recordTransaction(order, order.price, transactionFee);
      } else {
        order.status = 'rejected';
      }
    }
  }

  // Execute Stop Order
  function executeStopOrder(order) {
    const currentPrice = state.currentPrices[order.symbol];
    const totalAmount = order.quantity * currentPrice;
    const transactionFee = totalAmount * 0.0005; // 0.05% transaction fee
    
    if (order.side === 'buy') {
      if (state.walletBalance >= (totalAmount + transactionFee)) {
        state.walletBalance -= (totalAmount + transactionFee);
        addToPortfolio(order.symbol, order.quantity, currentPrice);
        order.status = 'executed';
        recordTransaction(order, currentPrice, transactionFee);
      } else {
        order.status = 'rejected';
      }
    } else if (order.side === 'sell') {
      if (state.portfolio[order.symbol] && state.portfolio[order.symbol].quantity >= order.quantity) {
        state.walletBalance += (totalAmount - transactionFee);
        removeFromPortfolio(order.symbol, order.quantity, currentPrice);
        order.status = 'executed';
        recordTransaction(order, currentPrice, transactionFee);
      } else {
        order.status = 'rejected';
      }
    }
  }

  // Add to Portfolio
  function addToPortfolio(symbol, quantity, price) {
    if (!state.portfolio[symbol]) {
      state.portfolio[symbol] = {
        quantity: 0,
        averagePrice: 0,
        totalInvested: 0
      };
    }
    
    const stock = state.portfolio[symbol];
    const totalCost = quantity * price;
    
    stock.averagePrice = ((stock.quantity * stock.averagePrice) + totalCost) / (stock.quantity + quantity);
    stock.quantity += quantity;
    stock.totalInvested += totalCost;
  }

  // Remove from Portfolio
  function removeFromPortfolio(symbol, quantity, price) {
    if (!state.portfolio[symbol]) return;
    
    const stock = state.portfolio[symbol];
    
    if (stock.quantity <= quantity) {
      delete state.portfolio[symbol];
    } else {
      stock.quantity -= quantity;
    }
  }

  // Record Transaction
  function recordTransaction(order, price, fee) {
    state.transactions.unshift({
      id: generateId(),
      symbol: order.symbol,
      type: order.side,
      quantity: order.quantity,
      price: price,
      amount: order.quantity * price,
      fee: fee,
      date: new Date().toISOString(),
      status: 'completed'
    });
  }

  // Generate ID
  function generateId() {
    return Math.random().toString(36).substr(2, 9);
  }

  // Place Buy Order
  function placeBuyOrder() {
    const symbol = document.getElementById('buyStockSymbol').value.trim().toUpperCase();
    const quantity = parseInt(document.getElementById('buyQuantity').value);
    const orderType = document.querySelector('#dashboard .order-type-selector .order-type.active').getAttribute('data-type');
    
    // Validate inputs
    if (!symbol || !STOCK_DATABASE[symbol]) {
      alert('Please enter a valid stock symbol');
      return;
    }
    
    if (isNaN(quantity) || quantity <= 0) {
      alert('Please enter a valid quantity');
      return;
    }
    
    // Create order
    const order = {
      id: generateId(),
      symbol: symbol,
      side: 'buy',
      type: orderType,
      quantity: quantity,
      price: state.currentPrices[symbol],
      date: new Date().toISOString(),
      status: 'pending'
    };
    
    // Set limit/stop price if applicable
    if (orderType === 'limit') {
      const limitPrice = parseFloat(document.getElementById('limitPrice').value);
      if (isNaN(limitPrice) || limitPrice <= 0) {
        alert('Please enter a valid limit price');
        return;
      }
      order.price = limitPrice;
    } else if (orderType === 'stop') {
      const stopPrice = parseFloat(document.getElementById('stopPrice').value);
      if (isNaN(stopPrice) || stopPrice <= 0) {
        alert('Please enter a valid stop price');
        return;
      }
      order.price = stopPrice;
    }
    
    // Show confirmation
    showOrderConfirmation(order);
  }

  // Place Sell Order
  function placeSellOrder() {
    const symbol = document.getElementById('sellStockSymbol').value.trim().toUpperCase();
    const quantity = parseInt(document.getElementById('sellQuantity').value);
    const orderType = document.querySelector('#dashboard .order-type-selector .order-type.active').getAttribute('data-type');
    
    // Validate inputs
    if (!symbol || !STOCK_DATABASE[symbol]) {
      alert('Please enter a valid stock symbol');
      return;
    }
    
    if (isNaN(quantity) || quantity <= 0) {
      alert('Please enter a valid quantity');
      return;
    }
    
    // Check if we have enough shares to sell
    if (!state.portfolio[symbol] || state.portfolio[symbol].quantity < quantity) {
      alert(`You don't have enough shares of ${symbol} to sell`);
      return;
    }
    
    // Create order
    const order = {
      id: generateId(),
      symbol: symbol,
      side: 'sell',
      type: orderType,
      quantity: quantity,
      price: state.currentPrices[symbol],
      date: new Date().toISOString(),
      status: 'pending'
    };
    
    // Set limit/stop price if applicable
    if (orderType === 'limit') {
      const limitPrice = parseFloat(document.getElementById('sellLimitPrice').value);
      if (isNaN(limitPrice) || limitPrice <= 0) {
        alert('Please enter a valid limit price');
        return;
      }
      order.price = limitPrice;
    } else if (orderType === 'stop') {
      const stopPrice = parseFloat(document.getElementById('sellStopPrice').value);
      if (isNaN(stopPrice) || stopPrice <= 0) {
        alert('Please enter a valid stop price');
        return;
      }
      order.price = stopPrice;
    }
    
    // Show confirmation
    showOrderConfirmation(order);
  }

  // Show Order Confirmation
  function showOrderConfirmation(order) {
    document.getElementById('orderConfirmationTitle').textContent = `Confirm ${order.side.toUpperCase()} Order`;
    
    let details = `
      <p><strong>Symbol:</strong> ${order.symbol}</p>
      <p><strong>Type:</strong> ${order.type.toUpperCase()}</p>
      <p><strong>Quantity:</strong> ${order.quantity}</p>
      <p><strong>Price:</strong> ₹${order.price.toFixed(2)}</p>
      <p><strong>Estimated Amount:</strong> ₹${(order.quantity * order.price).toFixed(2)}</p>
    `;
    
    if (order.side === 'buy') {
      details += `<p><strong>Available Balance:</strong> ₹${state.walletBalance.toFixed(2)}</p>`;
    } else {
      details += `<p><strong>Shares Held:</strong> ${state.portfolio[order.symbol]?.quantity || 0}</p>`;
    }
    
    document.getElementById('orderConfirmationDetails').innerHTML = details;
    document.getElementById('confirmOrder').setAttribute('data-order', JSON.stringify(order));
    document.getElementById('orderConfirmationModal').style.display = 'flex';
  }

  // Hide Order Confirmation Modal
  function hideOrderConfirmationModal() {
    document.getElementById('orderConfirmationModal').style.display = 'none';
  }

  // Execute Order
  function executeOrder() {
    const order = JSON.parse(document.getElementById('confirmOrder').getAttribute('data-order'));
    
    // Add order to orders list
    state.orders.push(order);
    
    // For market orders, execute immediately
    if (order.type === 'market') {
      executeMarketOrder(order);
    }
    
    // Update UI
    renderDashboard();
    hideOrderConfirmationModal();
    saveStateToLocalStorage();
  }

  // Show Watchlist Modal
  function showWatchlistModal() {
    document.getElementById('watchlistModal').style.display = 'flex';
  }

  // Hide Watchlist Modal
  function hideWatchlistModal() {
    document.getElementById('watchlistModal').style.display = 'none';
    document.getElementById('watchlistStockSymbol').value = '';
  }

  // Add to Watchlist
  function addToWatchlist() {
    const symbol = document.getElementById('watchlistStockSymbol').value.trim().toUpperCase();
    
    if (!symbol || !STOCK_DATABASE[symbol]) {
      alert('Please enter a valid stock symbol');
      return;
    }
    
    if (state.watchlist.includes(symbol)) {
      alert('This stock is already in your watchlist');
      return;
    }
    
    state.watchlist.push(symbol);
    
    // Initialize price if not already set
    if (!state.currentPrices[symbol]) {
      state.currentPrices[symbol] = generateRandomPrice(100, 5000);
    }
    
    // Update UI
    renderDashboard();
    hideWatchlistModal();
    saveStateToLocalStorage();
  }

  // Toggle Indicator
  function toggleIndicator() {
    const indicator = this.getAttribute('data-indicator');
    
    if (this.classList.contains('active')) {
      this.classList.remove('active');
      state.indicators = state.indicators.filter(i => i !== indicator);
    } else {
      this.classList.add('active');
      state.indicators.push(indicator);
    }
    
    updateCharts();
  }

  // Render Dashboard
  function renderDashboard() {
    // Update wallet balance
    document.getElementById('walletBalance').textContent = state.walletBalance.toFixed(2);
    
    // Calculate portfolio value
    let portfolioValue = 0;
    Object.keys(state.portfolio).forEach(symbol => {
      portfolioValue += state.portfolio[symbol].quantity * state.currentPrices[symbol];
    });
    document.getElementById('portfolioValue').textContent = portfolioValue.toFixed(2);
    
    // Calculate P/L (simplified for demo)
    const totalPL = portfolioValue - Object.keys(state.portfolio).reduce((sum, symbol) => {
      return sum + (state.portfolio[symbol].quantity * state.portfolio[symbol].averagePrice);
    }, 0);
    
    const totalPLPercent = portfolioValue > 0 ? (totalPL / portfolioValue) * 100 : 0;
    
    document.getElementById('totalPL').textContent = totalPL.toFixed(2);
    document.getElementById('totalPLPercent').textContent = totalPLPercent.toFixed(2);
    
    // Daily P/L (simplified random for demo)
    const dailyPL = totalPL * (Math.random() * 0.1 - 0.05);
    const dailyPLPercent = dailyPL / portfolioValue * 100;
    
    document.getElementById('dailyPL').textContent = dailyPL.toFixed(2);
    document.getElementById('dailyPLPercent').textContent = dailyPLPercent.toFixed(2);
    
    // Update recent activity
    renderRecentActivity();
    
    // Update portfolio table
    renderPortfolioTable();
    
    // Update watchlist table
    renderWatchlistTable();
    
    // Update orders table
    renderOrdersTable();
  }

  // Render Recent Activity
  function renderRecentActivity() {
    const recentActivity = document.getElementById('recentActivity');
    recentActivity.innerHTML = '';
    
    const recentTransactions = state.transactions.slice(0, 5);
    
    if (recentTransactions.length === 0) {
      recentActivity.innerHTML = '<tr><td colspan="7" style="text-align: center;">No recent activity</td></tr>';
      return;
    }
    
    recentTransactions.forEach(transaction => {
      const row = document.createElement('tr');
      const date = new Date(transaction.date);
      
      row.innerHTML = `
        <td>${date.toLocaleDateString()}</td>
        <td>${transaction.symbol}</td>
        <td>${transaction.type.toUpperCase()}</td>
        <td>${transaction.quantity}</td>
        <td>₹${transaction.price.toFixed(2)}</td>
        <td>₹${transaction.amount.toFixed(2)}</td>
        <td>${transaction.status}</td>
      `;
      
      recentActivity.appendChild(row);
    });
  }

  // Render Portfolio Table
  function renderPortfolioTable() {
    const portfolioTable = document.getElementById('portfolioTable');
    portfolioTable.innerHTML = '';
    
    if (Object.keys(state.portfolio).length === 0) {
      portfolioTable.innerHTML = '<tr><td colspan="9" style="text-align: center;">Your portfolio is empty</td></tr>';
      return;
    }
    
    Object.keys(state.portfolio).forEach(symbol => {
      const stock = state.portfolio[symbol];
      const currentPrice = state.currentPrices[symbol] || stock.averagePrice;
      const marketValue = stock.quantity * currentPrice;
      const profitLoss = marketValue - (stock.quantity * stock.averagePrice);
      const profitLossPercent = (profitLoss / (stock.quantity * stock.averagePrice)) * 100;
      
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${symbol}</td>
        <td>${STOCK_DATABASE[symbol]?.name || 'N/A'}</td>
        <td>${stock.quantity}</td>
        <td>₹${stock.averagePrice.toFixed(2)}</td>
        <td>₹${currentPrice.toFixed(2)}</td>
        <td>₹${marketValue.toFixed(2)}</td>
        <td class="${profitLoss >= 0 ? 'text-success' : 'text-danger'}">₹${profitLoss.toFixed(2)}</td>
        <td class="${profitLoss >= 0 ? 'text-success' : 'text-danger'}">${profitLossPercent.toFixed(2)}%</td>
        <td>
          <button class="btn btn-sm btn-danger" onclick="sellStockFromPortfolio('${symbol}')">
            <i class="fas fa-money-bill-wave"></i> Sell
          </button>
        </td>
      `;
      
      portfolioTable.appendChild(row);
    });
  }

  // Sell Stock from Portfolio
  function sellStockFromPortfolio(symbol) {
    document.getElementById('sellStockSymbol').value = symbol;
    document.getElementById('sellQuantity').value = state.portfolio[symbol]?.quantity || '';
    document.querySelector('.nav-tab[data-tab="dashboard"]').click();
  }

  // Render Watchlist Table
  function renderWatchlistTable() {
    const watchlistTable = document.getElementById('watchlistTable');
    watchlistTable.innerHTML = '';
    
    if (state.watchlist.length === 0) {
      watchlistTable.innerHTML = '<tr><td colspan="8" style="text-align: center;">Your watchlist is empty</td></tr>';
      return;
    }
    
    state.watchlist.forEach(symbol => {
      const currentPrice = state.currentPrices[symbol] || 0;
      const prevPrice = (state.currentPrices[symbol] || 0) * (1 + (Math.random() * 0.1 - 0.05));
      const change = currentPrice - prevPrice;
      const changePercent = (change / prevPrice) * 100;
      
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${symbol}</td>
        <td>${STOCK_DATABASE[symbol]?.name || 'N/A'}</td>
        <td>₹${currentPrice.toFixed(2)}</td>
        <td class="${change >= 0 ? 'text-success' : 'text-danger'}">${change >= 0 ? '+' : ''}${change.toFixed(2)}</td>
        <td class="${change >= 0 ? 'text-success' : 'text-danger'}">${change >= 0 ? '+' : ''}${changePercent.toFixed(2)}%</td>
        <td>${Math.floor(Math.random() * 1000000).toLocaleString()}</td>
        <td>₹${(Math.random() * 100000).toFixed(2)} Cr</td>
        <td>
          <button class="btn btn-sm btn-success" onclick="buyStockFromWatchlist('${symbol}')">
            <i class="fas fa-shopping-cart"></i> Buy
          </button>
          <button class="btn btn-sm btn-danger" onclick="removeFromWatchlist('${symbol}')">
            <i class="fas fa-trash-alt"></i> Remove
          </button>
        </td>
      `;
      
      watchlistTable.appendChild(row);
    });
  }

  // Buy Stock from Watchlist
  function buyStockFromWatchlist(symbol) {
    document.getElementById('buyStockSymbol').value = symbol;
    document.querySelector('.nav-tab[data-tab="dashboard"]').click();
  }

  // Remove from Watchlist
  function removeFromWatchlist(symbol) {
    state.watchlist = state.watchlist.filter(s => s !== symbol);
    renderDashboard();
    saveStateToLocalStorage();
  }

  // Render Orders Table
  function renderOrdersTable() {
    const ordersTable = document.getElementById('ordersTable');
    ordersTable.innerHTML = '';
    
    if (state.orders.length === 0) {
      ordersTable.innerHTML = '<tr><td colspan="9" style="text-align: center;">No orders found</td></tr>';
      return;
    }
    
    state.orders.slice(0, 10).forEach(order => {
      const date = new Date(order.date);
      const row = document.createElement('tr');
      
      row.innerHTML = `
        <td>${order.id.substr(0, 8)}</td>
        <td>${date.toLocaleDateString()}</td>
        <td>${order.symbol}</td>
        <td>${order.type.toUpperCase()}</td>
        <td>${order.side.toUpperCase()}</td>
        <td>${order.quantity}</td>
        <td>₹${order.price.toFixed(2)}</td>
        <td class="${order.status === 'executed' ? 'text-success' : order.status === 'rejected' ? 'text-danger' : ''}">
          ${order.status.toUpperCase()}
        </td>
        <td>
          ${order.status === 'pending' ? `
            <button class="btn btn-sm btn-danger" onclick="cancelOrder('${order.id}')">
              <i class="fas fa-times"></i> Cancel
            </button>
          ` : ''}
        </td>
      `;
      
      ordersTable.appendChild(row);
    });
  }

  // Cancel Order
  function cancelOrder(orderId) {
    const orderIndex = state.orders.findIndex(o => o.id === orderId);
    if (orderIndex !== -1) {
      state.orders[orderIndex].status = 'cancelled';
      renderDashboard();
      saveStateToLocalStorage();
    }
  }

  // Initialize Charts
  function initializeCharts() {
    // Main Chart
    const mainChartCtx = document.getElementById('mainChart').getContext('2d');
    window.mainChart = new Chart(mainChartCtx, {
      type: state.chartType,
      data: {
        labels: Array(20).fill('').map((_, i) => i),
        datasets: [{
          label: 'Price',
          data: Array(20).fill(null),
          borderColor: '#007bff',
          borderWidth: 2,
          tension: 0.1,
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Time'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Price'
            }
          }
        }
      }
    });
    
    // Allocation Chart
    const allocationChartCtx = document.getElementById('allocationChart').getContext('2d');
    window.allocationChart = new Chart(allocationChartCtx, {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: []
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right'
          }
        }
      }
    });
    
    // Research Chart
    const researchChartCtx = document.getElementById('researchChart').getContext('2d');
    window.researchChart = new Chart(researchChartCtx, {
      type: 'line',
      data: {
        labels: Array(20).fill('').map((_, i) => i),
        datasets: [{
          label: 'Price',
          data: Array(20).fill(null),
          borderColor: '#007bff',
          borderWidth: 2,
          tension: 0.1,
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Time'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Price'
            }
          }
        }
      }
    });
    
    // Initial chart updates
    updateCharts();
  }

  // Update Charts
  function updateCharts() {
    // Update main chart with random data
    if (window.mainChart) {
      // Destroy the old chart
      window.mainChart.destroy();
      
      // Create new chart with updated type
      const mainChartCtx = document.getElementById('mainChart').getContext('2d');
      
      // Generate random data based on chart type
      let datasets = [];
      if (state.chartType === 'candlestick') {
        // For candlestick chart, we need OHLC data
        let lastPrice = 100;
        const ohlcData = [];
        
        for (let i = 0; i < 20; i++) {
          const open = lastPrice;
          const high = open * (1 + Math.random() * 0.02);
          const low = open * (1 - Math.random() * 0.02);
          const close = low + (high - low) * Math.random();
          
          ohlcData.push({
            x: i,
            o: open,
            h: high,
            l: low,
            c: close
          });
          
          lastPrice = close;
        }
        
        datasets = [{
          label: 'Price',
          data: ohlcData,
          color: {
            up: '#28a745',
            down: '#dc3545',
            unchanged: '#6c757d',
          }
        }];
      } else {
        // For line and bar charts
        const prices = [];
        let lastPrice = 100;
        
        for (let i = 0; i < 20; i++) {
          lastPrice = lastPrice * (1 + (Math.random() * 0.02 - 0.01));
          prices.push(lastPrice);
        }
        
        datasets = [{
          label: 'Price',
          data: prices,
          borderColor: '#007bff',
          backgroundColor: state.chartType === 'bar' ? '#007bff' : 'transparent',
          borderWidth: 2,
          tension: 0.1,
          fill: false
        }];
      }
      
      window.mainChart = new Chart(mainChartCtx, {
        type: state.chartType,
        data: {
          labels: Array(20).fill('').map((_, i) => i),
          datasets: datasets
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              mode: 'index',
              intersect: false
            }
          },
          scales: 
          {
            x: 
            {
              display: true,
              title: 
              {
                display: true,
                text: 'Time'
              }
            },
            y: 
            {
              display: true,
              title: 
              {
                display: true,
                text: 'Price'
              }
            }
          }
        }
      });
    }
    
    // Update allocation chart
    if (window.allocationChart) 
    {
      const symbols = Object.keys(state.portfolio);
      const labels = symbols.map(s => STOCK_DATABASE[s]?.name || s);
      const data = symbols.map(s => {
        return state.portfolio[s].quantity * (state.currentPrices[s] || state.portfolio[s].averagePrice);
      });
      const backgroundColors = symbols.map((_, i) => 
      {
        const hue = (i * 137.508) % 360; // Golden angle approximation
        return `hsl(${hue}, 70%, 60%)`;
      });
      
      window.allocationChart.data.labels = labels;
      window.allocationChart.data.datasets[0].data = data;
      window.allocationChart.data.datasets[0].backgroundColor = backgroundColors;
      window.allocationChart.update();
    }
  }

  // Update Research Chart
  function updateResearchChart() 
  {
    if (!state.activeStock || !window.researchChart) return;
    
    // Generate random data for the research chart
    const prices = [];
    let lastPrice = state.currentPrices[state.activeStock] || 100;
    
    for (let i = 0; i < 20; i++) 
    {
      lastPrice = lastPrice * (1 + (Math.random() * 0.02 - 0.01));
      prices.push(lastPrice);
    }
    
    window.researchChart.data.datasets[0].data = prices;
    window.researchChart.update();
  }