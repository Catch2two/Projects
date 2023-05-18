import UI from './UI'

const theList = function(){
    const content = document.querySelector('#content');

// List
    const theList = document.createElement('div')
    theList.classList.add('theList');
    content.appendChild(theList);
    console.log('The list Loaded')
}

export default theList;