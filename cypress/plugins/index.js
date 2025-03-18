module.exports = on => {
    on("task", {
        dbQuery:(query)=> require('cypress-postgres-10v-compatibility')(
            query.query,
            query.connection)
    });
};