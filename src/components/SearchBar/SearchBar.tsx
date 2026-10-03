import "./index.css";
import { useState, useEffect, useRef } from 'react';
import { fetchTitleMovies } from '../../api/Movies';
import { SearchResult } from '../SearchResult/SearchResult';
import type { IMovie } from '../../models/movies';
import { useSearchParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";

interface SearchBarProps  {
  isOpenMobile: boolean;
  onClose: () => void;
}

export const SearchBar = ({ isOpenMobile, onClose }: SearchBarProps ) => {
  const [results, setResults] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const debounceTimer = useRef<number | null>(null);
  const searchQuery = searchParams.get('searchTitle') || '';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        if (isOpenMobile) onClose?.();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpenMobile, onClose]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      setIsOpen(false);
      setIsLoading(false);
      return;
    }
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    setIsLoading(true);
    setIsOpen(true);
    setResults([]);

    debounceTimer.current = setTimeout(async () => {
      try {
        const data = await fetchTitleMovies(searchQuery);
        setResults(data.slice(0, 5));
      } catch (error) {
        console.error('Ошибка поиска:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newParams = new URLSearchParams(searchParams);

    if (value.trim()) {
      newParams.set('searchTitle', value.toLowerCase());
    } else {
      newParams.delete('searchTitle');
    }
    setSearchParams(newParams , { replace: true });
  }

  const handleResetSearch = () => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    setResults([]);
    setIsOpen(false);
    setIsLoading(false);
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('searchTitle');
    setSearchParams(newParams, { replace: true });
  }

  const handleSelect = () => {
    setIsOpen(false);
    if (isOpenMobile) onClose?.();
  };

  return (
    <>
      {isOpenMobile && (
        <div className="search-bar__overlay" />
      )}

      <div className={`search-bar ${isOpenMobile ? 'search-bar--open' : ''}`} ref={wrapperRef}>
        <div className="search-bar__input" >
          <svg className="search-bar__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <use href="/sprite.svg#search-icon">
            </use>
          </svg>

          <input
            type="text"
            className="search-bar__input-field"
            placeholder="Поиск фильмов..."
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => {
              if (searchQuery.trim()) setIsOpen(true);
            }}
          />
          {searchQuery.length > 0 && (
            <button type="button" className="search-bar__icon search-bar__icon--reset" onClick={handleResetSearch}>
              <svg width="24" height="24">
                <use href="/sprite.svg#close-large">
                </use>
              </svg>
            </button>)}
        </div>
        {isOpen && isLoading && <div className="search-bar__results"><Loader /></div>}

        {isOpen && results.length > 0 && (
          <ul className="search-bar__results">
            {results.map((movie) => (
              <li
                key={movie.id}
                className="search-result__item"
              >
                <SearchResult movie={movie} onSelect={handleSelect} />
              </li>
            ))}
          </ul>
        )}

        {isOpen && !isLoading && results.length === 0 && (
          <ul className="search-bar__results">
            <li className="search-bar__results-item search-bar__results-item--empty">
              <span>😕 Ничего не найдено</span>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};