import React, { useEffect, useState } from 'react';
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

		const selectedOption: any = options.find((option) => option.id === selectedValue);

		if (selectedOption) {
			setSelectedOption(selectedOption.id);
			onChange(selectedOption.id);
		}
	};

	const fetchGenre = async (genreID: number) => {
		const res = await fetchData(
			`https://api.themoviedb.org/3/discover/movie?api_key=24a3eff201498db2ff80c33edb2337ca&with_genres=${genreID}`
		);
		return res;
	};

	useQuery<any>(['genre', (selectedOption as any)?.id], () => fetchGenre((selectedOption as any)?.id));

	// console.log('data genre select :', data);

	useEffect(() => {
		fetchGenre((selectedOption as Genre)?.id);
	}, [selectedOption]);

	return (
		<select
			value={selectedOption?.id || ''}
			onChange={handleSelectChange}
			className='appearance-none cursor-pointer text-xl bg-transparent text-black border border-gray-300 px-4 py-2 rounded-md shadow-sm leading-tight focus:outline-none'
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
