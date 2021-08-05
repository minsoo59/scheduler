import "./db.js";
import "./models/User.js";
import app from "./server.js";

const port = 7700;

const handleListening = () =>
  console.log(`✅ Sever Listening on port http://localhost:${port} 🐱‍🏍`);

app.listen(port, handleListening);
