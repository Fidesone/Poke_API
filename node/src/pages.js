
let totalPages = 0;
let currentPage = 1; 
export async function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      document.getElementById('current-page').textContent = currentPage;
      document.getElementById('next-button').disabled = false;
      document.getElementById('prev-button').disabled = currentPage === 1;
      button.click();
    }
  }
  
export async function nextPage() {
    if (currentPage < totalPages) {
      currentPage++;
      console.log("llegamos")
      document.getElementById('current-page').textContent = currentPage;
      document.getElementById('prev-button').disabled = false;
      document.getElementById('next-button').disabled = currentPage === totalPages;
      button.click();
    }
}