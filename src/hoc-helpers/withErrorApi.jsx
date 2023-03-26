import { useState } from 'react';
import ErrorApi from '@components/Error/ErrorApi';

export const withErrorApi = View => {

	return props => {
	const [errorApi, setErrorApi] = useState(false)

		return (
			<>
			{errorApi ? <ErrorApi/> : (
			<View  setErrorApi={setErrorApi} {...props}/>)
			}
			</>
					)
	}
}
