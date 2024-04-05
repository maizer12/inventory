import { SelectProps } from './Select.props';
import { FC } from 'react';
import cn from 'classnames';
import styles from './Select.module.scss';
import { ChevronDown } from 'lucide-react';

export const Select: FC<SelectProps> = ({ className = '' }) => {
	const classNames = cn(className, styles.select);

	{
		return (
			<label className={classNames}>
				<select>
					<option>456</option>
				</select>
				<ChevronDown />
			</label>
		);
	}
};
