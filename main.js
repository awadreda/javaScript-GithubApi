

let inputUserName = document.querySelector(".input_UserName");

let GetRepos = document.querySelector(".get_repos");



let ReposShow = document.querySelector(".repos_show");

let f = [9999,99,99];
f.forEach


GetRepos.onclick = getRepos;



function getRepos() {


  if(inputUserName.value === ""){

    ReposShow.innerHTML="Pleace Enter UserName";
  }
  else{

    let Username=inputUserName.value;


    fetch(`https://api.github.com/users/${Username}/repos`)
      .then((res) => res.json())
      .then((repos) => {
        ReposShow.innerHTML = "";

        repos.forEach((repo) => {
          let repoDiv = document.createElement("div");
          repoDiv.classList.add("repo");

          let repoNameSpan = document.createElement("span");
          repoNameSpan.classList.add("repoName");

          let Stars_visitDiv = document.createElement("div");

          Stars_visitDiv.classList.add("stars_visit");

          let StarsSpan = document.createElement("span");

          StarsSpan.classList.add("stars");

          let VistLink = document.createElement("a");

          repoNameSpan.innerHTML = `${repo.name}`;

          StarsSpan.innerHTML = `Stars ${repo.stargazers_count}`;

          VistLink.innerHTML = "Visit";
          VistLink.href = `https://github.com/ElzeroWebSchool/${repo.name}`;

          VistLink.setAttribute("target", "_blank");
          repoDiv.appendChild(repoNameSpan);

          Stars_visitDiv.appendChild(StarsSpan);
          Stars_visitDiv.appendChild(VistLink);

          repoDiv.appendChild(Stars_visitDiv);

          ReposShow.appendChild(repoDiv);
        });
      });



  }


}