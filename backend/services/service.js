import events from '../models/Events.js';
/**
 * Creates new events task
 * @param {*} events 
 * @returns {Promise<event>}
 */

// Exported save,search,get,update and remove
export const save = (newevents) => {
    const events = new events(newevents);
    return events.save();

}
// Search operation
export const search = (query) => {
    const params = {...query};
    return events.find(params).exec();
}

// search using id
export const get = (id) => {
    const  events = events.findById(id).exec();
    return events;
}

//update function
export const update = (updatedevents) => {
    updatedevents.lastModifiedDate = new Date();
    const events = events.findByIdAndUpdate(updatedevents.id,updatedevents, {new: true}).exec();
    return events;
}

//delete function
export const remove = (id) => {
    const events = events.findByIdAndDelete(id).exec();
    return events;
}
