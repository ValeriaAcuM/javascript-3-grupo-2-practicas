function formatPrice(price) {
  return price === 0 ? "Free" : price;
}

export { formatPrice }