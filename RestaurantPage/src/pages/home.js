const home = function() {
    const content = document.querySelector('#content');

    // Home Div
    const home = document.createElement('div')
    home.classList.add('home');
    content.appendChild(home);

    const title = document.createElement('h1');
    title.classList.add("title");
    title.textContent = 'Welcome, here are our Hours!';
    home.appendChild(title);

    const openTimeContainer = document.createElement('div');
    openTimeContainer.classList.add('openTimeCont');

    const openTime = document.createElement('ul');

    openTime.innerHTML = `
    <li><img src="/src/assets/monday.png">Monday 
    <h5>3am - 9pm</h5>
    </li>

    <li><img src="/src/assets/tuesday.png">Tuesday 
    <h5>3am - 9pm</h5>
    </li>

    <li><img src="/src/assets/wednesday.png">Wednesday 
    <h5>3am - 9pm</h5>
    </li>

    <li><img src="/src/assets/thursday.png">Thursday 
    <h5>3am - 9pm</h5>
    </li>

    <li><img src="/src/assets/friday.png">Friday 
    <h5>3am - 9pm</h5>
    </li>

    <li><img src="/src/assets/saturday.png">Saturday 
    <h5>3am - 9pm</h5>
    </li>

    <li><img src="/src/assets/sunday.png">Sunday 
    <h5>3am - 9pm</h5>
    </li>

    `;
    home.appendChild(openTime);
}

export default home;