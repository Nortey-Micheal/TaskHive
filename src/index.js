import "./index.css";
import AllCategories from "./createTaskNCate.js";
import formatToday from "./dueDate.js";

const Catego = AllCategories();
Catego.addCategory("Home");
Catego.addCategory("Home1");

console.log(Catego.getCategory())

Catego.getCategory().Home.addTask("hycjcgj","Critical","3414ucutt","ggiuyfyuvi");
Catego.getCategory().Home.addTask("hycjcgj","Critical","3414ucutt","32fyuvi");
Catego.getCategory().Home1.addTask("jcgj","Critical","3414ucutt","32fyuvi");
console.log(Catego.getCategory().Home.getAllTasks())
console.log(Catego.getCategory().Home1.getAllTasks())

console.log(formatToday)

