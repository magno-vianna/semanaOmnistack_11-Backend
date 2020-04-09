<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>Semana Omnistack 11 Back-end </title><style>
/* webkit printing magic: print all background colors */
html {
	-webkit-print-color-adjust: exact;
}
* {
	box-sizing: border-box;
	-webkit-print-color-adjust: exact;
}

html,
body {
	margin: 0;
	padding: 0;
}
@media only screen {
	body {
		margin: 2em auto;
		max-width: 900px;
		color: rgb(55, 53, 47);
	}
}

body {
	line-height: 1.5;
	white-space: pre-wrap;
}

a,
a.visited {
	color: inherit;
	text-decoration: underline;
}

.pdf-relative-link-path {
	font-size: 80%;
	color: #444;
}

h1,
h2,
h3 {
	letter-spacing: -0.01em;
	line-height: 1.2;
	font-weight: 600;
	margin-bottom: 0;
}

.page-title {
	font-size: 2.5rem;
	font-weight: 700;
	margin-top: 0;
	margin-bottom: 0.75em;
}

h1 {
	font-size: 1.875rem;
	margin-top: 1.875rem;
}

h2 {
	font-size: 1.5rem;
	margin-top: 1.5rem;
}

h3 {
	font-size: 1.25rem;
	margin-top: 1.25rem;
}

.source {
	border: 1px solid #ddd;
	border-radius: 3px;
	padding: 1.5em;
	word-break: break-all;
}

.callout {
	border-radius: 3px;
	padding: 1rem;
}

figure {
	margin: 1.25em 0;
	page-break-inside: avoid;
}

figcaption {
	opacity: 0.5;
	font-size: 85%;
	margin-top: 0.5em;
}

mark {
	background-color: transparent;
}

.indented {
	padding-left: 1.5em;
}

hr {
	background: transparent;
	display: block;
	width: 100%;
	height: 1px;
	visibility: visible;
	border: none;
	border-bottom: 1px solid rgba(55, 53, 47, 0.09);
}

img {
	max-width: 100%;
}

@media only print {
	img {
		max-height: 100vh;
		object-fit: contain;
	}
}

@page {
	margin: 1in;
}

.collection-content {
	font-size: 0.875rem;
}

.column-list {
	display: flex;
	justify-content: space-between;
}

.column {
	padding: 0 1em;
}

.column:first-child {
	padding-left: 0;
}

.column:last-child {
	padding-right: 0;
}

.table_of_contents-item {
	display: block;
	font-size: 0.875rem;
	line-height: 1.3;
	padding: 0.125rem;
}

.table_of_contents-indent-1 {
	margin-left: 1.5rem;
}

.table_of_contents-indent-2 {
	margin-left: 3rem;
}

.table_of_contents-indent-3 {
	margin-left: 4.5rem;
}

.table_of_contents-link {
	text-decoration: none;
	opacity: 0.7;
	border-bottom: 1px solid rgba(55, 53, 47, 0.18);
}

table,
th,
td {
	border: 1px solid rgba(55, 53, 47, 0.09);
	border-collapse: collapse;
}

table {
	border-left: none;
	border-right: none;
}

th,
td {
	font-weight: normal;
	padding: 0.25em 0.5em;
	line-height: 1.5;
	min-height: 1.5em;
	text-align: left;
}

th {
	color: rgba(55, 53, 47, 0.6);
}

ol,
ul {
	margin: 0;
	margin-block-start: 0.6em;
	margin-block-end: 0.6em;
}

li > ol:first-child,
li > ul:first-child {
	margin-block-start: 0.6em;
}

ul > li {
	list-style: disc;
}

ul.to-do-list {
	text-indent: -1.7em;
}

ul.to-do-list > li {
	list-style: none;
}

.to-do-children-checked {
	text-decoration: line-through;
	opacity: 0.375;
}

ul.toggle > li {
	list-style: none;
}

ul {
	padding-inline-start: 1.7em;
}

ul > li {
	padding-left: 0.1em;
}

ol {
	padding-inline-start: 1.6em;
}

ol > li {
	padding-left: 0.2em;
}

.mono ol {
	padding-inline-start: 2em;
}

.mono ol > li {
	text-indent: -0.4em;
}

.toggle {
	padding-inline-start: 0em;
	list-style-type: none;
}

/* Indent toggle children */
.toggle > li > details {
	padding-left: 1.7em;
}

.toggle > li > details > summary {
	margin-left: -1.1em;
}

.selected-value {
	display: inline-block;
	padding: 0 0.5em;
	background: rgba(206, 205, 202, 0.5);
	border-radius: 3px;
	margin-right: 0.5em;
	margin-top: 0.3em;
	margin-bottom: 0.3em;
	white-space: nowrap;
}

.collection-title {
	display: inline-block;
	margin-right: 1em;
}

time {
	opacity: 0.5;
}

.icon {
	display: inline-block;
	max-width: 1.2em;
	max-height: 1.2em;
	text-decoration: none;
	vertical-align: text-bottom;
	margin-right: 0.5em;
}

img.icon {
	border-radius: 3px;
}

.user-icon {
	width: 1.5em;
	height: 1.5em;
	border-radius: 100%;
	margin-right: 0.5rem;
}

.user-icon-inner {
	font-size: 0.8em;
}

.text-icon {
	border: 1px solid #000;
	text-align: center;
}

.page-cover-image {
	display: block;
	object-fit: cover;
	width: 100%;
	height: 30vh;
}

.page-header-icon {
	font-size: 3rem;
	margin-bottom: 1rem;
}

.page-header-icon-with-cover {
	margin-top: -0.72em;
	margin-left: 0.07em;
}

.page-header-icon img {
	border-radius: 3px;
}

.link-to-page {
	margin: 1em 0;
	padding: 0;
	border: none;
	font-weight: 500;
}

p > .user {
	opacity: 0.5;
}

td > .user,
td > time {
	white-space: nowrap;
}

input[type="checkbox"] {
	transform: scale(1.5);
	margin-right: 0.6em;
	vertical-align: middle;
}

p {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
}

.image {
	border: none;
	margin: 1.5em 0;
	padding: 0;
	border-radius: 0;
	text-align: center;
}

.code,
code {
	background: rgba(135, 131, 120, 0.15);
	border-radius: 3px;
	padding: 0.2em 0.4em;
	border-radius: 3px;
	font-size: 85%;
	tab-size: 2;
}

code {
	color: #eb5757;
}

.code {
	padding: 1.5em 1em;
}

.code > code {
	background: none;
	padding: 0;
	font-size: 100%;
	color: inherit;
}

blockquote {
	font-size: 1.25em;
	margin: 1em 0;
	padding-left: 1em;
	border-left: 3px solid rgb(55, 53, 47);
}

.bookmark {
	text-decoration: none;
	max-height: 8em;
	padding: 0;
	display: flex;
	width: 100%;
	align-items: stretch;
}

.bookmark-title {
	font-size: 0.85em;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 1.75em;
	white-space: nowrap;
}

.bookmark-text {
	display: flex;
	flex-direction: column;
}

.bookmark-info {
	flex: 4 1 180px;
	padding: 12px 14px 14px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.bookmark-image {
	width: 33%;
	flex: 1 1 180px;
	display: block;
	position: relative;
	object-fit: cover;
	border-radius: 1px;
}

.bookmark-description {
	color: rgba(55, 53, 47, 0.6);
	font-size: 0.75em;
	overflow: hidden;
	max-height: 4.5em;
	word-break: break-word;
}

.bookmark-href {
	font-size: 0.75em;
	margin-top: 0.25em;
}

.sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
.code { font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; }
.serif { font-family: Lyon-Text, Georgia, YuMincho, "Yu Mincho", "Hiragino Mincho ProN", "Hiragino Mincho Pro", "Songti TC", "Songti SC", "SimSun", "Nanum Myeongjo", NanumMyeongjo, Batang, serif; }
.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
.pdf .sans { font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC', 'Noto Sans CJK KR'; }

.pdf .code { font-family: Source Code Pro, "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC', 'Noto Sans Mono CJK KR'; }

.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, YuMincho, "Yu Mincho", "Hiragino Mincho ProN", "Hiragino Mincho Pro", "Songti TC", "Songti SC", "SimSun", "Nanum Myeongjo", NanumMyeongjo, Batang, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC', 'Noto Sans CJK KR'; }

.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC', 'Noto Sans Mono CJK KR'; }

.highlight-default {
}
.highlight-gray {
	color: rgb(155,154,151);
}
.highlight-brown {
	color: rgb(100,71,58);
}
.highlight-orange {
	color: rgb(217,115,13);
}
.highlight-yellow {
	color: rgb(223,171,1);
}
.highlight-teal {
	color: rgb(15,123,108);
}
.highlight-blue {
	color: rgb(11,110,153);
}
.highlight-purple {
	color: rgb(105,64,165);
}
.highlight-pink {
	color: rgb(173,26,114);
}
.highlight-red {
	color: rgb(224,62,62);
}
.highlight-gray_background {
	background: rgb(235,236,237);
}
.highlight-brown_background {
	background: rgb(233,229,227);
}
.highlight-orange_background {
	background: rgb(250,235,221);
}
.highlight-yellow_background {
	background: rgb(251,243,219);
}
.highlight-teal_background {
	background: rgb(221,237,234);
}
.highlight-blue_background {
	background: rgb(221,235,241);
}
.highlight-purple_background {
	background: rgb(234,228,242);
}
.highlight-pink_background {
	background: rgb(244,223,235);
}
.highlight-red_background {
	background: rgb(251,228,228);
}
.block-color-default {
	color: inherit;
	fill: inherit;
}
.block-color-gray {
	color: rgba(55, 53, 47, 0.6);
	fill: rgba(55, 53, 47, 0.6);
}
.block-color-brown {
	color: rgb(100,71,58);
	fill: rgb(100,71,58);
}
.block-color-orange {
	color: rgb(217,115,13);
	fill: rgb(217,115,13);
}
.block-color-yellow {
	color: rgb(223,171,1);
	fill: rgb(223,171,1);
}
.block-color-teal {
	color: rgb(15,123,108);
	fill: rgb(15,123,108);
}
.block-color-blue {
	color: rgb(11,110,153);
	fill: rgb(11,110,153);
}
.block-color-purple {
	color: rgb(105,64,165);
	fill: rgb(105,64,165);
}
.block-color-pink {
	color: rgb(173,26,114);
	fill: rgb(173,26,114);
}
.block-color-red {
	color: rgb(224,62,62);
	fill: rgb(224,62,62);
}
.block-color-gray_background {
	background: rgb(235,236,237);
}
.block-color-brown_background {
	background: rgb(233,229,227);
}
.block-color-orange_background {
	background: rgb(250,235,221);
}
.block-color-yellow_background {
	background: rgb(251,243,219);
}
.block-color-teal_background {
	background: rgb(221,237,234);
}
.block-color-blue_background {
	background: rgb(221,235,241);
}
.block-color-purple_background {
	background: rgb(234,228,242);
}
.block-color-pink_background {
	background: rgb(244,223,235);
}
.block-color-red_background {
	background: rgb(251,228,228);
}
.select-value-color-default { background-color: rgba(206,205,202,0.5); }
.select-value-color-gray { background-color: rgba(155,154,151, 0.4); }
.select-value-color-brown { background-color: rgba(140,46,0,0.2); }
.select-value-color-orange { background-color: rgba(245,93,0,0.2); }
.select-value-color-yellow { background-color: rgba(233,168,0,0.2); }
.select-value-color-green { background-color: rgba(0,135,107,0.2); }
.select-value-color-blue { background-color: rgba(0,120,223,0.2); }
.select-value-color-purple { background-color: rgba(103,36,222,0.2); }
.select-value-color-pink { background-color: rgba(221,0,129,0.2); }
.select-value-color-red { background-color: rgba(255,0,26,0.2); }

.checkbox {
	display: inline-flex;
	vertical-align: text-bottom;
	width: 16;
	height: 16;
	background-size: 16px;
	margin-left: 2px;
	margin-right: 5px;
}

.checkbox-on {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
}

.checkbox-off {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
}
	
</style></head><body><article id="8bb5eb37-80d9-48ee-87ef-371a58abcc6f" class="page sans"><header><div class="page-header-icon undefined"><span class="icon">🚀</span></div><h1 class="page-title">Semana Omnistack 11 Back-end </h1></header><div class="page-body"><p id="aeb6019c-4383-4040-a8d2-ba13d370217d" class="">Passos do desenvolvimento da aplicação. </p><p id="91306226-5101-4845-9ea0-2b284de82660" class="">
</p><ul id="098c6bba-93d1-4b02-a872-17107f4f7b2a" class="to-do-list"><li><div class="checkbox checkbox-off"></div> <span class="to-do-children-unchecked">Importando dependências do Express  </span></li></ul><pre id="cefbdae2-b84f-4f6a-b29e-50cea20f8aee" class="code"><code>const express = require(&#x27;express&#x27;);

const app = express();</code></pre><ul id="7b9029b9-bfa5-4d38-998a-32b2b22d6564" class="to-do-list"><li><div class="checkbox checkbox-off"></div> <span class="to-do-children-unchecked">Rotas e recurso</span></li></ul><pre id="216310b0-ce2a-40d1-b5e0-f06e5106a734" class="code"><code>app.get(&#x27;/&#x27;, (Request, Response) =&gt;{
    return Response.send(&#x27;Hello&#x27;); 
  });

app.listen(3333);</code></pre><ul id="5b7556f3-ab52-4cc2-8357-f2a9f7653163" class="to-do-list"><li><div class="checkbox checkbox-off"></div> <span class="to-do-children-unchecked">Métodos HTTP</span></li></ul><p id="45b552f8-8285-4b02-8dff-fa14e1700918" class="block-color-purple_background">GET: Buscar  ou listar uma informação do Back-end.</p><p id="a6d10a47-2278-4c2d-b7e7-5d64e99773e9" class="block-color-purple_background">POST: Criar uma informação no Back-end.</p><p id="28f2aede-7194-470d-9be4-c182feb4bd1c" class="block-color-purple_background">PUT: Alterar uma informação no Back-end.</p><p id="7448b6dc-abb9-41c9-b494-bc9830ee7ae7" class="block-color-purple_background">DELETE: Deletar uma informação no Back-end.</p><p id="52de0749-7419-4173-aee5-d73bc050aa28" class="">
</p><ul id="2521f7af-cd3a-40d8-9896-93fbb321abde" class="to-do-list"><li><div class="checkbox checkbox-off"></div> <span class="to-do-children-unchecked">Tipos de parâmetros </span></li></ul><p id="c1952f5b-6bcf-4fdb-9657-f8ed44ba8c06" class="block-color-purple_background">Query Params: Parâmetros nomeados enviados na rota após  &quot; ?&quot;  (Filtros e paginação).</p><p id="8f22ad38-0eea-4554-b6ce-1bb1b497a0e0" class="block-color-purple_background">route Params: Parâmetros utilizados para identificar recursos. </p><p id="19e2f77b-c7f9-43c6-8197-8f3bfdfe0eca" class="block-color-purple_background">Request body: Corpo da requisição, utilizado para criar ou alterar recurso.</p><p id="1eaba2d6-d3b9-4836-9a45-4db9d6a80078" class="">
</p><ul id="ecc7bcce-a357-4a46-9d02-facbb6466fb7" class="to-do-list"><li><div class="checkbox checkbox-off"></div> <span class="to-do-children-unchecked">Instalando e configurando o  Nodemon </span></li></ul><p id="2db66c8c-3d4b-4506-bb80-e96efefc50e2" class="">
</p><ul id="19e944c2-495a-43bd-88a6-49482a77164e" class="to-do-list"><li><div class="checkbox checkbox-off"></div> <span class="to-do-children-unchecked">Diferenças entre banco de dados </span></li></ul><p id="433599df-d34b-491f-ae5a-419b46b03bc2" class="block-color-purple_background">Relacional ou não relacional.</p><p id="50f5c2ea-7a42-41d3-94f5-1ab30469ea15" class="block-color-purple_background">Utilizaremos um banco Relacional para o projeto com o &quot;SQLiite&quot;</p><p id="bfa2a59e-4532-491e-b379-82395808ee6d" class="block-color-purple_background">Driver: Knex.js   npm install knex </p><p id="4b870d4a-52fc-46d4-84a1-9325791d09e4" class="block-color-purple_background">Instalação do Banco: npm install sqlite3 </p><p id="5b24d085-026e-47f1-9206-d4fb82ac0b1e" class="block-color-purple_background">Executar o pacote knex: npx knex init </p><p id="e942cbf4-7e24-420f-ac79-ecf7ea73c9c4" class="">
</p><ul id="a7e7f8fa-fac0-44c5-ae52-492120b7322b" class="to-do-list"><li><div class="checkbox checkbox-off"></div> <span class="to-do-children-unchecked">Pensando nas entidades e funcionalidades </span></li></ul><ul id="d8dc3691-1676-483c-aef5-7aeaf637a9b2" class="block-color-purple_background bulleted-list"><li>Entidades <p id="d30e17cd-fb6c-490c-9810-6b844fbef7b6" class="">ONG </p><p id="1eef4cf3-f3af-40ec-b9e3-2b89d458ca52" class="">Caso (incident) </p></li></ul><p id="1ff79e2b-8d10-44b8-b50c-c45db99f401e" class="">
</p><ul id="987ed2b1-6f64-4772-b118-b8ca99c529e5" class="block-color-purple_background bulleted-list"><li>Funcionalidades <p id="4623b8f5-04d6-4a58-92f9-8307e91b02d3" class="">Login de ONG </p><p id="7ad62bc7-4e54-44d0-b6b9-965fe61af660" class="">Logout de ONG </p><p id="600d8c05-cd82-4b6a-a6aa-ce95902bcb03" class="">Cadastro de ONG </p><p id="4b9f0710-3ca6-4749-9251-ba38fa99ddf0" class="">Cadastro novos casos </p><p id="3e73b9bd-cd48-4335-aff5-5d47c5f646a3" class="">Deletar casos </p><p id="b4b1d3e1-fe05-4b29-9a36-862fa1db6657" class="">Listar casos específicos de uma ONG </p><p id="c53c8740-e568-46ca-a15e-6a0faccd4fc6" class="">Listar todos os casos </p><p id="b29dcdbc-6666-4956-b83e-bde70d306acc" class="">Entrar em contato com a ONG </p><p id="c19be1d3-ccc8-4ad7-8c9f-4d384672b88e" class="">
</p></li></ul><ul id="29b4597a-70aa-40cf-8c38-104ed1e18524" class="to-do-list"><li><div class="checkbox checkbox-off"></div> <span class="to-do-children-unchecked">Contrução do back-end </span></li></ul><ul id="4b63e4d2-9d58-4c49-83d3-252d4b1dcfb0" class="to-do-list"><li><div class="checkbox checkbox-off"></div> <span class="to-do-children-unchecked">Adicionando módulo CORS</span></li></ul><p id="c2e27db1-838d-42a2-8623-4e2a954594ad" class="">
</p><p id="c111f84d-7406-431b-8c33-fb03fa635975" class="">
</p><p id="c1149da6-0a9c-4880-a3e9-c1e8eed67389" class="">
</p></div></article></body></html>
