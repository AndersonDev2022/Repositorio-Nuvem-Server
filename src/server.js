
import app from './app';

const port = process.env.PORT || 3001;

app.listen(port,'0.0.0.0')

// app.listen(3001,function(){
//     console.log('🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢');
//     console.log('🟢🟢🟢🟢    SERVER IS RUNNING ON PORT 3001    🟢🟢🟢🟢');
//     console.log('🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢');
// })