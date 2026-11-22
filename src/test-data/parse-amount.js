export function parseAmount(text) {
  if (typeof text !== 'string') {
    throw new Error('Amount must be a string');
  }

  const value = text.trim();

  // European format: €1 234,56
  if (value.startsWith('€')) {
    const number = value.slice(1).trim();

    if (!/^-?(?:\d+|\d{1,3}(?:[ .]\d{3})+),\d{2}$/.test(number)) {
      throw new Error(`Invalid European amount: ${text}`);
    }

    return Number(number.replace(/[ .]/g, '').replace(',', '.'));
  }

  // US format: $1,234.56
  if (value.startsWith('$')) {
    const number = value.slice(1).trim();

    if (!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)\.\d{2}$/.test(number)) {
      throw new Error(`Invalid US amount: ${text}`);
    }

    return Number(number.replace(/,/g, ''));
  }

  throw new Error(`Unsupported currency format: ${text}`);
}
