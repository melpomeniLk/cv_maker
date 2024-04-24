var colorInput = document.getElementById('bg-color');

// Add event listener to listen for changes in the color input
colorInput.addEventListener('input', function() {
    // Get the selected color value
    var selectedColor = colorInput.value;

    // Update the value of the CSS variable
    document.documentElement.style.setProperty('--background-color', selectedColor);
	//document.body.style.backgroundColor = selectedColor;
});

// Select the font picker element
var fontPicker = document.getElementById('font-family');

// Add event listener to listen for changes in the font picker
fontPicker.addEventListener('change', function() {
  // Get the selected font family
  var selectedFont = fontPicker.value;
  
  // Update the font family of the example text
  document.body.style.fontFamily = selectedFont;
  console.log(selectedFont);
});


function addSkill(button) {
    // Find the closest section to the clicked button
    var section = button.closest('.section');

    // Create a new paragraph element
    var newParagraph = document.createElement('p');
    newParagraph.textContent = 'New Skill';

    // Append the new paragraph to the skills div
    var skillsDiv = section.querySelector('.skills');
    skillsDiv.appendChild(newParagraph);
}

function addElement(button) {
    // Find the closest section to the clicked button
    var section = button.closest('.section');

    // Create a new paragraph element
    var newParagraph = document.createElement('p');
    newParagraph.textContent = 'New Element';

    // Append the new paragraph to the skills div
    section.appendChild(newParagraph);
}

function addExperience(button) {
    // Find the closest section to the clicked button
    var section = button.closest('.section');

    // Create the new HTML structure
    var newExpRow = document.createElement('div');
    newExpRow.classList.add('exp-row');
    
    var companyName = document.createElement('h6');
    companyName.textContent = 'Company name';

    var sectionTitle = document.createElement('div');
    sectionTitle.classList.add('section-title');
    var jobPosition = document.createElement('div');
    jobPosition.textContent = 'Your Job Position here';
    var dateRange = document.createElement('div');
    dateRange.textContent = 'Month Year - Month Year';
    sectionTitle.appendChild(jobPosition);
    sectionTitle.appendChild(dateRange);

    var ul = document.createElement('ul');
    var li1 = document.createElement('li');
    li1.textContent = 'Aenean nisi neque, rhoncus in ex eget, egestas pharetra sapien. In vehicula efficitur risus a eleifend';
    var li2 = document.createElement('li');
    li2.textContent = 'Nulla sit amet tortor in purus auctor tristique. Cras euismod metus at augue';
    ul.appendChild(li1);
    ul.appendChild(li2);

    // Append the new HTML structure to the section
    newExpRow.appendChild(companyName);
    newExpRow.appendChild(sectionTitle);
    newExpRow.appendChild(ul);
    
    section.appendChild(newExpRow);
}


function addEducation(button) {
    // Find the closest section to the clicked button
    var section = button.closest('.section');

    // Create a new paragraph element
	var newUniversity = document.createElement('h6');
    newUniversity.textContent = 'Your Institution Name';
    var newParagraph = document.createElement('p');
    newParagraph.textContent = 'Your Degree Name, Start Year - End Year';

    // Append the new paragraph to the skills div
    //var skillsDiv = section.querySelector('.skills');
    section.appendChild(newUniversity);
    section.appendChild(newParagraph);
}

function editSection(button) {
	// Find the closest section to the clicked button
	var content = button.closest('.section');
	console.log(content);	
	// Get the content within the section
	//var content = section.querySelector('.skills');

	// Toggle the contenteditable attribute
	content.contentEditable = !content.isContentEditable;

	// Focus on the content if it's editable
	if (content.isContentEditable) {
		content.focus();
	}
}		