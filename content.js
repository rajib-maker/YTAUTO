// Listen for YouTube video pages and pre-fill the comment section
chrome.storage.local.get(["commentText", "videoUrls"], ({ commentText, videoUrls }) => {
  const currentUrl = window.location.href;

  // Check if current URL is in the list of video URLs
  if (videoUrls && videoUrls.some(url => currentUrl.includes(url.trim()))) {
    // Wait for the comment section to be available
    const fillComment = setInterval(() => {
      const commentBox = document.querySelector("#contenteditable-root");
      
      if (commentBox) {
        commentBox.click();
        document.execCommand("insertText", false, commentText);
        clearInterval(fillComment); // Stop trying once the comment is inserted
      }
    }, 1000); // Retry every second
  }
});
