exports.getData = (req, res) => {
    // get data from database
    const data = {
        subject: 'IFT458', 
        grade: "A",
        date: '01/01/1990'
    }
    res.send(`Hello World! from student grade GET ${JSON.stringify(data)}`);
};
exports.postData = (req, res) => res.send("Hello World! from student grade POST");
exports.updateData = (req, res) => res.send("Hello World! from student grade PUT"); 
exports.deleteData = (req, res) => res.send("Hello World! from student grade DELETE");
