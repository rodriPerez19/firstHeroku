
import methodOverride from "method-override";
import cors from "cors";
import express from "express";
//
const app = express();
const log = console.log;

let port = process.env.PORT || 3000;

let users = ["bart", "lisa", "homero", "marge"]; 

app.use(cors());
app.use(methodOverride());

app.get("/users", (req, res)=>{
   res.send(users);
});

app.post("/user/create/:nombre", (req, res)=>{
   users.push(req.params.nombre);
   res.send("usuario creado");
});

app.delete("/user/delete/:nombre",(req,res)=>{
    let nombre= req.params.nombre;
    users=users.filter((elemento)=>elemento != nombre );
    res.send("usuario eliminado");
})
app.put("/actualizar/:nombre/:nuevo",(req,res)=>{
    let nombre= req.params.nombre;
    let nuevo= req.params.nuevo;
    users.forEach((element,i) => {
        if(element==nombre){
            users[i]=nuevo;
        }
    });
    res.send("usuario cambiado")
})
app.listen(port, ()=>{
    log("start server");
});