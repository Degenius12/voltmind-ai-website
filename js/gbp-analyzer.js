// GBP Analyzer JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('gbpAnalyzerForm');
  const results = document.getElementById('results');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      analyzeProfile();
    });
  }
});

function analyzeProfile() {
  // Get form data
  const formData = new FormData(document.getElementById('gbpAnalyzerForm'));
  let score = 0;
  const recommendations = [];
  
  // Calculate completeness score
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let checkedCount = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) checkedCount++;
  });
  
  const completenessScore = (checkedCount / checkboxes.length) * 50;
  score += completenessScore;
  
  // Add recommendations based on unchecked items
  if (!document.querySelector('[name="hasDescription"]').checked) {
    recommendations.push('Add a detailed business description (750 characters)');
  }
  if (!document.querySelector('[name="hasPhotos"]').checked) {
    recommendations.push('Upload at least 10 high-quality photos');
  }
  if (!document.querySelector('[name="hasHours"]').checked) {
    recommendations.push('Add your business hours including special hours');
  }
  if (!document.querySelector('[name="hasWebsite"]').checked) {
    recommendations.push('Add your website URL to drive traffic');
  }
  
  // Review score
  const reviewCount = parseInt(document.getElementById('reviewCount').value) || 0;
  if (reviewCount > 50) {
    score += 30;
  } else if (reviewCount > 20) {
    score += 20;
  } else if (reviewCount > 5) {
    score += 10;
  } else {
    recommendations.push('Focus on getting more customer reviews (aim for 20+)');
  }
  
  // Category bonus
  if (document.getElementById('businessCategory').value) {
    score += 20;
  }
  
  // Display results
  document.getElementById('score').textContent = Math.round(score);
  const recList = document.getElementById('recommendations');
  recList.innerHTML = '';
  recommendations.forEach(rec => {
    const li = document.createElement('li');
    li.textContent = rec;
    li.style.marginBottom = '8px';
    recList.appendChild(li);
  });
  
  // Show results
  document.getElementById('results').style.display = 'block';
  
  // Scroll to results
  document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

// Reset function
function resetAnalyzer() {
  document.getElementById('gbpAnalyzerForm').reset();
  document.getElementById('results').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
