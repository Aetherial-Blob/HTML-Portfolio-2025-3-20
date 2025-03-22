function toggleVersion() {
  // Get the header and body content divs
  const headerContent = document.getElementById('header-content');
  const bodyContentVersion1 = document.getElementById('body-content-version-1');
  const bodyContentVersion2 = document.getElementById('body-content-version-2');

  // Toggle between version 1 (header + image only) and version 2 (no header + image + text)
  if (headerContent.style.display === 'none') {
    headerContent.style.display = 'block';  // Show header
    bodyContentVersion1.style.display = 'block';  // Show body version 1 (image only)
    bodyContentVersion2.style.display = 'none';  // Hide body version 2 (image + text)
  } else {
    headerContent.style.display = 'none';   // Hide header
    bodyContentVersion1.style.display = 'none';  // Hide body version 1 (image only)
    bodyContentVersion2.style.display = 'block';  // Show body version 2 (image + text)
  }
}