import React,{ useEffect,useState } from 'react';
import { useQuery } from 'react-query';
import { fetchData } from '../../api gateway/HomePage';


interface SelectOption<T extends string> {
	value: T;
	label: string;
}
interface SelectProps<T extends string> {
	options: SelectOption<T>[];
	onChange: (selectedOption: SelectOption<T>) => void;
}

function Select<T extends string>(props: SelectProps<T>) {
	const { options, onChange } = props;
	const [selectedOption, setSelectedOption] = useState<SelectOption<T> | null>(null);

	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = event.target.value as T;

		const selectedOption = options.find((option) => option.value === selectedValue);
		if (selectedOption) {
			setSelectedOption(selectedOption);
			onChange(selectedOption);
		}
	};

	const fetchGenre = async (genreID: number) => {
		const res = await fetchData(`https://api.themoviedb.org/3/discover/movie?api_key={apiKey}&with_genres=${genreID}`);
		return res;
	};

		const { isLoading, isError, error, data, isFetching } = useQuery<any>(['genre', '123'], () => fetchGenre(123));

		console.log('dataaaaaaaa genre :', data);

	useEffect(() => {
		fetchGenre(123);
	}, [selectedOption]);

	return (
		<select
			value={selectedOption?.value || ''}
			onChange={handleSelectChange}
			className='appearance-none cursor-pointer text-xl bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm leading-tight focus:outline-none'
		>
			<option value='' className='bg-gray-100 cursor-pointer'>
				Select an option
			</option>
			{options.map((option) => (
				<option key={option.value} value={option.value} className='bg-gray-100 cursor-pointer'>
					{option.label}
				</option>
			))}
		</select>
	);
}

export default Select;