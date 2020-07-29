const db = require('../data/db-config.js');

module.exports= {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find(){
    return db("schemes")
}

function findById(id){
    return db("schemes").where({id})
}

function findSteps(id){
     return db('steps')
        .join("schemes", "steps.scheme_id", "=", "schemes.id")
        .select("schemes.scheme_name", "steps.step_number", "steps.instructions")
        .where({"schemes.id": id})
        .orderBy("step_number")
}

function add(scheme){
     return db("schemes")
        .insert(scheme)
        .then(num =>{
            db.findById(num) })
}

function update(changes,id){
    return db("schemes")
        .where({id})
        .update(changes)
}

function remove(id){
      return db("schemes").where({id})
  }