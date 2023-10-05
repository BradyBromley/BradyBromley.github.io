const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
    <div id="navigation">    
    <h1>Brady Bromley</h1>
    <ul class="navbar">
    <li class="navbarLink"><a href="index.html">Portfolio</a></li>
    <li class="navbarLink"><a href="resume.html">Resume</a></li>
    <li class="navbarLink"><a href="about.html">About</a></li>
    </ul>
    </div>
`;
document.body.prepend(headerTemplate.content);