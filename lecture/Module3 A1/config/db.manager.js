const sql = require('mssql');
const dbConnection = require('./db.config');
console.log(dbConnection);
async function getSalesProducts(){
    console.log('connecting to SQL... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Database connection was successful!');

    console.log('Getting data');
    let results = await dbContext.request()
                        .query(`
                        SELECT TOP(20)
                            productID, 
                            name, 
                            productNumber, 
                            color, 
                            listPrice
                        FROM 
                            salesLT.product
                        `);
    console.log(`Returned SQL results`);
    return results;
}

async function getSalesCustomers(){
    console.log('connecting to SQL... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Database connection was successful!');

    console.log('Getting Data');
    let results = await dbContext.request()
                        .query(`
                        SELECT TOP(20)
                            CustomerID, 
                            Title, 
                            FirstName, 
                            LastName, 
                            CompanyName, 
                            EmailAddress, 
                            Phone
                        FROM salesLT.customer
                        `);
    return results;
}

module.exports = {getSalesProducts :getSalesProducts, getSalesCustomers :getSalesCustomers};
