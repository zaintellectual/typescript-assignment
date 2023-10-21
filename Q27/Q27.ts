const alienColr: string = "yellow";

if (alienColr === "green") {
  console.log("Player earned 5 points for shooting the green alien.");
} else if (alienColr === "yellow") {
  console.log("Player earned 10 points for shooting the yellow alien.");
} else if (alienColr === "red") {
  console.log("Player earned 15 points for shooting the red alien.");
} else {
  console.log("Unknown alien color. No points earned.");
}