function info() {
    document.getElementById('info1').style.display='block'
    document.getElementById('info2').style.display='block'
    document.getElementById('info3').style.display='block'
    document.getElementById('info4').style.display='block'
    document.getElementById('info5').style.display='block'
    document.getElementById('button').style.display='none'
    document.getElementById('buttonhide').style.display='block'
}


function hide() {
    document.getElementById('info1').style.display='none'
    document.getElementById('info2').style.display='none'
    document.getElementById('info3').style.display='none'
    document.getElementById('info4').style.display='none'
    document.getElementById('info5').style.display='none'
    document.getElementById('button').innerHTML= 'Show all Info'
    document.getElementById('buttonhide').style.display='none'
    document.getElementById('button').style.display='block'
}