const correctAnswers = ["B", "B", "A", "B"];
const form = document.querySelector(".quiz-form");
const resultado = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q1.value,
    form.q3.value,
    form.q4.value,
  ];

  // corrigindo as respostas

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  scrollTo(0, 0);

  resultado.classList.remove("d-none");

  let i = 0;
  const contador = setInterval(() => {
    resultado.querySelector("span").textContent = `${i}%`;

    if (i === score) {
      clearInterval(contador);
    } else {
      i++;
    }
  }, 10);
});
