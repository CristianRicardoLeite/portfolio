<<<<<<< HEAD
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
=======
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
>>>>>>> e61af9065dd16f47778f0371167c536e0f18970d
