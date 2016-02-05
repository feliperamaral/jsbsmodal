/* !
 * @author: Felipe Amaral
 * @date: 04/11/2015
 * @version: 1.0.0
 *
 */
(function ($) {
    'use strict';
    var pluginName = 'jsBsModal',
        htmls = {
            'modal'        : '<div class="modal fade" tabindex="-1" role="dialog">',
            'modal-dialog' : '<div class="modal-dialog" role="document">',
            'modal-content': '<div class="modal-content">',
            'modal-header' : '<div class="modal-header">',
            'close'        : '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>',
            'modal-title'  : '<h4 class="modal-title">',
            'modal-body'   : '<div class="modal-body">',
            'modal-footer' : '<div class="modal-footer">'
        },
        structureHTML = {
            name  : 'modal',
            childs: {
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
        optionsDefault = {
            autoShow     : true,
            structureHTML: structureHTML,
            contents     : {
                'modal'        : '', // HTML to preprend. Accepts: jQuery Obj, element and string
                'modal-dialog' : '', // false or undefined to exclude element
                'modal-content': '',
                'modal-header' : '',
                'close'        : '',
                'modal-title'  : false,
                'modal-body'   : false,
                'modal-footer' : false
            }
        };

    function makeHtml(structureHTML, options) {

        if ($.isArray(structureHTML)) {
            var elements = [];
            $.each(structureHTML, function (i, v) {
                elements.push(makeHtml(v, options));
            });
            return elements;
        }

        if (htmls[structureHTML.name] === undefined) {
            throw new Error('"' + structureHTML.name + '" is not valid.\n' + 'Valids: ' + Object.keys(htmls).join(', '));
        }

        var content = options.contents[structureHTML.name];

        if (content === false || content === undefined) {
            return;
        }

        var html = $(htmls[structureHTML.name]);

        if (content !== '') {
            html.append(content);
        }

        if (structureHTML.childs) {
            $.each(makeHtml(structureHTML.childs, options), function (i, el) {
                html.append(el);
            });
        }

        return html;
    }

    function jsBsModalInit(options) {
        var modal = makeHtml(options.structureHTML, options);

        $('body').append(modal);

        if (options.autoShow) {
            modal.modal('show');
        }

        return modal;
    }

    $[pluginName] = function (options) {
        options = $.extend({}, optionsDefault, options);

        options.contents = $.extend({}, optionsDefault.contents, options.contents);

        return jsBsModalInit(options);
    };
    $[pluginName].htmls = htmls;
}(jQuery));
