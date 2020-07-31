const db = require('../data/db-config.js');
const { json } = require('express');

module.exports= {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
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
        .select("schemes.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
        .where({"schemes.id": id})
        .orderBy("step_number")
}

function add(scheme) {
    return db('schemes').insert(scheme)
        .then(ids => {
            return findById(ids[0])
        })
}

function update(changes,id){
    return db("schemes")
        .where({id})
        .update(changes)
        .then(num => {
            if(num == 1){
                return changes
            } { return json({ errormessage: 'No update happened.'})
            }       
        })
}

function remove(id){
      return db("schemes").where({id}).del();
}

function addStep(scheme_id, step ){
    const newStep = {scheme_id, ...step}
    return db("steps")
        .insert(newStep)
        .then(step => {
            return db("steps").where({id:step})
        })
}