var getUserRepos = function(user) {

    let apiURL = "https://api.github.com/users/" + user + "/repos";

    fetch(apiURL).then(function(response) {
        response.json().then((data) => {
            console.log(data);
        });

    });
};


getUserRepos();