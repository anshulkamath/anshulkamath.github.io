import ProjectType from 'models/ProjectType';
import amazonPNG from 'resources/media/amazon.png';
import amistadPNG from 'resources/media/amistad.png';
import cTestingPNG from 'resources/media/cTesting.png';
import ellipticCurvePNG from 'resources/media/ellipticCurve.png';
import lightsMP4 from 'resources/media/lights.mp4';
import manimMP4 from 'resources/media/manim.mp4';
import prosperlyPNG from 'resources/media/prosperly.png';
import swollioPNG from 'resources/media/swollio.png';
import amazonProjectJSON from 'resources/project-data/amazon.json';
import amistadProjectJSON from 'resources/project-data/amistad.json';
import cTestingProjectJSON from 'resources/project-data/c-testing-library.json';
import ecdsaProjectJSON from 'resources/project-data/ecdsa.json';
import ledLightsProjectJSON from 'resources/project-data/led-lights.json';
import luluProjectJSON from 'resources/project-data/lulu.json';
import manimProjectJSON from 'resources/project-data/manim.json';
import prosperlyProjectJSON from 'resources/project-data/prosperly.json';
import shellProjectJSON from 'resources/project-data/shell.json';
import swollioProjectJSON from 'resources/project-data/swollio.json';
import websiteProjectJSON from 'resources/project-data/website.json';
export const amazonProject = Object.assign(Object.assign({}, amazonProjectJSON), { media: amazonPNG, projectType: ProjectType.WORK });
export const amistadProject = Object.assign(Object.assign({}, amistadProjectJSON), { media: amistadPNG, imgStyling: { objectFit: 'contain' }, projectType: ProjectType.WORK });
export const cTestingProject = Object.assign(Object.assign({}, cTestingProjectJSON), { media: cTestingPNG, projectType: ProjectType.PERSONAL });
export const ecdsaProject = Object.assign(Object.assign({}, ecdsaProjectJSON), { media: ellipticCurvePNG, projectType: ProjectType.PERSONAL });
export const ledLightsProject = Object.assign(Object.assign({}, ledLightsProjectJSON), { media: lightsMP4, imgStyling: { objectPosition: '-80px' }, projectType: ProjectType.PERSONAL });
export const luluProject = Object.assign(Object.assign({}, luluProjectJSON), { projectType: ProjectType.WORK });
export const manimProject = Object.assign(Object.assign({}, manimProjectJSON), { media: manimMP4, projectType: ProjectType.PERSONAL });
export const prosperlyProject = Object.assign(Object.assign({}, prosperlyProjectJSON), { media: prosperlyPNG, projectType: ProjectType.WORK });
export const shellProject = Object.assign(Object.assign({}, shellProjectJSON), { projectType: ProjectType.PERSONAL });
export const swollioProject = Object.assign(Object.assign({}, swollioProjectJSON), { media: swollioPNG, projectType: ProjectType.PERSONAL });
export const websiteProject = Object.assign(Object.assign({}, websiteProjectJSON), { media: ellipticCurvePNG, projectType: ProjectType.PERSONAL });
export const projectLists = {
    [ProjectType.PERSONAL]: [
        ecdsaProject,
        ledLightsProject,
        swollioProject,
        websiteProject,
        cTestingProject,
        manimProject,
        shellProject,
    ],
    [ProjectType.WORK]: [amazonProject, prosperlyProject, luluProject, amistadProject],
};
