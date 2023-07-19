import React,{ useEffect,useState } from 'react';
import { useQuery } from 'react-query';
import { fetchData } from '../../api gateway/HomePage';


interface Genre {
	id: number;
	name: string;
}
interface SelectProps {
	options: Genre[];
	onChange: (selectedOption: Genre) => void;
}

function Select(props: SelectProps) {
	const { options, onChange } = props;
	const [selectedOption, setSelectedOption] = useState<Genre | null>(null);

	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = parseInt(event.target.value);

		const selectedOption = options.find((option) => option.id === selectedValue);
		if (selectedOption) {
			setSelectedOption(selectedOption);
			onChange(selectedOption);
		}
	};

	const fetchGenre = async (genreID: number) => {
		const res = await fetchData(
			`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${genreID}`
		);
		return res;
	};

		const { isLoading, isError, error, data, isFetching } = useQuery<any>(['genre', '123'], () => fetchGenre(123));

		console.log('dataaaaaaaa genre :', data);

	useEffect(() => {
		fetchGenre((selectedOption as Genre)?.id);
	}, [selectedOption]);

	return (
		<select
			value={selectedOption?.id || ''}
			onChange={handleSelectChange}
			className='appearance-none cursor-pointer text-xl bg-transparent text-white border border-gray-300 px-4 py-2 rounded-md shadow-sm leading-tight focus:outline-none'
		>

			{options.map((option) => (
				<option key={option.id} value={option.id} className='bg-transparent text-gray-600 cursor-pointer'>
					{option.name}
				</option>
			))}
		</select>
	);
}

export default Select;