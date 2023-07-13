type Base = {
	id: string;
	title: string;
};

type GenericSelectProps<TValue> = {
	values: TValue[];
	onChange: (value: TValue) => void;
};

export const GenericSelect = <TValue extends Base>({ values, onChange }: GenericSelectProps<TValue>) => {
	const onSelectChange = (e: any) => {
		const val = values.find((value) => value.id === e.target.value);

		if (val) onChange(val);
	};

	return (
		<select onChange={onSelectChange}>
			{values.map((value) => (
				<option key={value.id} value={value.id}>
					{value.title}
				</option>
			))}
		</select>
	);
};

// This select is a "Book" type, so the value will be "Book" and only "Book"
<GenericSelect<Book> onChange={(value) => console.log(value.author)} values={books} />;
