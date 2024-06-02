const sortByDate = (array) => {
  const compareDate = (a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateB - dateA;
  };

  return array.sort((a, b) => compareDate(a.startDate, b.startDate));
}

const formateDateRange = (startDate, endDate) => {
  const options = { month: 'long', year: 'numeric' };
  const startFinal = new Intl.DateTimeFormat('en-US', options).format(new Date(startDate));
  const endFinal = new Intl.DateTimeFormat('en-US', options).format(new Date(endDate));
  const finalDate = `${startFinal}—${endFinal}`;

  return finalDate;
}

export default {
  sortByDate,
  formateDateRange,
};
