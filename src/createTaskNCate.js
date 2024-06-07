function taskObj(title,priority,dueDate,description) {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.description = description;
}

function category(){
    const AllTask = [];
    const Critical = [];
    const Moderate = [];
    const Minimal = [];

    const addTask = (title,priority,dueDate,description) => {
        const task = new taskObj(title,priority,dueDate,description);
        if (priority.toUpperCase() === "CRITICAL"){
            Critical.push(task);
        } else if (priority.toUpperCase() === "MODERATE"){
            Moderate.push(task);
        } else if(priority.toUpperCase() === "MINIMAL") {
            Minimal.push(task);
        }

        AllTask.push(task);
    }

    const removeFromAll = (index) => {
        AllTask[index].pop()
    }

    const removeFromModerate = (index) => {
        Moderate[index].pop()
    }

    const removeFromCritical = (index) => {
        Critical[index].pop()
    }

    const removeFromMin = (index) => {
        Minimal[index].pop()
    }

    const getAllTasks = () => AllTask;

    return {
        addTask,
        getAllTasks,
        removeFromAll,
        removeFromCritical,
        removeFromMin,
        removeFromModerate
    }
}

function AllCategories(){
    const AllCategories = {};

    function addCategory(name){
        const Cate = new category();
        AllCategories[name] = Cate;
    }

    const getCategory = () => AllCategories;

    return {
        addCategory,
        getCategory
    }
}

// const Catego = AllCategories();
// Catego.addCategory("Home");
// Catego.addCategory("Home1");

// console.log(Catego.getCategory());

// Catego.getCategory().Home.addTask("hycjcgj","Critical","3414ucutt","ggiuyfyuvi");
// console.log(Catego.getCategory().Home.getAllTasks())


export default AllCategories