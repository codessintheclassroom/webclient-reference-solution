import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

import { Dog } from './Dog';
import { render } from 'react-testing-library';

describe('Dog', () => {
    it('should render the given title text', () => {
        const { getByText } = render(Dog({ name: 'mockTitle', description: 'mockText' }));
        expect(getByText('mockTitle')).toBeInTheDocument();
    });
      
    it('should render the given content text', () => {
        const { getByText } = render(Dog({ name: 'mockTitle', description: 'mockText' }));
        expect(getByText('mockText')).toBeInTheDocument();
    });
      
    it('should render the adopt button', () => {
        const { getByText } = render(Dog({ name: 'mockTitle', description: 'mockText' }));
        expect(getByText('Adopt')).toBeInTheDocument();
    });
});