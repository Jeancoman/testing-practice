function analyzeArray(array) {
    const length = array.length;
    const sum = array.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue
    });
    const average = sum / length;
    const min = Math.min(...array);
    const max = Math.max(...array);

    return {
        average: average,
        min: min,
        max: max,
        length: length
      };
}

export { analyzeArray }