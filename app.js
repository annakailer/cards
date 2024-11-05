function criarCartao(categoria, pergunta, resposta) {
   let cartao = document.createElement('article')
   cartao.className = 'cartao'
   cartao.innerHTML = `
   <div class="cartao_conteudo">
                    <h3>Biologia</h3>
                    <div class="cartao_conteudo_pergunta">
                        <p>O que é genética? </p>
                    </div>

                    <div class="cartao_conteudo_resposta">
                        <p>é o ramo da Biologia que estuda a hereditariedade, os genes e como as características são
                            transmitidas de uma geração para outra. </p>
                    </div>

                </div>
   `
}