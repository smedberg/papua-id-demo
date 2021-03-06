// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

require('dropzone')
require('papercup')

import 'bootstrap'
import '../stylesheets/application'
import '../stylesheets/dropzone'

// Cohere Init:
(()=>{const e=window.Cohere=window.Cohere||[];if(e.invoked)return void console.error("Tried to load Cohere twice");e.invoked=!0,e.snippet="0.2",e.methods=["init","identify","stop"],e.methods.forEach(t=>{e[t]=((...o)=>{o.unshift(t),e.push(o)})});const t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://static.cohere.so/main.js";const o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(t,o)})();

document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  $('a[href="#"]').click((event) => {
    event.preventDefault();
  });

  // Start Cohere
  window.Cohere.init("RemPbc5wtNJTbqzUZBWsnU2R");
})

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
