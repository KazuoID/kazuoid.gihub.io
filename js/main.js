function cc() {
    alert('hello')
}

// function inpo2() {
//     const usr_loc = new Location()
//     const usr = usr_loc.host.toString
//     alert(usr)
// }

// function inpo() {
//     const info = document.getElementById('info');
//     const info2 = document.getElementById('info2');
//     info.innerText = 'hello'
//     info2.innerText = 'hello'
//     alert(document.cookie)
//     document.write('hello kzz')
// }


function img_click() {
    window.open('https://github.com/KazuoID', '_blank')
}

const date = new Date()
const utc = date.getUTCFullYear()
const g = document.getElementById('date')
g.innerHTML = utc

function date_time() {
    const date = new Date()
    const s = date.getSeconds()
    const m = date.getMinutes()
    const h = date.getHours()
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()
}


// function hack() {
//     const geo = new Geolocation()

//     geo.getCurrentPosition(alert('success'),)
// }

