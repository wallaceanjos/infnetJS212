

(() => {
    let $containerq2 = document.getElementById("q2")
    let $tituloq2 = document.createElement("h2")
    $tituloq2.textContent = "Questão 2"
    let $fatorial = document.createElement("input")
    $fatorial.type = "number"
    let $labelFatorial = document.createElement("label")
    $labelFatorial.textContent = "Calcular fatorial de:"
    let $buttonq2 = document.createElement("button")
    let $breakq2 = document.createElement("br")
    $buttonq2.textContent = "Calcular"
    let $resultadoq2 = document.createElement("p")

    $containerq2.append($tituloq2)
    $containerq2.append($labelFatorial)
    $containerq2.append($fatorial)
    $containerq2.append($breakq2)
    $containerq2.append($buttonq2)
    $containerq2.append($resultadoq2)


    $buttonq2.onclick = () => {
        let inicio = new Date()
        const valorInicial = parseInt($fatorial.value)
        let contador = 1
        while (parseInt($fatorial.value) > 0){
            contador *= parseInt($fatorial.value)
            $fatorial.value -= 1
        }
        let final = new Date()
        let tempo = final - inicio
        $resultadoq2.textContent = `${valorInicial}! = ${contador} (${tempo}ms)`
    }
})()
