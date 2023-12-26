console.clear();

/*
This page shows an example of a social media post. Your task is to replicate the social media post with JavaScript. Use `document.createElement()` to generate all HTML elements separately.

Don't use `.innerHTML` to create the HTML in one instance, but use multiple calls of `document.createElement()` instead.

The `index.html` demonstrates the required HTML tags, structure and class names.

Append the second social media post to the body. Don't forget to add the event listener to the like button. You can use the function `handleLikeButtonClick` for the event listener.
*/

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const newPostSection = document.createElement("section");
newPostSection.classList.add("post");
document.body.append(newPostSection);

const newPostContent = document.createElement("p");
newPostContent.classList.add("post__content");
newPostSection.append(newPostContent);
newPostContent.textContent =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.";

const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");
newPostSection.append(newPostFooter);

const newPostUsername = document.createElement("span");
newPostUsername.classList.add("post__username");
newPostUsername.textContent = "@newuser";
newPostFooter.append(newPostUsername);

const newLikeButton = document.createElement("button");
newLikeButton.classList.add("post__button");
newLikeButton.textContent = "<3 Like";
newPostFooter.append(newLikeButton);

newLikeButton.addEventListener("click", (event) => {
  handleLikeButtonClick(event);
});

// Exercise:
// Use document.createElement() and append another social media post to the body.

const scndNewPostSection = document.createElement("section");
scndNewPostSection.classList.add("post");
document.body.append(scndNewPostSection);

const scndNewPostContent = document.createElement("p");
scndNewPostContent.classList.add("post__content");
scndNewPostContent.textContent = "hello world";
scndNewPostSection.append(scndNewPostContent);

const scndNewPostFooter = document.createElement("footer");
scndNewPostFooter.classList.add("post__footer");
scndNewPostSection.append(scndNewPostFooter);

const scndNewUsername = document.createElement("span");
scndNewUsername.classList.add("post__username");
scndNewUsername.textContent = "@secondNewUser";
scndNewPostFooter.append(scndNewUsername);

const scndNewLikeButton = document.createElement("button");
scndNewLikeButton.classList.add("post__button");
scndNewLikeButton.textContent = "<3 Like";
scndNewPostFooter.append(scndNewLikeButton);

scndNewLikeButton.addEventListener("click", (event) => {
  handleLikeButtonClick(event);
});

/* <section class="post">
<p class="post__content">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
</p>
<footer class="post__footer">
  <span class="post__username">@username</span>
  <button type="button" class="post__button" data-js="like-button">
    ♥ Like
  </button>
</footer>
</section> */
