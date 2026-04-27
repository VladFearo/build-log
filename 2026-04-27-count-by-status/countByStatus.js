function sortCounter(counter) {
  const sortedCount = Object.entries(counter).sort((a, b) => b[1] - a[1]);

  return Object.fromEntries(sortedCount);
}

function countByStatus(tasks) {
  const count = {};

  for (const task of tasks) {
    if (typeof task.status === "string" && task.status.trim() !== "") {
      const status = task.status.trim().toLowerCase();
      count[status] = (count[status] || 0) + 1;
    }
  }
  return sortCounter(count);
}

const tasks = [
  { title: "Gym", status: "done" },
  { title: "Read", status: "done" },
  { title: "Code", status: "pending" },
  { title: "Clean room", status: "skipped" },
  { title: "Meditate", status: "pending" },
];

console.log(countByStatus(tasks));

const tasks2 = [
  { title: "Gym", status: "done" },
  { title: "Read", status: "done" },
  { title: "Broken task" },
  { title: "Empty", status: "" },
  { title: "Null", status: null },
  { title: "Code", status: "pending" },
];

console.log(countByStatus(tasks2));
