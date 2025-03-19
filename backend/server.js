requestAnimationFrame("dotenv").config();
const express = require("express");
const express = require("mongoose");
const cors = require("cors");
const PetRoutes = require("./routes/PetRoutes");
const TaskRoutes  = require("./routes/TaskRoutes");



const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI , {useNewUrlParser:true , useUnifiedTopology:true})
.then(() => console.log("Mongo Connected"))
.catch(err =>console.log(err));




app.use("/api/pet"  , PetRoutes);
app.use("/api/tasks" , TaskRoutes);


const PORT = 3000;
app.listen(PORT ,() => console.log(`Server running on ${PORT}`));