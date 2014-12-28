
var work = {
  "jobs": [
    {
      "employer": "Slow Dough Bread Co.",
      "title": "Co-Founder",
      "location": "Houston, TX",
      "dates": "2009-2014",
      "description": "Description of my job at Slow Dough goes here"
    },
    {
      "employer": "Test Company",
      "title": "Test Title",
      "location": "New York, NY",
      "dates": "2004-2009",
      "description": "Description of my Test job goes here"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Project title goes here",
      "dates": "Project dates go here",
      "description": "Project description goes here",
      "images": ["images/197x148.gif", "images/197x148.gif"]
    },
    {
      "title": "Project 2 title goes here",
      "dates": "Project 2 dates go here",
      "description": "Project 2 description goes here",
      "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
    },
    {
      "title": "Project 3 title goes here",
      "dates": "Project 3 dates go here",
      "description": "Project 3 description goes here",
      "images": []
    }
  ]
};

var bio = {
  "name": "Marlo Evans",
  "role": "Web Developer",
  "contacts": {
    "mobile": "832-964-4661",
    "email": "evans.marlo@gmail.com",
    "github": "mee213",
    "twitter": "@marloevans",
    "location": "Houston, TX"
  },
  "welcomeMessage": "This is a welcome message.",
  "skills": [
    "skill 1", "skill 2", "skill 3", "skill 4"
  ],
  "bioPic": "images/fry.jpg"
};

var education = {
  "schools": [
    {
      "name": "University of Houston",
      "location": "Houston, TX",
      "degree": "BA",
      "majors": ["Spanish"],
      "dates": 2006,
      "url": "http://www.uh.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Software as a Service",
      "school": "edX / Berkeley X",
      "date": 2013,
      "url": "edX SaaS URL goes here"
    },
    {
      "title": "Startup Engineering",
      "school": "Coursera / Stanford",
      "date": 2013,
      "url": "Coursera URL goes here"
    }
//    {
//      Code School courses go here
//    },
//    {
//      Codecademy courses go here
//    },
//    {
//      Bloc -- Design goes here
//    },
//    {
//      Udacity -- Front-End Nanodegree goes here
//    },
  ]
};

var displayNameAndRole = function() {

  var formattedName = HTMLheaderName.replace("%data%",bio.name);

  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

  $("#header").prepend(formattedRole);

  $("#header").prepend(formattedName);
};

//$("#main").append(bio.contact);

//$("#main").append(bio.image);

//$("#main").append(bio.skills);

//$("#main").append(work["position"]);

//$("#main").append(education.name);

var displayContacts = function() {

  var formattedContact = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
  $("#topContacts").append(formattedContact);

  formattedContact = HTMLemail.replace("%data%", bio.contacts["email"]);
  $("#topContacts").append(formattedContact);

  formattedContact = HTMLgithub.replace("%data%", bio.contacts["github"]);
  $("#topContacts").append(formattedContact);

  formattedContact = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
  $("#topContacts").append(formattedContact);

  formattedContact = HTMLlocation.replace("%data%", bio.contacts["location"]);
  $("#topContacts").append(formattedContact);
};

var displayBioPic = function() {
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedBioPic);
};

var displayWelcomeMessage = function() {
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);
};

var displaySkills = function() {
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
  }
};

var displayWork = function() {
  for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(
    formattedEmployerTitle);

  var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(
    formattedWorkDates);

  var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  $(".work-entry:last").append(
    formattedWorkLocation);

  var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(
    formattedWorkDescription);
  }
};

var inName = function(oldName) {
    var finalName = oldName;
    var arrayOfStrings = finalName.split(" ");
    arrayOfStrings[0] = arrayOfStrings[0].toLowerCase();
    arrayOfStrings[0] = arrayOfStrings[0].replace(arrayOfStrings[0].charAt(0),arrayOfStrings[0].charAt(0).toUpperCase());
    arrayOfStrings[1] = arrayOfStrings[1].toUpperCase();
    var finalName = arrayOfStrings.join(' ');
    return finalName;
};

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);

    for (image in projects.projects[project].images) {
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);
    }
  }
};

displayNameAndRole();
displayContacts();
displayBioPic();
displayWelcomeMessage();
displaySkills();
displayWork();
projects.display();

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});




