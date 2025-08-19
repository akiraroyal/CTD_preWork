
function showBreeds() {
    const url = "https://api.thedogapi.com/v1/breeds?limit=5";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let output = "<h2>Breeds</h2>";
        data.forEach(breed => {
          output += `<p><strong>${breed.name}</strong> - ${breed.temperament || "No info"}</p>`;
        });
        document.getElementById("content").innerHTML = output;
      })
      .catch(() => {
        document.getElementById("content").innerHTML = "Error loading breeds.";
      });
  }
  

  function showImages() {
    const url = "https://api.thedogapi.com/v1/images/search?limit=4";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let output = "<h2>Random Images</h2>";
        data.forEach(img => {
          output += `<img src="${img.url}" alt="dog">`;
        });
        document.getElementById("content").innerHTML = output;
      })
      .catch(() => {
        document.getElementById("content").innerHTML = "Error loading images.";
      });
  }
  