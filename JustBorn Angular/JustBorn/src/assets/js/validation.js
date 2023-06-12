// setInterval(updateDate, 1000);

// function updateDate(){
//     let d = new Date();
//     let time = d.toLocaleString('en-US',{
//         hour:"numeric", minute:"numeric", 
//         second:"numeric", hour12:true
//         }
//     );
//     const dayNames = [
//         'Sunday', 'Monday',
//         'Tuesday', 'Wednesday', 
//         'Thursday', 'Friday', 'Saturday'
//     ];
//     const monthNames = [
//         "January", "February", 
//         "March", "April", "May", 
//         "June", "July", "August", 
//         "September", "October", 
//         "November", "December"
//     ];
//     document.getElementById('clock').innerHTML = time;
//     document.getElementById('date').innerHTML = 
//     `${dayNames[d.getDay()]}, 
//     ${monthNames[d.getMonth()]} 
//     ${d.getDate()}, 
//     ${d.getFullYear()}`;
// }