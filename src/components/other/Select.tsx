import React,{ useState } from 'react';

interface Fruit {
	id: number;
	name: string;
}


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