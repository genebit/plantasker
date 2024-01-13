export function getTasksFromLocalStorage() {
  const keys = Object.keys(localStorage)
  const tasksArray = keys.map((key) => {
    const taskString = localStorage.getItem(key)
    // Check if taskString is not null before parsing
    return taskString !== null ? JSON.parse(taskString) : null
  })
  // Filter out null values from the array
  return tasksArray.filter((task) => task !== null)
}
