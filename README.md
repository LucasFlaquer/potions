Este é um Workflow base para o desenvolvimeto de projetos Front-End e tem como principal objetivo agilizar o desenvolvimento.

Este Workflow utiliza:
	Gulp
	Node / npm
	Sass / Scss
	Javascript / JQuery
	handlebars.js
	Bootstrap
	Font-awesome
	tasks do gulp


#andes de começar #
*Pré requisitos:*
	- Node.js instalado globalmente
 	- Gulp.js instalado globalmente
 	# para instalar o node acesse o site: https://nodejs.org/en/
 	# depois de instalar o node.js abra o terminal e digite "npm install gulp -g"
 	certifique-se de que você tem o Node e o npm instalado na sua máquina.
 	Abra o terminal e digite
	'node -v' e 'npm -v'
	se não estiverem instalados baixe no site do https://nodejs.org/

*Com o node instalado basta posicionar o seu terminal na pasta do projeto e digitar 'npm install'
que o npm irá instalar todas as dependencias do projeto na pasta node_modules*

#estrutura de pastas#

para que o workflow funcione perfeitamente atente-se à estrutura de pastas do projeto:
```
root
	|_src
		|_js
		|_scss
			|_...
		|_samples
		|_fonts
		|_templates
			|_partials
			|_pages
	|_dist
		|_css
		|_js
		|_fonts
		|_samples
```

#tarefas#
	Este Workflow utiliza as tarefas do gulp para otimizar as tarefas rotineiras do desenvolvimento front-end
	são elas:
	- browserSync: cria um ambiente para executar o projeto e atualiza o navegador ao salvar o arquivo no editor de texto
	- sass: compila e minifica os arquivos .sccs ou .sass em .css e gera o arquivo .map
	- copia arquivos como fontes e imagens
	- gera os templates através da template engine handlebars
	- copia os arquivos dos plugins e bibliotecas javascript
	- watch: manda para o browsersync após cada atualização


Qualquer Dúvida entre em contato:
email: lucas.flaquer@gmail.com
