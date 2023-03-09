## JS - B - 09 - Introdução ao DOM

### Extensões citadas na aula:
* Live server 
* Node Exec
### Oq é DOM
*D*ocument
*O*bject
*M*odel

* Deve ser usado dentro do navegador!
#### Árvore DOM
Começa da raiz -> window
Passa para: 
<ul>
        <li>Location: local (url)</li>
        <li>Document: HTML
            <ul>
                <li>Head
                    <ul>
                        <li>Meta</li>
                        <li>Title</li>
                    </ul>
                </li>
                <li>Body
                    <ul>
                        <li>h1</li>
                        <li>p</li>
                        <li>p
                            <ul>
                                <li>strong</li>
                            </ul>
                        </li>
                        <li>div</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>History: de onde veio e vai</li>
</ul>

---
* Quem tá em baixo é filho
* Quem tá em cima é pai <br>
*apenas alguns objetos foram destacados, porém tem muito mais...*
*esse arvore foi baseda no ex005*
#### Selecionando elementos:
Podemos selecionar dos seguintes modos:
* por Marca
    *   ```` 
        window.document.getElementsByTagName('p')[0];
        ````
        * getElementsByTagName -> pega tds os elementos por tag 
        * ('[elemento]') -> qual a tag
        * [] -> numero da tag (0,1,2,...)
* por ID
    *   ````
        getElementsById()
        ````
* por Nome
    *   ````
        getElementsByName()
        ````
* por Classe
    *   ```` 
        window.document.getElementsByClassName()
        ````
* por Seletor (+ recomendado)
    *   ````
        window.document.querySelector('[tag][# || .][id]')
        ````

### Comandos da aula:

 * Escrevendo
    ```
        window.document.write("Ola mundo!")
    ```
    * window = janela 
    * document = pagina
    * write = escreva
* Vendo set de carc:
    ```` 
        window.document.write(window.document.characterSet)
    ````
    * characterSet = Mostra a codificação
* Qual navegador:
    ``` 
        window.document.write(window.navigator.appName)
    ```
    * navigator = navegador
    * appName = nome
* Monstrando a URL:
    ``` 
        window.document.write(window.document.URL)
    ```
    * URL = link acessado naquele momento