function slowIncreaseSalary(base, increase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (increase >= 0) return resolve(base + increase);
      return reject("Error, increase cannot be a negative number.");
    }, 3000);
  });
}

// Bài toán tăng lương
async function increaseSalary(base, increase) {
  const newSalary = await slowIncreaseSalary(base, increase);

  return newSalary;
}

increaseSalary(1000, -100)
  .then((newSalary) => {
    console.log(`New salary: ${newSalary}`);
  })
  .catch((err) => {
    console.log("Error Messeage:", err);
  });
