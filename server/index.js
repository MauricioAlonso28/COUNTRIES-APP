const getCountriesApi = require('./src/utils/getCountriesApi.js')
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    getCountriesApi()
})
}).catch(error => console.error(error))
