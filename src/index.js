import './styles/main.scss';

import { list1, list2, list3 } from './arrays';
//BUTTON
import insultButton from './assets/banner-5.png';
let buttonIMG = document.getElementById('button');
buttonIMG.src = insultButton;
const button = document.querySelector('.button');

//DOM ELEMENTS FOR INSULTS
let insultOne = document.querySelector('.left');
let insultTwo = document.querySelector('.top');
let insultThree = document.querySelector('.right');

//INSULTS
let randomInsult1;
let randomInsult2;
let randomInsult3;
let insult;
let insult1;
let insult2;
let insult3;

const insultGenerator = () => {
	randomInsult1 = list1[Math.floor(Math.random() * list1.length)];
	randomInsult2 = list2[Math.floor(Math.random() * list2.length)];
	randomInsult3 = list3[Math.floor(Math.random() * list3.length)];

	insult = randomInsult1 + ' ' + randomInsult2 + ' ' + randomInsult3;

	insult1 = randomInsult1;
	insult2 = randomInsult2;
	insult3 = randomInsult3;

	removeAnimateClass();
	setTimeout(() => {
		addDOMElements();
		textToSpeech();
	}, 300);
};
const addDOMElements = () => {
	insultOne.textContent = insult1;
	insultOne.classList.add('animateIn');
	insultTwo.textContent = insult2;
	insultTwo.classList.add('animateIn');
	insultThree.textContent = insult3;
	insultThree.classList.add('animateIn');
};

const removeAnimateClass = () => {
	insultOne.classList.remove('animateIn');
	insultTwo.classList.remove('animateIn');
	insultThree.classList.remove('animateIn');
};

const textToSpeech = () => {
	let speech = new SpeechSynthesisUtterance();
	let speech1 = document.getElementById('insult1').textContent;
	let speech2 = document.getElementById('insult2').textContent;
	let speech3 = document.getElementById('insult3').textContent;
	console.log('1', speech1);
	console.log('2', speech2);
	console.log('3', speech3);
	speech.voiceURI = 'Daniel';
	speech.lang = 'en-GB';
	speech.rate = '1.2';
	speech.volume = '0.8';
	speech.pitch = '1.1';

	setTimeout(() => {
		speech.text = speech1;
		speechSynthesis.speak(speech);
		setTimeout(() => {
			speech.text = speech2;
			speechSynthesis.speak(speech);
			setTimeout(() => {
				speech.text = speech3;
				speechSynthesis.speak(speech);
			}, 600);
		}, 400);
	}, 200);
};

button.addEventListener('click', () => insultGenerator());
