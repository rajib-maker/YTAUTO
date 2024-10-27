document.getElementById("startCommenting").addEventListener("click", () => {
  const commentText = document.getElementById("commentText").value;
  const videoUrls = document.getElementById("videoUrls").value.split(',');

  // Store in local storage
  chrome.storage.local.set({ commentText, videoUrls }, () => {
    alert("Comment text and video URLs saved. Open a video page to see the comment filled.");
  });
});
