const path =require('path');

const http= require('http');

const express=require('express');
const socketio=require('socket.io');

const app = express();
const server=http.createServer(app);
const io = socketio(server); 

app.use(express.static(path.join(__dirname,'public')));

io.on('connection',socket=>{
    console.log('new con..');
    socket.emit('message', 'Welcome to ChatOn');  
});

const PORT =3000 || process.env.PORT;


app.listen (PORT, ()=> console.log('server running on port ${PORT}'));