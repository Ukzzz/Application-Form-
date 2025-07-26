const mongoose = require('mongoose')

const connectDB = async () => {
  try{
    const conn = await mongoose.connect('mongodb://localhost:27017/form',{
      useNewUrlParser:true,
      useUnifiedTopology:true,
    });
    console.log('MongoDB connected Successfully')
  }catch(err){
    console.log('MogoDB connection Error', err.message)
    process.exit(1)
  }
};

module.exports = connectDB