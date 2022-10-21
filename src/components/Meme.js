import { useState } from 'react';
import memesData from '../memesData';

export default function Meme() {
	const [meme, setMeme] = useState({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg',
	});

	const [allMemeImages, setAllMemeImages] = useState(memesData.data.memes.map(meme => meme.url));

	function getMemeImage() {
		const randomIndex = Math.floor(Math.random() * allMemeImages.length);
		setMeme(prev => ({ ...prev, randomImage: allMemeImages[randomIndex] }));
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setMeme(prev => ({ ...prev, [name]: value }));
	}
	return (
		<main>
			<div className='form'>
				<input
					type='text'
					placeholder='Top text'
					className='form--input'
					name='topText'
					value={meme.topText}
					onChange={handleChange}
				/>
				<input
					type='text'
					placeholder='Bottom text'
					className='form--input'
					name='bottomText'
					value={meme.bottomText}
					onChange={handleChange}
				/>
				<button onClick={getMemeImage} className='form--button'>
					Get a new meme image 🖼
				</button>
			</div>
			<div className='meme'>
				<img src={meme.randomImage} className='meme--image' />
				<h2 className='meme--text top'>{meme.topText}</h2>
				<h2 className='meme--text bottom'>{meme.bottomText}</h2>
			</div>
		</main>
	);
}
