const source = document.getElementById("handlebars-demo").innerHTML;
const template = Handlebars.compile(source);

const context =
{
    doctors: [{
    type: 'Doctors',
    aboutDoctors: 'Know more about Berlin Dental Centerpartners of success,an academic and practical experience  always provides you the best solutions.',
    doctor: [{
        photo: "'../js-folder/handlebars.min-v4.7.6.js'",
        name: 'AL –HASSAN DIAB',
        details: ['PHD in Oral Medicine & Implantology, Ain Shams University.', 'Lecturer in Periodontology and Implantology Department at the British University in Egypt.', 'Head manager of Implantology center in BUE hospitals.', 'Implantology specialist.', 'Diploma in medical uses of plasma, Vitoria - Spain.', 'Dental Implant and Bone Augmentation, Seoul - South Korea.']
    },
        { 
        photo: "'../js-folder/handlebars.min-v4.7.6.js'",
        name: 'AL –HASSAN DIAB',
        details: ['PHD in Oral Medicine & Implantology, Ain Shams University.', 'Lecturer in Periodontology and Implantology Department at the British University in Egypt.', 'Head manager of Implantology center in BUE hospitals.', 'Implantology specialist.', 'Diploma in medical uses of plasma, Vitoria - Spain.', 'Dental Implant and Bone Augmentation, Seoul - South Korea.']
        }]
},]
}
const compiledHtml = template(context);
const nameText = document.getElementById("aboutDoctor");

nameText.innerHTML = compiledHtml;

