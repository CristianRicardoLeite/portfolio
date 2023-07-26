import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <select onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="pt">Português</option>
        </select>
    );
};
