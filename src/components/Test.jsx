import { useSearchParams } from 'react-router-dom';

export const Test = () => {
	let [searchParams, setSearchParams] = useSearchParams();

	const handleCategoryChange = category => {
		setSearchParams({ category });
	};

	return (
		<div>
			<h2>Filter by Category</h2>
			<button onClick={() => handleCategoryChange('books')}>Books</button>
			<button onClick={() => handleCategoryChange('electronics')}>
				Electronics
			</button>
			{/* Display content based on searchParams */}
		</div>
	);
};
