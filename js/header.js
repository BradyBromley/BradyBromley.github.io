const template = document.createElement('template');

template.innerHTML = `
    <h1>Brady Bromley</h1>
    <div id="navigation">
    <ul class="navbar">
    <li class="navbarLink"><a href="index.html">Portfolio</a></li>
    <li class="navbarLink"><a href="resume.html">Resume</a></li>
    <li class="navbarLink"><a href="about.html">About</a></li>
    </ul>
    </div>
`;

document.body.prepend(template.content);