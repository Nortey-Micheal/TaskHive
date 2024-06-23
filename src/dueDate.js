import * as dateFns from "date-fns"
const today = new Date();
const formatToday = dateFns.format(today,"E dd MMM yyyy");
// console.log(formatToday)

export default formatToday