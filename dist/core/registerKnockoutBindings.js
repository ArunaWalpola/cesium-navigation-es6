import{knockout,SvgPathBindingHandler}from"cesium";import KnockoutMarkdownBinding from"./KnockoutMarkdownBinding";import KnockoutHammerBinding from"./KnockoutHammerBinding";var Knockout=knockout,registerKnockoutBindings=function(){SvgPathBindingHandler.register(Knockout),KnockoutMarkdownBinding.register(Knockout),KnockoutHammerBinding.register(Knockout),Knockout.bindingHandlers.embeddedComponent={init:function(n,o,i,t,r){return Knockout.unwrap(o()).show(n),{controlsDescendantBindings:!0}},update:function(n,o,i,t,r){}}};export default registerKnockoutBindings;