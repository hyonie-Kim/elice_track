function formatNumber(n) {
  if (isNaN(n)) return "0";
  return Number(n).toFixed(2);
}

// toFixed 소수점 2자리까지 고정된 숫자를 반환
console.log(formatNumber("12.345")); // 12.35
