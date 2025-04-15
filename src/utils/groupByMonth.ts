export default function groupDatesByMonth(dates: Date[]) {
  const result: { label: string; startIndex: number; length: number }[] = [];

  if (dates.length === 0) return result;

  let currentLabel = dates[0].toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });
  let startIndex = 0;

  for (let i = 1; i < dates.length; i++) {
    const date = dates[i];
    const label = date.toLocaleDateString("en-GB", {
      month: "long",
      year: "numeric",
    });

    if (label !== currentLabel) {
      result.push({
        label: currentLabel,
        startIndex,
        length: i - startIndex,
      });
      currentLabel = label;
      startIndex = i;
    }
  }

  // Push the last group
  result.push({
    label: currentLabel,
    startIndex,
    length: dates.length - startIndex,
  });

  return result;
}
