function toggle(info) {
    const collapse = document.querySelectorAll(info.collapse);
    const arr = collapse.forEach( row =>{
        const parentCollapse = row.parentElement;

        const attr = row.getAttribute('target');
        const clickTarget =[document.querySelector(attr)];
    
        clickTarget.forEach(col =>{
            col.onclick = ()=>{
                row.classList.toggle('un__collapse');
            }
        })
        console.log( clickTarget);

    }) 
    
}

toggle(
    { 
         collapse : '.collapse'
      }
  )
