export function formatAmount(value, currency) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new Error('Amount must be a valid number');
  }

  if (currency !== 'EUR' && currency !== 'USD') {
    throw new Error(`Unsupported currency: ${currency}`);
  }

  const fixedValue = Math.abs(value).toFixed(2);
  const [integerPart, decimalPart] = fixedValue.split('.');

  const groupedInteger = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    currency === 'EUR' ? ' ' : ',',
  );

  const sign = value < 0 ? '-' : '';

  if (currency === 'EUR') {
    return `${sign}€${groupedInteger},${decimalPart}`;
  }

  return `${sign}$${groupedInteger}.${decimalPart}`;
}
