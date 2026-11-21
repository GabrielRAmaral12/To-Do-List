const btnTarefa = document.querySelector('.btn-tarefa');

btnTarefa.addEventListener('click', () =>{
    const inputValue = document.querySelector('.input-tarefa').value.trim();
        if(inputValue === ''){
            return;
        }

    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    
    li.textContent = inputValue;

    const btnClose = document.createElement('span');
    btnClose.textContent = '❌';

    btnClose.addEventListener('click', ()=>{
        li.remove();
    })

    li.appendChild(btnClose);
    ul.appendChild(li);

})
