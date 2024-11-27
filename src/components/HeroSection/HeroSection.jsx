// SCSS
import Header from './Header/Header';
import Nav from './Nav/Nav';

export default function HeroSection({ title }) {
	return (
		<>
			<Nav />
			<Header title={title} />
		</>
	);
}
