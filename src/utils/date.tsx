export const DateToString = (startDate: Date, endDate: Date): string => {
  const startDateYear = startDate.getFullYear();
  const startDateMonth = startDate.getMonth() + 1;
  const startDateDate = startDate.getDate();

  const endDateYear = endDate.getFullYear();
  const endDateMonth = endDate.getMonth();
  const endDateDate = endDate.getDate();

  return `${startDateYear}.${CreateTwoDigitNumber(
    startDateMonth
  )}.${CreateTwoDigitNumber(startDateDate)}-${CreateTwoDigitNumber(
    endDateDate
  )}`;
};

export const CreateTwoDigitNumber = (number: number): string => {
  let result = "";

  if ((number + "").length === 1) result = "0" + number;
  else result = number + "";

  return result;
};
