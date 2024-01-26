document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');
  
    function showLoader() {
      loader.classList.add('loader_active');
    }
  
    function hideLoader() {
      loader.classList.remove('loader_active');
    }
  
    function updateItems(currencyData) {
      itemsContainer.innerHTML = ''; 
  
      for (const [currencyCode, currencyInfo] of Object.entries(currencyData.Valute)) {
        const item = document.createElement('div');
        item.classList.add('item');
  
        item.innerHTML = `
          <div class="item__code">
            ${currencyInfo.CharCode}
          </div>
          <div class="item__value">
            ${currencyInfo.Value}
          </div>
          <div class="item__currency">
            руб.
          </div>
        `;
  
        itemsContainer.appendChild(item);
      }
    }

    function fetchExchangeRate() {
      showLoader();
  
      fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
        .then(response => response.json())
        .then(data => {
          hideLoader();
          if (data && data.response && data.response.Valute) {
            updateItems(data.response);
          }
        })
        .catch(error => {
          console.error('Error fetching exchange rate:', error);
          hideLoader();
        });
    }
  
    fetchExchangeRate();
  });
  