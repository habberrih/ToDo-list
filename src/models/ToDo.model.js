const toDoTask = require('./TodoTask.mongo');

async function saveToDb(data){
  const toDo = new toDoTask({
    content: data,
  });

  return await toDo.save();

};

async function getToDoData(){
  return await toDoTask.find({});
}

async function updateToDoById(toDoId, updateContent){
  return await toDoTask.findByIdAndUpdate(toDoId, {
    content: updateContent,
  });
}

async function deleteToDoById(toDoId){
  return await toDoTask.findByIdAndRemove(toDoId);
}

module.exports = {
  saveToDb,
  getToDoData,
  updateToDoById,
  deleteToDoById,
};
