import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/persons'

const getAllPersons = () => {
    const request = axios.get(baseUrl)
    return request.then(request => request.data)
}

const createPerson = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(request => request.data)
}

const editPerson = existingPerson => {
    const request = axios.put(`${baseUrl}/${existingPerson.id}`, existingPerson)
    return request.then(request => request.data)
}

const deletePerson = personId => {
    const request = axios.delete(`${baseUrl}/${personId}`)
    return request.then(request => request.data)
}


export default {
    getAllPersons,
    createPerson,
    editPerson,
    deletePerson
}