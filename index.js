"use strict";
document.addEventListener('DOMContentLoaded', () => {
    var _a, _b, _c;
    const form = document.getElementById('resume-form');
    const resumeContent = document.getElementById('resume-content');
    const educationSection = document.getElementById('education-section');
    const experienceSection = document.getElementById('experience-section');
    const skillsSection = document.getElementById('skills-section');
    // Event listeners for adding more education, experience, and skills
    (_a = document.getElementById('add-education')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', addEducationField);
    (_b = document.getElementById('add-experience')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', addExperienceField);
    (_c = document.getElementById('add-skill')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', addSkillField);
    // Add dynamic fields for Education
    function addEducationField() {
        const div = document.createElement('div');
        div.innerHTML = `
            <input type="text" name="degree" placeholder="Degree" required>
            <input type="text" name="institution" placeholder="Institution" required>
            <input type="text" name="year" placeholder="Year of Graduation" required>
        `;
        educationSection.appendChild(div);
    }
    // Add dynamic fields for Experience
    function addExperienceField() {
        const div = document.createElement('div');
        div.innerHTML = `
            <input type="text" name="jobTitle" placeholder="Job Title" required>
            <input type="text" name="company" placeholder="Company" required>
            <input type="text" name="years" placeholder="Years" required>
        `;
        experienceSection.appendChild(div);
    }
    // Add dynamic fields for Skills
    function addSkillField() {
        const div = document.createElement('div');
        div.innerHTML = `<input type="text" name="skill" placeholder="Skill" required>`;
        skillsSection.appendChild(div);
    }
    // Handle form submission and generate the resume
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        generateResume();
    });
    // Generate the resume content dynamically
    function generateResume() {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        // Create resume content
        resumeContent.innerHTML = `
            <h3 contenteditable="true">${firstName} ${lastName}</h3>
            <p contenteditable="true"><strong>Email:</strong> ${email}</p>
            <p contenteditable="true"><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <ul id="education-list"></ul>
            <h3>Experience</h3>
            <ul id="experience-list"></ul>
            <h3>Skills</h3>
            <ul id="skills-list"></ul>
        `;
        // Get dynamic fields for education, experience, and skills
        const educationList = document.getElementById('education-list');
        const experienceList = document.getElementById('experience-list');
        const skillsList = document.getElementById('skills-list');
        const educationInputs = educationSection.querySelectorAll('div');
        educationInputs.forEach((div) => {
            const degree = div.querySelector('input[name="degree"]').value;
            const institution = div.querySelector('input[name="institution"]').value;
            const year = div.querySelector('input[name="year"]').value;
            const li = document.createElement('li');
            li.innerHTML = `<strong contenteditable="true">${degree}</strong> – <em contenteditable="true">${institution}</em> (${year})`;
            educationList.appendChild(li);
        });
        const experienceInputs = experienceSection.querySelectorAll('div');
        experienceInputs.forEach((div) => {
            const jobTitle = div.querySelector('input[name="jobTitle"]').value;
            const company = div.querySelector('input[name="company"]').value;
            const years = div.querySelector('input[name="years"]').value;
            const li = document.createElement('li');
            li.innerHTML = `<strong contenteditable="true">${jobTitle}</strong> – <em contenteditable="true">${company}</em> (${years})`;
            experienceList.appendChild(li);
        });
        const skillsInputs = skillsSection.querySelectorAll('div');
        skillsInputs.forEach((div) => {
            const skill = div.querySelector('input[name="skill"]').value;
            const li = document.createElement('li');
            li.innerHTML = `<span contenteditable="true">${skill}</span>`;
            skillsList.appendChild(li);
        });
        // Make the resume editable
        const editableFields = resumeContent.querySelectorAll('[contenteditable="true"]');
        editableFields.forEach((field) => {
            field.addEventListener('blur', function () {
                // Optionally update the field's content here (e.g., save to localStorage or database)
                console.log(`${this.innerText} updated!`);
            });
        });
    }
});
