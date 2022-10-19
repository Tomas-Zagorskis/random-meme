import { useState } from 'react';
import memesData from '../memesData';

export default function Meme() {
	const [memeImage, setMemeImage] = useState('');

	function getMemeImage() {
		const memesArray = memesData.data.memes;
		const randomIndex = Math.floor(Math.random() * memesArray.length);
		setMemeImage(memesArray[randomIndex].url);
	}
	return (
		<main>
			<div className='form'>
				<input type='text' placeholder='Top text' className='form--input' />
				<input type='text' placeholder='Bottom text' className='form--input' />
				<button onClick={getMemeImage} className='form--button'>
					Get a new meme image 🖼
				</button>
			</div>
			<img src={memeImage} alt='img' className='meme--image' />
		</main>
	);
}
