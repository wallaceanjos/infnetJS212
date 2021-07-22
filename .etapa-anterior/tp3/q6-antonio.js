(function () {


  function telaDeslogado($ancora) {
    let login = document.createElement('h2')
    let n_logado = document.createElement('div')
    let userinput = document.createElement('input')
    let passwordinput = document.createElement('input')
    let logar_user = document.createElement('button')
    let novo_user = document.createElement('button')
    let mensagens = document.createElement('p')

    login.innerText = 'Login'
    novo_user.innerText = 'Novo Usuario'
    logar_user.innerText = 'Login'

    n_logado.setAttribute('id', 'nao_logado')
    n_logado.setAttribute('display', 'inline-block')
    userinput.setAttribute('id', 'username')
    userinput.setAttribute('type', 'text')
    passwordinput.setAttribute('id', 'password')
    passwordinput.setAttribute('type', 'password')

    n_logado.append(login)
    n_logado.appendChild(userinput)
    n_logado.appendChild(passwordinput)
    n_logado.appendChild(logar_user)
    n_logado.appendChild(novo_user)
    n_logado.append(mensagens)
    $ancora.appendChild(n_logado)

    logar_user.onclick = (e) => {

      let username = userinput.value
      let password = passwordinput.value
      let users = []
      if (window.localStorage.getItem('users')) {
        users = JSON.parse(window.localStorage.getItem('users'))
      }

      for (let user of users) {
        if (user.username === username && user.password === password) {
          window.localStorage.setItem('login', username)
          break
        }
      }
      atualizar($ancora)
    }
    novo_user.onclick = (e) => {
      let username = userinput.value
      let password = passwordinput.value

      let users = window.localStorage.getItem('users')
      if (users) {
        users = JSON.parse(users)
      } else {
        users = []
      }

      for (let u of users) {
        if (u.username === username) {
          mensagens.innerText = 'Nome de Usuario já existente!'
          return
        }
      }

      users.push({username: username, password: password})
      window.localStorage.setItem('users', JSON.stringify(users))
      window.localStorage.setItem('login', username)

      atualizar($ancora)
    }

    return $ancora
  }

  function telaLogado($ancora) {
    let logado = document.createElement('div')
    let p_logado = document.createElement('p')
    let deslogar_user = document.createElement('button')

    p_logado.innerText = 'Logado'
    deslogar_user.innerText = 'Deslogar'

    logado.appendChild(p_logado)
    logado.appendChild(deslogar_user)
    $ancora.appendChild(logado)

    deslogar_user.onclick = (e) => {
      window.localStorage.removeItem('login')
      atualizar($ancora)
    }

    return $ancora
  }

  function isLogged() {
    return window.localStorage.getItem('login')
  }

  function atualizar($ancora) {
    limpar($ancora)
    if (isLogged() === null) {
      telaDeslogado($ancora)
    } else {
      telaLogado($ancora)
    }
  }

  let $q6 = document.querySelector('#q6')
  atualizar($q6)
})()


