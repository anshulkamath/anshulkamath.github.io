import ellipticCurve from 'resources/ellipticCurve.png';
export var ProjectType;
(function (ProjectType) {
    ProjectType["PERSONAL"] = "personal";
    ProjectType["WORK"] = "work";
})(ProjectType || (ProjectType = {}));
export const PROJECTS_TITLE = 'personal';
export const EXPERIENCE_TITLE = 'work';
export const ecdsaProject = {
    title: 'Cryptography Project',
    skills: ['C'],
    repo: 'https://github.com/anshulkamath/cryptography',
    media: ellipticCurve,
    mediaAlt: 'elliptic curve',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    thingsLearned: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    projectType: ProjectType.PERSONAL,
};
