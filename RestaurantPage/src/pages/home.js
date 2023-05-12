const home = function() {
    const content = document.querySelector('#content');

    // Home Div
    const home = document.createElement('div')
    home.classList.add('home');
    content.appendChild(home);

    const title = document.createElement('h1');
    title.classList.add("title");
    title.textContent = 'Welcome, here are our Hours!';
    content.appendChild(title);

    const openTime = document.createElement('ul');

    openTime.innerHTML = `
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
    <li>Thursday</li>
    <li>Friday</li>
    <li>Saturday</li>
    <li>Sunday</li>
    `;
    content.appendChild(openTime);
}

export default home;