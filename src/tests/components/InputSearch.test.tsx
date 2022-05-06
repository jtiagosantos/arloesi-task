import { InputSearch } from '@/components/InputSearch/InputSearch';
import { fireEvent, render } from '@testing-library/react';

const setSearchSpy = jest.fn();

const inputSearchProps = {
  search: '',
  setSearch: setSearchSpy,
}

describe('InputSearch component tests', () => {
  it('setSearch function in called when to write on input', () => {
    const { getByPlaceholderText } = render(
      <InputSearch {...inputSearchProps} />
    );

    const searchField = getByPlaceholderText('Search');

    fireEvent.change(searchField, {
      target: {
        value: 'mocked-search',
      },
    });

    expect(setSearchSpy).toBeCalled();
  });
})