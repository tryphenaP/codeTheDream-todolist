export function isValidTodoTitle(title) {
  return  typeof title === "string" && title.trim() !== '';
}