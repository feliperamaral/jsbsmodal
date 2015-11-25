# JsBSModal

## Útil para criar modals do Twitter Bootstrap totalmente via JS

É um pequeno helper para criar facilmente modals com o bootstrap sem ter que escrever toooooodo aquele HTML básico.

Básico:

```js
$.jsBsModal({
    contents: {
      'modal-body': 'Olá mundo'
    }
})
```
## Opções
```js
{
	//Se `true`, o modal é exibido automaticamente
	autoShow     : true,
    // Esse é a estrutura hierárquica do HTML do modal, aqui é definido quem é filho de quem.
    // 
	structureHTML: {
		name  : 'modal', // A propriedade `name` é com refência na variável interna `htmls` (olha lá no source depois)
		childs: { // Em `childs`  são listados os filhos do elemento anterior
			name  : 'modal-dialog',
			childs: {
				name  : 'modal-content',
				childs: [
					{
						name  : 'modal-header',
						childs: [
							{name: 'close'},
							{name: 'modal-title'}
						]
					},
					{name: 'modal-body'},
					{name: 'modal-footer'}
				]
			}
		}
	},
    contents     : { // Define o html de cada elemento
		'modal'        : '', // Cada "cache" aqui relaciona com a variável interna `htmls` (que eu comentei lá em cima)
		'modal-dialog' : '', 
		'modal-content': '',
		'modal-header' : '',
		'close'        : '',
		'modal-title'  : false, // Se o valor for `false` o elemento nem é criado
		'modal-body'   : false,
		'modal-footer' : false
	}
}
```

## Retorno
### É retornado um objeto jQuery com o modal instanciado


## Exemplos

http://codepen.io/feliperamaral/pen/RWzNVV?editors=101
