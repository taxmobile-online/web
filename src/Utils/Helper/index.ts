export const formatCurrency = (number: string | number) => {
  // Check if the input is a valid number
  let newNumber = number;
  if (typeof newNumber !== "number") {
    newNumber = parseInt(newNumber);
  }

  // Format the number as currency
  const formattedCurrency = newNumber.toLocaleString("en-US", {
    style: "currency",
    currency: "USD", // You can change the currency code as needed
    minimumFractionDigits: 2,
  });

  return formattedCurrency;
};
// // Example usage:
// const amount = 1234567.89;
// const formattedAmount = formatCurrency(amount);
// console.log(formattedAmount); // Output: $1,234,567.89

export const formatNumber = (number: string | number) => {
  let newNumber = number;
  if (typeof newNumber !== "number") {
    newNumber = parseInt(newNumber);
  }

  return newNumber.toLocaleString("en-US", {});
};

export const formatForSelectInput = (data: Array<{}>, key: any, name: any) => {
  return data.map((d: any) => ({ id: d[key], name: d[name] }));
};

export const wait = (callBack: () => void, time: number) => {
  setTimeout(() => callBack(), time);
};

// // Example usage:
// const amount = 1234567.89;
// const formattedAmount = formatCurrency(amount);
// console.log(formattedAmount); // Output: $1,234,567.89
