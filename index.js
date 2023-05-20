const express = require('express');
const app = express();
const fs = require('fs')
const PORT = 3000;

app.listen(PORT, console.log(`servidor encendido en el puerto ${PORT}`))
/* MIDDLEWARE */
app.use(express.json())
/* en este get levantaremos le enviaremos como respuesta nuestro archivo index.html al cliente */
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
    })
/* Recibe los datos correspondientes a una canción y la agrega al
repertorio.*/
app.post("/canciones", (req, res) =>{
    const cancion = req.body;
    const canciones = JSON.parse(fs.readFileSync("canciones.json"));
    canciones.push(cancion);
    fs.writeFileSync("canciones.json", JSON.stringify(canciones))
    res.send("producto agregado con exito")
})

/*  Devuelve un JSON con las canciones registradas en el repertorio */
app.get("/canciones", (req, res)=>{
    const canciones = JSON.parse(fs.readFileSync("canciones.json"));
    res.send(canciones);
})
/* 

/*  Recibe los datos de una canción que se desea editar y la
actualiza manipulando el JSON local */
app.put("/canciones/:id", (req, res) =>{
    const {id} = req.params;
    const cancion = req.body;
    const canciones = JSON.parse(fs.readFileSync("canciones.json"));
    const index = canciones.findIndex(a => a.id == id)
    canciones[index] = cancion
    fs.writeFileSync("canciones.json",JSON.stringify(canciones));
    res.send("cancion modificada con exito");
})

/* Recibe por queryString el id de una canción y la elimina del
repertorio.
 */
app.delete("/canciones/:id", (req, res)=>{
    const {id} = req.params;
    const canciones = JSON.parse(fs.readFileSync("canciones.json"));
    const index = canciones.findIndex(a => a.id == id);
    canciones.splice(index,1);
    fs.writeFileSync("canciones.json",JSON.stringify(canciones));
    res.send("cancion eliminada con exito");
}) 