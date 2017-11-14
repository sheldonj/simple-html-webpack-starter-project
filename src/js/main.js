document.querySelector('#main').innerHTML = 'Hi From JavaScript land. - MAIN LIB';

function getComponent(moduleName) {
  return import(/* webpackChunkName: "chunk" */ './chunk.js')
    .then(module => {
      var element = document.createElement('div');
      element.innerHTML = module.name;
      return element;
    })
    .catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
  document.body.appendChild(component);
});
