// Compiled using marko@4.18.26 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/prova-nodejs$0.0.1/src/view/index.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<body>");

  component_globals_tag({}, out);

  out.w("<h1> Prova NodeJS</h1><form action=\"/buscar\" method=\"post\"><select name=\"categ\">");

  var $for$0 = 0;

  marko_forEach(data.categs, function(categorias) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<option" +
      marko_attr("value", "" + categorias.idCatProd) +
      ">" +
      marko_escapeXml(categorias.descCatProd) +
      " </option>");
  });

  out.w(" </select><button type=\"submit\">Buscar</button></form><h1>" +
    marko_escapeXml(data.categoria) +
    "</h1><tr><td>Descrição</td><td> Valor</td></tr><br>");

  var $for$1 = 0;

  marko_forEach(data.produtos, function(prods) {
    var $keyScope$1 = "[" + (($for$1++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(prods.descProd) +
      "</td><td> " +
      marko_escapeXml(prods.valorProd) +
      "</td></tr>");
  });

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "14");

  out.w("</body>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/prova-nodejs$0.0.1/src/view/index.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
