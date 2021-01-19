const listElement = document.querySelector('ul') // chama unlisted item 
const inputElement = document.querySelector('input') // chama conteúdo do input
const buttonElement = document.querySelector('button') // chama button

const tarefas = []

function mostraTarefas () {

    listElement.innerHTML = ''  //acessa o html do item da ul

    for (item of tarefas) { //loop for trabalhando com objeto array da const tarefas

        const itemList = document.createElement('li') //const itemList para criar um elemento list dentro da ul
        const itemText = document.createTextNode(item) //const itemText para criar o conteúdo de texto do elemento list criado dentro da ul
    
        itemList.setAttribute('class', 'mdl-list__item') //adicionar atributo ao itemList puxando a classe do mdl para estilizar elemento da lista

        const linkElement = document.createElement('a') // cria elemento a

        linkElement.setAttribute('class', 'material-icons') // adiciona atributo classe para receber o estilo do ícone para deletar        

        const linkText = document.createTextNode('delete') //colocando o texto específico "delete" puxa exatamente o ícone delete do material icons
        linkElement.appendChild(linkText) //liga o text node com o texto "delete" ao elemento a
    
    
        const pos = tarefas.indexOf(item) // cria uma const pos puxando com o indexOf a posição do item no array
        linkElement.setAttribute('onclick', `removeTarefa(${pos})`) //coloca um atributo no elemento a (que possui o botão delete) no clique ele ativa a função remove tarefa definida abaixo

        itemList.appendChild(itemText) // associa texto ao item list
        itemList.appendChild(linkElement) //associa item list criado ao elemento a para ter sempre o item list com o botão para excluir tarefa
    
        listElement.appendChild(itemList) // associa o itemList li ao elemento ul
    }
}



function addTarefa() {

    const tarefa = inputElement.value //cria nova const "tarefa" (diferente de tarefas criada acima) que recebe valor digitado no elemento input

    tarefas.push(tarefa) //adiciona valor recebido na const "tarefa" através do comando "push" para o array (agora sim) da const "tarefas"

    inputElement.value = '' //limpa o input
    mostraTarefas() 
}

buttonElement.setAttribute('onclick', 'addTarefa()') //adiciona atributo ao elemento button, ao clicar chama a função definida anteriormente add tarefa

function removeTarefa(pos) {

    tarefas.splice(pos, 1) //acessa a const tarefas (que tem o array recebido com os itemList criados) com a posição relativa ao item clicado vai apagar apenas esse item
    mostraTarefas() //chama o mostra tarefas
}

