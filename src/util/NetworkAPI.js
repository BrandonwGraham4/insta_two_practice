export function getAvatarPicture() {
  let avatarImage = [];

  fetch("https://rickandmortyapi.com/api/character").then((r) => {
    r.json().then((data) => {
      data.results.map((character) => {
        avatarImage.push(character.image);
      });
    });
  });
  return avatarImage;
}
