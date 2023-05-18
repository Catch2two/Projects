import theList from './theList'

const UI = function(){
    const content = document.querySelector('#content');

// Banner
    const banner = document.createElement('div')
    banner.classList.add('banner');
    content.appendChild(banner);
    console.log('Banner Loaded')

// Main Container
    const main = document.createElement('div')
    main.classList.add('main');
    content.appendChild(main);
    console.log('Main Container, Where everything will be loaded into!');



// Footer
    const footer = document.createElement('div')
    footer.classList.add('footer');
    content.appendChild(footer);
    console.log('Footer Loaded')
}

export default UI;