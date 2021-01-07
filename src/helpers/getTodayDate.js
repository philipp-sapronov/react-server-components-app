export default function() {
  const date = new Date();
  const dateNow = date.getDate() + 1;
  const monthNow = date.getMonth() + 1;
  const yearNow = date.getFullYear();

  return { dateNow, monthNow, yearNow };
}
