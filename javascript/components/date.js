function formatDate(date) {
  const dateNew = new Date(date);
  const options = { weekday: "long", month: "long", day: "numeric", hour: "numeric", minute: "numeric", hour12: true };
  const formattedDate = dateNew.toLocaleDateString('en-US', options);

  return formattedDate;
}

export { formatDate }