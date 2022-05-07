const mongoose = require("mongoose");

const dbConnect = () => {


  const url = `mongodb+srv://rohaanoa01:W5yIv6LPDuZjfoBh@mern-blog.ihnqf.mongodb.net/mytestdb?retryWrites=true&w=majority`;
  
  const connectionParams={
      useNewUrlParser: true,
      useUnifiedTopology: true 
  }
  mongoose.connect(url,connectionParams)
      .then( () => {
          console.log('Connected to database ')
      })
      .catch( (err) => {
          console.error(`Error connecting to the database. \n${err}`);
      })
};

module.exports = dbConnect;
//3Q4s0DuTkwlKwWYX

