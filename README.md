# Desafio de Programação Elo7

Como parte do processo seletivo do Elo7, foi desenvolvida uma landing page da empresa. Essa landing page possui uma tela principal contendo um resumo sobre o Elo7, como é trabalhar lá, depoimentos e  cultura, além de conter uma listagem das vagas em aberto que são obtidas via requisição API.

O site pode ser acessado através do link: 
**https://desafio-elo7.netlify.app/**

## Requisitos:

| Abrangência                | Escolhas             
| :------------------------: | ---------------------         
| Linguagem                  | Javascript       
| Estilo                     | Css                    
| Requisição                 | [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) 
| Requisição                 | Tratar dados obtidos pelo mock 
| Framework                  | [Svelte](https://svelte.dev/)
| Layout                 | Layout mais próximo possível do layout fornecido



## Extras:

* Uso do svelte-scrolling:
Ao clicar em algum link que realizará scroll dentro da página os elementos deram um scroll "smooth" com animação. Como por exemplo, ao clicar no link "Vagas em aberto".

* Responsividade: 
O site é responsivo e consegue se adaptar para qualquer tamanho de tela, seja qual for, não ultrapassando a largura máxima da tela (mesmo em dispositivos pequenos como o galaxy fold) e sempre redistribuindo os conteúdos para melhorar a apresentação de acordo com o tamanho do dispositivo.

* Menu: 
Para complementar o layout do site optei por implementar um menu contendo os principais tópicos da landing page.

* Footer: 
Para complementar o layout do site optei por implementar um footer contendo as redes sociais da empresa, termos de uso e política de privacidade.

* Tratamento para vagas vazias e para erro de requisição na API: 
Caso a requisição via API retorne um vetor vazio, o que indica que não há vagas disponíveis aparecerá para o usuário no lugar das vagas a mensagem "Não temos vagas disponíveis no momento, mas fique de olho nas nossas redes
      sociais!". E caso a requisição via API falhe por algum problema na API, o componente do site que mostraria as vagas exibirá a mensagem "Ops, estamos lidando com erros no servidor no momento!".

* Realização de testes unitários: 
Testa a saída esperada ao fazer a requisição das vagas na API. Está nas pastas tests. E para rodar os testes é necessário ter a última versão do node e rodar o comando: 
```sh
npm test
```

## Decisões:

Os components foram criados da forma mais genérica possível, ou seja, os components podem ser reutilizados e ter seu conteúdo mudado facilmente, visto que todos os textos e imagens enviados são definidos no App.svelte, então caso seja necessário, por exemplo, atualizar o depoimento do CEO ou mesmo o vídeo, o desenvolvedor só precisa de acessar o App.svelte e alterar o valor desssas variáveis.

No App.svelte também estão definidas as variáveis de cores utilizadas em todo o site, garantindo que o site utilize o mesmo tom de cores em todos os componentes, além de facilitar a mudança das cores, caso seja necessário no futuro.

## Building:

Pasta ir até a pasta landingPage, instalar os pacotes necessários utilizando:

```sh
npm install
```

E para rodar:

```sh
npm run dev
```

E navegar para o endereço indicado no console, que geralmente será:

http://localhost:5000  
