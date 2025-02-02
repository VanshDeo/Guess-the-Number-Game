function ID(id) {
  return document.getElementById(id);
}

let random = Math.round(Math.random() * 10) + 1;
ID("enter").addEventListener("click", function () {
  const input = ID("guess").value;
  const hints = ID("hints");
  if (isNaN(input) || input === "") {
    hints.innerHTML = "You are allowed to enter only numbers!";
    return;
  }
  if (input >= 1 && input <= 20) {
    if (input == random) {
      hints.innerHTML =
        "Congratulations! You have guessed the number correctly";
      const game = document.querySelector(".game");
      game.classList.add("hidden");
    }
    if (input > random) {
      hints.innerHTML = "You have guessed higher";
    }
    if (input < random) {
      hints.innerHTML = "You have guessed lower";
    }
  } else {
    hints.innerHTML = "Please enter the number within range from 1 to 20";
  }
});
