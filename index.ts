document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeContent = document.getElementById('resume-content') as HTMLDivElement;
    const educationSection = document.getElementById('education-section') as HTMLDivElement;
    const experienceSection = document.getElementById('experience-section') as HTMLDivElement;
    const skillsSection = document.getElementById('skills-section') as HTMLDivElement;

    // Event listeners for adding more education, experience, and skills
    document.getElementById('add-education')?.addEventListener('click', addEducationField);
    document.getElementById('add-experience')?.addEventListener('click', addExperienceField);
    document.getElementById('add-skill')?.addEventListener('click', addSkillField);

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
        const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
        const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;

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
        const educationList = document.getElementById('education-list') as HTMLUListElement;
        const experienceList = document.getElementById('experience-list') as HTMLUListElement;
        const skillsList = document.getElementById('skills-list') as HTMLUListElement;

        const educationInputs = educationSection.querySelectorAll('div');
        educationInputs.forEach((div) => {
            const degree = (div.querySelector('input[name="degree"]') as HTMLInputElement).value;
            const institution = (div.querySelector('input[name="institution"]') as HTMLInputElement).value;
            const year = (div.querySelector('input[name="year"]') as HTMLInputElement).value;
            const li = document.createElement('li');
            li.innerHTML = `<strong contenteditable="true">${degree}</strong> – <em contenteditable="true">${institution}</em> (${year})`;
            educationList.appendChild(li);
        });

        const experienceInputs = experienceSection.querySelectorAll('div');
        experienceInputs.forEach((div) => {
            const jobTitle = (div.querySelector('input[name="jobTitle"]') as HTMLInputElement).value;
            const company = (div.querySelector('input[name="company"]') as HTMLInputElement).value;
            const years = (div.querySelector('input[name="years"]') as HTMLInputElement).value;
            const li = document.createElement('li');
            li.innerHTML = `<strong contenteditable="true">${jobTitle}</strong> – <em contenteditable="true">${company}</em> (${years})`;
            experienceList.appendChild(li);
        });

        const skillsInputs = skillsSection.querySelectorAll('div');
        skillsInputs.forEach((div) => {
            const skill = (div.querySelector('input[name="skill"]') as HTMLInputElement).value;
            const li = document.createElement('li');
            li.innerHTML = `<span contenteditable="true">${skill}</span>`;
            skillsList.appendChild(li);
        });

        // Make the resume editable
        const editableFields = resumeContent.querySelectorAll('[contenteditable="true"]');
        editableFields.forEach((field) => {
            field.addEventListener('blur', function (this: HTMLElement) {
                // Optionally update the field's content here (e.g., save to localStorage or database)
                console.log(`${this.innerText} updated!`);
            });
        });
    }
});


