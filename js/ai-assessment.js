// AI Readiness Assessment JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('aiAssessmentForm');
  const emailForm = document.getElementById('emailForm');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      calculateReadiness();
    });
  }
  
  if (emailForm) {
    emailForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you! Your AI roadmap will be sent to your email shortly.');
      emailForm.reset();
    });
  }
});

function calculateReadiness() {
  let score = 0;
  const recommendations = [];
  const nextSteps = [];
  
  // Company size score
  const size = document.getElementById('companySize').value;
  if (size === '11-50' || size === '51-200') {
    score += 15;
  } else if (size === '1-10') {
    score += 10;
  } else if (size === '200+') {
    score += 20;
  }
  
  // Industry score
  const industry = document.getElementById('industry').value;
  if (industry) {
    score += 10;
  }
  
  // Technology readiness
  const techCheckboxes = document.querySelectorAll('[name^="has"]');
  let techCount = 0;
  techCheckboxes.forEach(cb => {
    if (cb.checked) techCount++;
  });
  score += (techCount / techCheckboxes.length) * 30;
  
  if (!document.querySelector('[name="hasCloudTools"]').checked) {
    recommendations.push('Start migrating to cloud-based tools for better AI integration');
  }
  if (!document.querySelector('[name="hasDataAnalytics"]').checked) {
    recommendations.push('Implement basic analytics to track key business metrics');
  }
  
  // Business challenges (shows AI opportunity)
  const challengeCheckboxes = document.querySelectorAll('[name^="need"]');
  let challengeCount = 0;
  challengeCheckboxes.forEach(cb => {
    if (cb.checked) challengeCount++;
  });
  score += (challengeCount / challengeCheckboxes.length) * 20;
  
  // AI knowledge
  const knowledge = document.getElementById('aiKnowledge').value;
  if (knowledge === 'advanced') score += 25;
  else if (knowledge === 'moderate') score += 20;
  else if (knowledge === 'basic') score += 10;
  else {
    recommendations.push('Start with AI education and training for your team');
  }
  
  // Determine readiness level
  let level = '';
  if (score >= 80) {
    level = 'AI Ready - Prime for Implementation';
    nextSteps.push('Schedule an AI strategy consultation');
    nextSteps.push('Identify your first AI pilot project');
    nextSteps.push('Begin implementation planning');
  } else if (score >= 60) {
    level = 'Approaching Readiness - Foundation Building';
    nextSteps.push('Strengthen data collection processes');
    nextSteps.push('Invest in team AI training');
    nextSteps.push('Start with simple automation tools');
  } else if (score >= 40) {
    level = 'Early Stage - Preparation Needed';
    nextSteps.push('Digitize core business processes');
    nextSteps.push('Implement cloud-based tools');
    nextSteps.push('Begin collecting and organizing data');
  } else {
    level = 'Initial Phase - Groundwork Required';
    nextSteps.push('Assess current technology infrastructure');
    nextSteps.push('Create a digital transformation roadmap');
    nextSteps.push('Start with basic digital tools adoption');
  }
  
  // Display results
  document.getElementById('readinessScore').textContent = Math.round(score);
  document.getElementById('readinessLevel').textContent = level;
  
  // Show recommendations
  const recList = document.getElementById('aiRecommendations');
  recList.innerHTML = '';
  recommendations.forEach(rec => {
    const li = document.createElement('li');
    li.textContent = rec;
    li.style.marginBottom = '8px';
    recList.appendChild(li);
  });
  
  // Show next steps
  const stepsList = document.getElementById('nextSteps');
  stepsList.innerHTML = '';
  nextSteps.forEach(step => {
    const li = document.createElement('li');
    li.textContent = step;
    li.style.marginBottom = '8px';
    stepsList.appendChild(li);
  });
  
  // Show results
  document.getElementById('assessmentResults').style.display = 'block';
  document.getElementById('assessmentResults').scrollIntoView({ behavior: 'smooth' });
}
