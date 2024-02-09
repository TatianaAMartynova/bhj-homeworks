document.addEventListener('DOMContentLoaded', function () {
  const loader = document.getElementById('loader');
  const itemsContainer = document.getElementById('items');

  function showLoader() {
      loader.classList.add('loader_active');
  }

  function hideLoader() {
      loader.remove();
  }

  async function fetchCurrencyRates() {
      try {
          showLoader();
          const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
          const data = await response.json();
          handleCurrencyRates(data.response.Valute);
      } catch (error) {
          console.error('Error fetching currency rates:', error);
      } finally {
          hideLoader();
      }
  }

  function handleCurrencyRates(currencyRates) {
      for (const [currencyCode, currency] of Object.entries(currencyRates)) {
          addItemToContainer(currencyCode, currency.Value);
      }
  }

  function addItemToContainer(code, value) {
      const newItem = document.createElement('div');
      newItem.classList.add('item');

      newItem.innerHTML = `
          <div class="item__code">${code}</div>
          <div class="item__value">${value}</div>
          <div class="item__currency">руб.</div>
      `;

      itemsContainer.appendChild(newItem);
  }

  fetchCurrencyRates();
});
