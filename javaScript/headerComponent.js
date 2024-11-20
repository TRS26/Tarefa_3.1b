document.addEventListener("DOMContentLoaded", function () {
    const headerHtml = `
      <div id="mainRowHeader" class="row header">
        <div id="navMenu" class="col-3 col-lg-8 order-0 order-lg-1">
          <nav class="navbar navbar-expand-lg">
            <button id="btn-MenuPrincipal" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse special" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="/">Animals</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">Users</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">Quizzes</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../views/expert.html">Experts</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../views/sponsor.html">Sponsors</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div id="navLogo" class="col-6 col-lg-3 order-1 order-lg-0">
          <a class="navbar-brand" href="/">
            <img id="headerLogo" src="../assets/animalec_line.png" alt="Logo Animalec">
          </a>
        </div>
      </div>
    `;
  
    const headerContainer = document.getElementById("headerContainer");
    if (headerContainer) {
      headerContainer.innerHTML = headerHtml;
    }
  });