document.addEventListener("DOMContentLoaded", () => {
  const yearsProfessionalExp = "16+";
  const yearsTechLeadershipExp = "13+";
  const yearsSoftwareManagerExp = "2+";
  
  const overallProjectCount = "47+";
  const developerAppCount = "46+";
  const solutionsArchitectProjectCount = "13+";
  const technicalLeadProjectCount = "17+";

  document.querySelectorAll(".years-pro-exp").forEach(el => {
    el.textContent = yearsProfessionalExp;
  });

  document.querySelectorAll(".years-lead-exp").forEach(el => {
    el.textContent = yearsTechLeadershipExp;
  });

   document.querySelectorAll(".years-manager-exp").forEach(el => {
    el.textContent = yearsSoftwareManagerExp;
  });


  document.querySelectorAll(".projects-overall-count").forEach(el => {
    el.textContent = overallProjectCount;
  });

  document.querySelectorAll(".projects-dev-count").forEach(el => {
    el.textContent = developerAppCount;
  });

  document.querySelectorAll(".projects-sa-count").forEach(el => {
    el.textContent = solutionsArchitectProjectCount;
  });

  document.querySelectorAll(".projects-tl-count").forEach(el => {
    el.textContent = technicalLeadProjectCount;
  });


});