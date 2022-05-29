const nanoid = require('nanoid');

const TABLA = 'planificador';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dbprueba');
    }

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    function upsert(body) {
        const planificador = {
            name: body.name
        }

        if (body.id) {
            planificador.id = body.id;
        } else {
            planificador.id = nanoid();
        }

        return store.upsert(TABLA, planificador);
    }

    return {
        list,
        get,
        upsert,
    };
}