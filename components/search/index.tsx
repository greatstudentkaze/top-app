import React, { FormEvent, useState } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';

import { Button, Input } from '../index';

import { SearchProps } from './index.props';
import styles from './index.module.css';
import SearchIcon from './search.svg';

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(evt.target.value);

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        q: searchQuery,
      }
    });
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    search();
  };

  return (
    <form className={cn(styles.search, className)} onSubmit={handleSubmit} role="search" {...props}>
      <Input className={styles.input} placeholder="Поиск..." aria-label="Поиск по сайту" value={searchQuery} onChange={handleChange} />
      <Button className={styles.button} aria-label="Найти" onClick={search}>
        <SearchIcon aria-hidden="true" />
      </Button>
    </form>
  );
};

export default Search;
