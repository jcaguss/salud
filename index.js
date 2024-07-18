import express from "express";
// import cors from "cors";

// const whiteList = ["http://localhost:7070"];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whiteList.indexOf(origin) != -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Acceso denegado"));
//     }
//   },
// };
const app = express();
const PORT = 7070;

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});

// ---- Middlewares ----
// app.use(cors(corsOptions));
//----------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
